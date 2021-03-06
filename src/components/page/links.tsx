import React from 'react';

import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';
import { isMobile, scrollToId } from 'ui/utils';

interface Props {
  items: { id: string; text: string }[];
}

const PageLinks = ({ items }: Props) => (
  <l.Flex height={th.spacing.xl} mb={[th.spacing.lg, th.spacing.xl]}>
    {items.map(({ id, text }) => (
      <l.Flex
        alignCenter
        cursor="pointer"
        flex={1}
        justifyCenter
        key={id}
        onClick={() => {
          scrollToId(id);
        }}
      >
        <ty.LargeText
          center={isMobile()}
          fontSize={[th.fontSizes.body, th.fontSizes.large]}
        >
          {text}
        </ty.LargeText>
      </l.Flex>
    ))}
  </l.Flex>
);

export default PageLinks;
