import React from 'react';

import EmailImg from 'assets/images/email';
import HoursImg from 'assets/images/hours';
import LocationImg from 'assets/images/location.png';
import PhoneImg from 'assets/images/phone';
import Heading from 'components/heading';
import Hero from 'components/hero';
import QuoteForm from 'components/quote-form';
import SocialIcons from 'components/social-icons';
import useScroll from 'hooks/use-scroll';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';

const Contact = () => {
  useScroll();
  return (
    <l.Div>
      <Hero text="Contact Us" />
      <l.PageContent>
        <l.Flex justifyBetween>
          <l.Flex alignCenter column width="50%">
            <Heading text="Shooting Star Productions" />
            <l.Div my={th.spacing.xl} mx={0} width="65%">
              <l.Flex>
                <l.Div width={96}>
                  <PhoneImg />
                </l.Div>
                <l.Anchor href="tel:15088476380">
                  <ty.LargeText>(508) 847 - 6380</ty.LargeText>
                </l.Anchor>
              </l.Flex>
              <l.Div height={th.spacing.lg} />
              <l.Flex>
                <l.Div width={96}>
                  <EmailImg />
                </l.Div>
                <ty.LargeText>Please use contact form</ty.LargeText>
              </l.Flex>
              <l.Div height={th.spacing.lg} />
              <l.Flex>
                <l.Div width={96}>
                  <HoursImg />
                </l.Div>
                <ty.LargeText>
                  Monday - Friday,
                  <br />
                  8am - 5pm
                </ty.LargeText>
              </l.Flex>
            </l.Div>
            <l.Anchor
              href="https://www.google.com/maps/place/50+Franklin+St,+Worcester,+MA+01608/@42.261213,-71.8037655,17z/data=!3m1!4b1!4m5!3m4!1s0x89e406643841ca63:0x8f906e99a7f83c9a!8m2!3d42.2612091!4d-71.8015715"
              rel="noopener noreferrer"
              target="_blank"
            >
              <l.Img width="100%" src={LocationImg} />
            </l.Anchor>
            <ty.LargeText
              fontSize={th.fontSizes.title}
              mb={th.spacing.lg}
              mt={th.spacing.xl}
            >
              Follow Us:
            </ty.LargeText>
            <SocialIcons gap={th.spacing.lg} size={th.sizes.md} />
          </l.Flex>
          <l.Flex column width="42%">
            <QuoteForm />
          </l.Flex>
        </l.Flex>
        <l.Div height={th.spacing.xxl} />
      </l.PageContent>
    </l.Div>
  );
};

export default Contact;
