import React from 'react';
import { stack as Menu, Props } from 'react-burger-menu';

import th from 'ui/theme';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '21px',
    height: '17px',
    left: '16px',
    top: '30px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: th.colors.brand.secondary,
  },
  bmCrossButton: {
    height: '24px',
    left: '200px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    height: th.sizes.fill,
    marginTop: `${th.heights.nav}px`,
    position: 'fixed',
  },
  bmMenu: {
    background: th.colors.background,
    fontSize: '1.15em',
    padding: '1.5em 0 0',
    width: '250px',
  },
  bmMorphShape: {
    fill: th.colors.background,
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0 1.5em',
  },
  bmItem: {
    display: 'inline-block',
    width: th.sizes.fill,
  },
  bmOverlay: {
    background: th.colors.overlay.dark,
    marginTop: `${th.heights.nav}px`,
  },
};

const MobileNav = ({
  children,
  ...rest
}: { children: React.ReactNode } & Props) => (
  <Menu disableAutoFocus styles={styles} {...rest}>
    {children}
  </Menu>
);

export default MobileNav;
