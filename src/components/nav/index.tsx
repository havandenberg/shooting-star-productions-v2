import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import LogoImg from 'assets/images/logo.png';
import MobileNav from 'components/nav/mobile';
import { CONTACT_FORM_ID } from 'components/quote-form';
import SocialIcons from 'components/social-icons';
import b from 'ui/button';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';
import { hexColorWithTransparency, isMobile } from 'ui/utils';

export const navItems: NavItemProps[] = [
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
      padding: isMobile() ? `${th.spacing.md} 0` : th.spacing.md,
    },
    transition: th.transitions.default,
    width: isMobile() ? th.sizes.fill : 'auto',
    ':hover': {
      p: {
        color: th.colors.brand.primary,
      },
    },
  }),
);

interface NavItemProps {
  active?: boolean;
  text: string;
  to: string;
}

const NavItem = ({ active, text, to }: NavItemProps) => (
  <StyledNavItem active={active} to={to}>
    <ty.DisplayText fontSize={th.fontSizes.large}>{text}</ty.DisplayText>
  </StyledNavItem>
);

const Wrapper = styled(l.Flex)(
  ({ mobileIsOpen }: { mobileIsOpen: boolean }) => ({
    background: mobileIsOpen
      ? th.colors.background
      : hexColorWithTransparency(th.colors.background, 0.8),
    boxShadow: th.shadows.nav,
    left: 0,
    height: th.heights.nav,
    padding: `0 ${th.spacing.md}`,
    position: 'fixed',
    right: 0,
    top: 0,
    transition: th.transitions.default,
    zIndex: 10,
    ':hover': {
      background: th.colors.background,
    },
  }),
);

const Nav = () => {
  const { pathname } = useLocation();
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  const toggleMobileIsOpen = (value: boolean) => () => {
    setMobileIsOpen(value);
  };

  return (
    <>
      <Wrapper
        alignCenter
        columnOnMobile
        justifyBetween
        mobileIsOpen={mobileIsOpen}
      >
        <l.AreaLink
          height={['auto', th.sizes.xl]}
          mt={[th.spacing.xs, 0]}
          ml={[th.spacing.xl, 0]}
          mr={[th.spacing.lg, 0]}
          width={['90%', 'auto']}
          to="/"
        >
          <l.Img
            height={['auto', th.sizes.xl] as any}
            src={LogoImg}
            width={[th.sizes.fill, 'auto'] as any}
          />
        </l.AreaLink>
        {!isMobile() && (
          <l.Flex alignEnd column justifyBetween>
            <SocialIcons size={th.sizes.icon} />
            <l.Flex alignCenter alignSelf="flex-end">
              {navItems.map((item, idx) => (
                <NavItem active={pathname === item.to} key={idx} {...item} />
              ))}
              <l.AreaLink
                ml={th.spacing.md}
                to={`/contact?id=${CONTACT_FORM_ID}`}
              >
                <b.Primary>Get Quote</b.Primary>
              </l.AreaLink>
            </l.Flex>
          </l.Flex>
        )}
      </Wrapper>
      {isMobile() && (
        <MobileNav
          isOpen={mobileIsOpen}
          onClose={toggleMobileIsOpen(false)}
          onOpen={toggleMobileIsOpen(true)}
        >
          <l.Flex column>
            {navItems.map((item, idx) => (
              <NavItem active={pathname === item.to} key={idx} {...item} />
            ))}
            <l.Div height={th.spacing.md} />
            <SocialIcons size={th.sizes.icon} />
            <l.Div height={th.spacing.lg} />
            <l.AreaLink to={`/contact?id=${CONTACT_FORM_ID}`}>
              <b.Primary fontSize={th.fontSizes.body} height={50} width={100}>
                Get Quote
              </b.Primary>
            </l.AreaLink>
          </l.Flex>
        </MobileNav>
      )}
    </>
  );
};

export default Nav;
