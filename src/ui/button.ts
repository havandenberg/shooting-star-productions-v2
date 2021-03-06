import styled from '@emotion/styled';

import { divPropsSet, DivProps } from './layout';
import { textPropsSet, TextProps } from './typography';
import th from './theme';
import { isMobile } from './utils';

const defaultStyles = {
  background: 'transparent',
  border: 0,
  borderRadius: th.borderRadii.default,
  cursor: 'pointer',
  fontFamily: th.fontFamilies.header,
  fontSize: isMobile() ? th.fontSizes.caption : th.fontSizes.body,
  height: th.heights.input,
  letterSpacing: 1.2,
  margin: 0,
  padding: isMobile() ? `0 ${th.spacing.sm}` : `0 ${th.spacing.md}`,
  transition: th.transitions.default,
  ':focus': { outline: 0 },
};

export const Default = styled.button<DivProps & TextProps>(
  defaultStyles,
  divPropsSet,
  textPropsSet,
);

const primaryStyles = {
  ...defaultStyles,
  background: th.colors.brand.secondary,
  color: th.colors.white,
  ':hover': {
    background: th.colors.brand.secondaryAccent,
  },
};

const Primary = styled.button<DivProps & TextProps>(
  primaryStyles,
  divPropsSet,
  textPropsSet,
);

const secondaryStyles = (color: string) => ({
  ...defaultStyles,
  border: `3px solid ${color}`,
  color,
  ':hover': {
    background: th.colors.brand.secondaryAccent,
    borderColor: th.colors.brand.secondaryAccent,
    color: th.colors.white,
  },
});

const SecondaryBlue = styled.button<DivProps & TextProps>(
  secondaryStyles(th.colors.brand.secondary),
  divPropsSet,
  textPropsSet,
);

const SecondaryWhite = styled.button<DivProps & TextProps>(
  secondaryStyles(th.colors.white),
  divPropsSet,
  textPropsSet,
);

export default {
  Default,
  Primary,
  SecondaryBlue,
  SecondaryWhite,
};
