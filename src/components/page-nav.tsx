import React from 'react';

import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';
import { scrollToId } from 'ui/utils';

interface Props {
  items: { id: string; text: string }[];
}

const PageNav = ({ items }: Props) => (
  <l.Flex height={th.spacing.xxl} mb={th.spacing.xl}>
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
        <ty.LargeText>{text}</ty.LargeText>
      </l.Flex>
    ))}
  </l.Flex>
);

export default PageNav;
