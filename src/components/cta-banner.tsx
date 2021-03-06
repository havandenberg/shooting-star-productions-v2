import React from 'react';

import b from 'ui/button';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';
import { isMobile } from 'ui/utils';

const CTABanner = () => (
  <l.Flex
    bg={th.colors.brand.secondary}
    px={[th.spacing.lg, th.spacing.xl]}
    py={[th.spacing.md, th.spacing.lg]}
  >
    <l.Flex alignCenter justifyBetween mx="auto" width={th.widths.maxContent}>
      <ty.DisplayText
        fontSize={[th.fontSizes.body, th.fontSizes.display]}
        inverted
      >
        Ready To Turn Your {isMobile() ? <br /> : ' '}
        <l.Span
          fontSize={isMobile() ? th.fontSizes.large : th.fontSizes.display}
        >
          Vision Into Reality?
        </l.Span>
      </ty.DisplayText>
      <l.AreaLink to="/contact?id=contact-form">
        <b.SecondaryWhite
          fontSize={[th.fontSizes.large]}
          height={[50, 60]}
          width={[125, 150]}
        >
          Get Quote
        </b.SecondaryWhite>
      </l.AreaLink>
    </l.Flex>
  </l.Flex>
);

export default CTABanner;
