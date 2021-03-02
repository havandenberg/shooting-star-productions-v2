import React from 'react';

import InstagramImg from 'assets/images/instagram';
import YoutubeImg from 'assets/images/youtube';
import l from 'ui/layout';
import th from 'ui/theme';

const INSTAGRAM_PATH = 'https://www.instagram.com/shootingstar.us';
const YOUTUBE_PATH = 'https://www.youtube.com/user/nicolasandrews95';

const SocialIcons = ({ inverted }: { inverted?: boolean }) => (
  <l.Flex>
    <l.Anchor href={YOUTUBE_PATH} mr={th.spacing.md} target="_blank">
      <YoutubeImg color={inverted ? th.colors.white : th.colors.black} />
    </l.Anchor>
    <l.Anchor href={INSTAGRAM_PATH} target="_blank">
      <InstagramImg color={inverted ? th.colors.white : th.colors.black} />
    </l.Anchor>
  </l.Flex>
);

export default SocialIcons;
