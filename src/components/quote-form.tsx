import React from 'react';
import styled from '@emotion/styled';
import EmailJS from 'emailjs-com';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { PropagateLoader } from 'react-spinners';
import { object, string } from 'yup';
import 'yup-phone-lite';

import b from 'ui/button';
import i from 'ui/input';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';
import { scrollToId } from 'ui/utils';

export const CONTACT_FORM_ID = 'contact-form';

const Wrapper = styled(l.Div)({
  borderRadius: th.borderRadii.default,
  background: th.colors.lightGray,
  border: th.borders.input,
  overflow: 'hidden',
});

const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
});

interface Fields {
  city: string;
  company: string;
  email: string;
  message: string;
  name: string;
  phone: string;
  source: string;
}

const inputFields: { key: keyof Fields; placeholder: string }[] = [
  { key: 'name', placeholder: 'Your Name (required)' },
  { key: 'company', placeholder: 'Company' },
  { key: 'email', placeholder: 'Email (required)' },
  { key: 'phone', placeholder: 'Phone (required)' },
  { key: 'city', placeholder: 'City / Town' },
  { key: 'source', placeholder: 'How did you find us? (required)' },
];

const validationSchema = object().shape({
  name: string().required(),
  message: string().required(),
  source: string().required(),
  phone: string().phone().required(),
  email: string().email().required(),
});

const initialValues = {
  email: '',
  message: '',
  name: '',
  company: '',
  city: '',
  source: '',
  phone: '',
};

const QuoteForm = () => {
  const handleReset = (
    values: Fields,
    { setStatus }: FormikHelpers<Fields>,
  ) => {
    setStatus('');
  };

  const handleSubmit = (
    values: Fields,
    { setStatus, setSubmitting }: FormikHelpers<Fields>,
  ) => {
    if (process.env.REACT_APP_EMAILJS_KEY) {
      EmailJS.send(
        'halsey_vandenberg',
        'shooting-star-contact-form',
        {
          city: values.city,
          company: values.company,
          from_name: values.name,
          message: values.message,
          phone: values.phone,
          reply_to: values.email,
          source: values.source,
        },
        process.env.REACT_APP_EMAILJS_KEY,
      )
        .then(() => {
          scrollToId(CONTACT_FORM_ID);
          setStatus('completed');
          setSubmitting(false);
        })
        .catch(() => {
          scrollToId(CONTACT_FORM_ID);
          setStatus('failed');
          setSubmitting(false);
        });
    }
  };

  return (
    <Wrapper id={CONTACT_FORM_ID}>
      <ty.TitleText
        center
        fontFamily={th.fontFamilies.header}
        my={th.spacing.lg}
      >
        Request a Free Quote
      </ty.TitleText>
      <Formik
        initialStatus={''}
        initialValues={initialValues}
        onReset={handleReset}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<Fields>) => {
          const {
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
            resetForm,
            status,
            touched,
            values,
          } = props;
          const handleReset = () => {
            resetForm();
            scrollToId(CONTACT_FORM_ID);
          };
          return (
            <l.Div id={CONTACT_FORM_ID}>
              {status === 'completed' && (
                <l.Flex column>
                  <ty.BodyText center color={th.colors.status.success}>
                    Success!
                  </ty.BodyText>
                  <l.Div height={th.spacing.md} />
                  <b.SecondaryBlue onClick={handleReset}>Reset</b.SecondaryBlue>
                </l.Flex>
              )}
              {status === 'failed' && (
                <l.Flex column>
                  <ty.BodyText center color={th.colors.status.error}>
                    Submission failed, please try again later.
                  </ty.BodyText>
                  <l.Div height={th.spacing.md} />
                  <b.SecondaryBlue onClick={handleReset}>Reset</b.SecondaryBlue>
                </l.Flex>
              )}
              {!status && (
                <Form
                  onSubmit={(e?: React.FormEvent<HTMLFormElement>) => {
                    scrollToId(CONTACT_FORM_ID);
                    handleSubmit(e);
                  }}
                >
                  {inputFields.map(({ key, placeholder }) => (
                    <l.Flex key={key} mx="auto" width="85%">
                      <i.TextInput
                        error={touched[key] && errors[key]}
                        flex={1}
                        id={key}
                        mb={th.spacing.md}
                        onChange={handleChange}
                        placeholder={placeholder}
                        value={values[key]}
                      />
                    </l.Flex>
                  ))}
                  <l.Flex mx="auto" width="85%">
                    <i.TextArea
                      error={touched.message && errors.message}
                      height={150}
                      id="message"
                      onChange={handleChange}
                      paddingTop={th.spacing.sm}
                      placeholder="Tell us about your project"
                      value={values.message}
                    />
                  </l.Flex>
                  <l.Div height={th.spacing.lg} />
                  <l.Flex column>
                    {isSubmitting ? (
                      <PropagateLoader
                        size={30}
                        color={th.colors.brand.primary}
                      />
                    ) : (
                      <b.Primary
                        borderRadius={0}
                        fontSize={th.fontSizes.title}
                        height={th.sizes.lg}
                        width={th.sizes.fill}
                      >
                        Request Quote
                      </b.Primary>
                    )}
                  </l.Flex>
                </Form>
              )}
            </l.Div>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default QuoteForm;
