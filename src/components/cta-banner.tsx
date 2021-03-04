import React from 'react';

import b from 'ui/button';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';

const CTABanner = () => (
  <l.Flex bg={th.colors.brand.secondary} px={th.spacing.xl} py={th.spacing.lg}>
    <l.Flex justifyBetween mx="auto" width={th.widths.maxContent}>
      <ty.DisplayText inverted>
        Ready To Turn Your Vision Into Reality?
      </ty.DisplayText>
      <b.SecondaryWhite fontSize={th.fontSizes.large} height={60} width={150}>
        Get Quote
      </b.SecondaryWhite>
    </l.Flex>
  </l.Flex>
);

export default CTABanner;
