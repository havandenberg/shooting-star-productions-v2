import React from 'react';
import { TextAlignProp } from 'onno-react';

import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';

const Heading = ({
  id,
  text,
  textAlign = 'center',
}: {
  id?: string;
  text: string;
  textAlign?: TextAlignProp;
}) => (
  <l.Flex alignCenter={textAlign === 'center'} column id={id}>
    <ty.TitleText
      lineHeight={1.7}
      fontFamily={th.fontFamilies.header}
      mb={th.spacing.md}
      textAlign={textAlign}
    >
      {text}
    </ty.TitleText>
    <l.Div bdb={th.borders.primary} width={th.spacing.xxl} />
  </l.Flex>
);

export default Heading;
