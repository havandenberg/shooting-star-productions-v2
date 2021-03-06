import styled from '@emotion/styled';
import {
  flex,
  FlexProps,
  height,
  HeightProps,
  spaceSet,
  SpaceSetProps,
  width,
  WidthProps,
} from 'onno-react';

import th from 'ui/theme';
import { hexColorWithTransparency } from 'ui/utils';

const inputStyles: any = {
  background: th.colors.white,
  borderRadius: th.borderRadii.default,
  color: th.colors.text.default,
  fontFamily: th.fontFamilies.body,
  fontSize: th.fontSizes.body,
  height: th.heights.input,
  outline: 'none',
  padding: `0 ${th.spacing.sm}`,
  transition: th.transitions.default,
  width: th.sizes.fill,
  ':hover': {
    '::placeholder': {
      color: th.colors.black,
    },
  },
  '::placeholder': {
    color: hexColorWithTransparency('#000000', 0.6),
    transition: th.transitions.default,
  },
  ':focus': {
    '::placeholder': {
      color: th.colors.black,
    },
  },
};

interface ErrorProps {
  error?: boolean | string;
}

type InputProps = ErrorProps &
  FlexProps &
  HeightProps &
  SpaceSetProps &
  WidthProps;

const withError = ({ error }: ErrorProps) => ({
  border: error ? th.borders.error : th.borders.input,
});

const TextArea = styled.textarea<InputProps>(
  inputStyles,
  withError,
  height,
  spaceSet,
  width,
);

const TextInput = styled.input<InputProps>(
  inputStyles,
  withError,
  flex,
  spaceSet,
  width,
);

export default { TextArea, TextInput };
