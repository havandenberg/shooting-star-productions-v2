import React from 'react';

import { ASSETS_PATH } from 'api';
import CoverImg from 'assets/images/cover-1.jpg';
import Heading from 'components/heading';
import Hero from 'components/page/hero';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';
import useScroll from 'hooks/use-scroll';

const Services = () => {
  useScroll();
  return (
    <l.Div>
      <Hero imageSrc={CoverImg} text="Services" />
      <l.PageContent>
        <Heading id="full-service" text="Full Service Video Production" />
        <l.Div height={th.spacing.xl} />
        <l.Flex alignCenter justifyCenter width="100%">
          <video autoPlay controls preload="true" height="100%" width="100%">
            <source src={`${ASSETS_PATH}/v2/AD.mp4`} type="video/mp4" />
          </video>
        </l.Flex>
        <l.Div height={th.spacing.lg} />
        <ty.ContentText center my={th.spacing.lg}>
          At Shooting Star Productions, we believe that every story begins with
          a single idea, fully imagined by its creator.
        </ty.ContentText>
        <ty.ContentText center my={th.spacing.lg}>
          The essence of our filmmaking comes through creating breathtaking,
          unforgettable shots that fully immerse your audience in your story on
          the screen.
        </ty.ContentText>
        <ty.ContentText center my={th.spacing.lg}>
          Our team of professional filmmakers will help you turn your vision
          into a reality, while making the process enjoyable and efficient. We
          will maximize the impact of your idea so you can reach more people
          than ever before.
        </ty.ContentText>
        <ty.ContentText center my={th.spacing.lg}>
          With the potential to rise above all others in your industry, your
          idea is full of endless possibilities. Shooting Star Productions will
          take you right to the top.
        </ty.ContentText>
        <ty.ContentText center>Why wait? Let’s create.</ty.ContentText>
        <l.Div height={th.spacing.xxl} />
      </l.PageContent>
    </l.Div>
  );
};

export default Services;
