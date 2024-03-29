import React from 'react';

import InstagramImg from 'assets/images/instagram';
import l from 'ui/layout';
import th from 'ui/theme';
import { hexColorWithTransparency } from 'ui/utils';

const INSTAGRAM_PATH = 'https://www.instagram.com/shootingstar.us';

const SocialIcons = ({
  gap = th.spacing.md,
  inverted,
  size = th.sizes.sm,
}: {
  gap?: string | number;
  inverted?: boolean;
  size?: string | number;
}) => (
  <l.Anchor href={INSTAGRAM_PATH} target="_blank">
    <InstagramImg
      fill={
        inverted
          ? hexColorWithTransparency(th.colors.white, th.opacities.secondary)
          : th.colors.black
      }
      height={size}
      width={size}
    />
  </l.Anchor>
);

export default SocialIcons;
