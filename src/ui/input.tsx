import styled from '@emotion/styled';
import { spaceSet, width } from 'onno-react';

import th from 'ui/theme';

const TextInput = styled.input(
  {
    background: 'transparent',
    border: 0,
    borderRadius: th.borderRadii.default,
    color: th.colors.text.default,
    fontFamily: th.fontFamilies.body,
    fontSize: th.fontSizes.body,
    height: th.sizes.fill,
    left: 0,
    outline: 'none',
    position: 'absolute',
    top: 0,
    transition: th.transitions.default,
    ':hover': {
      '::placeholder': {
        color: th.colors.brand.secondary,
      },
    },
    '::placeholder': {
      color: th.colors.brand.secondaryDisabled,
      transition: th.transitions.default,
    },
    ':focus': {
      '::placeholder': {
        color: th.colors.brand.secondary,
      },
    },
  },
  spaceSet,
  width,
);

export default TextInput;
