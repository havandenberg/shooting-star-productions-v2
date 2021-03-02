import React from 'react';
import styled from '@emotion/styled';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import LogoImg from 'assets/images/logo.png';
import SocialIcons from 'components/social-icons';
import b from 'ui/button';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';

const navItems: NavItemProps[] = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Services',
    to: '/services',
  },
  {
    text: 'About Us',
    to: '/about-us',
  },
  {
    text: 'Portfolio',
    to: '/portfolio',
  },
  {
    text: 'Contact',
    to: '/contact',
  },
];

const StyledNavItem = styled(l.AreaLink)(
  ({ active }: { active?: boolean }) => ({
    p: {
      color: active ? th.colors.brand.primary : th.colors.text.default,
    },
    padding: th.spacing.md,
    transition: th.transitions.default,
    ':hover': {
      p: {
        color: th.colors.brand.primary,
      },
    },
  }),
);

export interface NavItemProps {
  active?: boolean;
  text: string;
  to: string;
}

const NavItem = ({ active, text, to }: NavItemProps) => (
  <StyledNavItem active={active} to={to}>
    <ty.DisplayText fontSize={th.fontSizes.large}>{text}</ty.DisplayText>
  </StyledNavItem>
);

const Wrapper = styled(l.Flex)({
  background: th.colors.background,
  left: 0,
  padding: `${th.spacing.sm} ${th.spacing.md}`,
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 10,
});

const Nav = ({ location: { pathname } }: RouteComponentProps) => (
  <Wrapper alignCenter justifyBetween>
    <l.AreaLink height={th.sizes.xl} to="/">
      <l.Img height={th.sizes.xl} src={LogoImg} />
    </l.AreaLink>
    <l.Flex alignEnd column justifyBetween>
      <SocialIcons />
      <l.Flex alignCenter alignSelf="flex-end">
        {navItems.map((item, idx) => (
          <NavItem active={pathname.includes(item.to)} key={idx} {...item} />
        ))}
        <l.AreaLink ml={th.spacing.md} to="/contact">
          <b.Primary>Get Quote</b.Primary>
        </l.AreaLink>
      </l.Flex>
    </l.Flex>
  </Wrapper>
);

export default withRouter(Nav);
