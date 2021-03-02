import styled from '@emotion/styled';

import { divPropsSet, DivProps } from './layout';
import { textPropsSet, TextProps } from './typography';
import th from './theme';

const defaultStyles = {
  background: 'transparent',
  border: 0,
  borderRadius: th.borderRadii.default,
  cursor: 'pointer',
  fontFamily: th.fontFamilies.header,
  height: th.heights.input,
  letterSpacing: 1.2,
  margin: 0,
  padding: 0,
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
  fontSize: th.fontSizes.body,
  padding: `0 ${th.spacing.md}`,
  transition: th.transitions.default,
};

const Primary = styled.button<DivProps & TextProps>(
  primaryStyles,
  divPropsSet,
  textPropsSet,
);

export default {
  Default,
  Primary,
};
