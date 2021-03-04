import styled from '@emotion/styled';
import {
  backgroundSet,
  BackgroundSetProps,
  borderSet,
  BorderSetProps,
  BoxShadowProps,
  boxShadow,
  displaySet,
  DisplaySetProps,
  flexSet,
  FlexSetProps,
  gridSet,
  GridSetProps,
  height,
  HeightProps,
  layoutSet,
  LayoutSetProps,
  overflowSet,
  OverflowSetProps,
  positionSet,
  PositionSetProps,
  size,
  SizeProps,
  spaceSet,
  SpaceSetProps,
  textSet,
  TextSetProps,
  transformSet,
  TransformSetProps,
  transition,
  TransitionProps,
  width,
  WidthProps,
} from 'onno-react';
import { Link as RouterLink } from 'react-router-dom';

import th from './theme';

interface CustomDivProps {
  alignCenter?: boolean;
  alignEnd?: boolean;
  alignStart?: boolean;
  centered?: boolean;
  column?: boolean;
  columnOnMobile?: boolean;
  columnReverseOnMobile?: boolean;
  cursor?: 'default' | 'pointer';
  inline?: boolean;
  justifyBetween?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  justifyStart?: boolean;
  relative?: boolean;
  wrap?: boolean;
}

const customOptions: (props: CustomDivProps) => any = ({
  alignCenter,
  alignEnd,
  alignStart,
  centered,
  column,
  columnOnMobile,
  columnReverseOnMobile,
  cursor,
  inline,
  justifyBetween,
  justifyCenter,
  justifyEnd,
  justifyStart,
  relative,
  wrap,
}) => ({
  alignItems: alignStart
    ? 'flex-start'
    : alignEnd
    ? 'flex-end'
    : alignCenter || centered
    ? 'center'
    : undefined,
  flexDirection: column ? 'column' : undefined,
  cursor,
  display: inline ? 'inline-block' : undefined,
  flexWrap: wrap ? 'wrap' : undefined,
  justifyContent: justifyStart
    ? 'flex-start'
    : justifyEnd
    ? 'flex-end'
    : justifyCenter || centered
    ? 'center'
    : justifyBetween
    ? 'space-between'
    : undefined,
  position: relative ? 'relative' : undefined,
  [th.breakpointQueries.small]:
    columnOnMobile || columnReverseOnMobile
      ? { flexDirection: columnReverseOnMobile ? 'column-reverse' : 'column' }
      : {},
});

export type DivProps = BackgroundSetProps &
  BorderSetProps &
  BoxShadowProps &
  DisplaySetProps &
  FlexSetProps &
  GridSetProps &
  LayoutSetProps &
  OverflowSetProps &
  PositionSetProps &
  SpaceSetProps &
  TextSetProps &
  TransformSetProps &
  TransitionProps &
  CustomDivProps;

export const divPropsSet = [
  backgroundSet,
  borderSet,
  boxShadow,
  displaySet,
  flexSet,
  gridSet,
  layoutSet,
  overflowSet,
  positionSet,
  spaceSet,
  textSet,
  transformSet,
  transition,
  customOptions,
];

const Div = styled.div<DivProps>(divPropsSet);
const Span = styled.span<DivProps>(divPropsSet);

const Flex = styled(Div)({ display: 'flex' }, divPropsSet);

const Grid = styled(Div)(
  {
    display: 'grid',
  },
  divPropsSet,
);

export const Anchor = styled.a<DivProps>(
  {
    textDecoration: 'none',
    ':link': {
      color: th.colors.text.link,
    },
    ':visited': {
      color: th.colors.text.link,
    },
  },
  divPropsSet,
);
export const AreaLink = styled(RouterLink)<DivProps>(
  {
    textDecoration: 'none',
  },
  divPropsSet,
);

export type ImgProps = HeightProps &
  SizeProps &
  SpaceSetProps &
  TransitionProps &
  WidthProps;
const Img = styled.img<ImgProps>(height, size, spaceSet, transition, width);

const PageContent = styled(Div)(
  {
    margin: `${th.spacing.xl} auto`,
    maxWidth: th.widths.maxContent,
  },
  divPropsSet,
);

export default {
  AreaLink,
  Anchor,
  Div,
  Flex,
  Grid,
  Img,
  PageContent,
  Span,
};
