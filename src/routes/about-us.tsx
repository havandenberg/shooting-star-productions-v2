import React, { Fragment } from 'react';

import { ASSETS_PATH } from 'api';
import CoverImg from 'assets/images/cover-3.jpg';
import ProfileImg from 'assets/images/profile.jpg';
import Heading from 'components/heading';
import Hero from 'components/page/hero';
import PageNav from 'components/page/links';
import useScroll from 'hooks/use-scroll';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';

const navItems = [
  { id: 'principles', text: 'Principles Of Our Work' },
  { id: 'team', text: 'Meet The Team' },
];

const teamMembers = [
  {
    bio:
      "I’m a videographer and photographer in the Worcester area. I’ve been making videos, taking photos, and using social media since 2012. In the last few years, I started doing YouTube and people would really enjoy my editing. That's when Shooting Star Production was created! I wanted to help others capture moments and share their stories.",
    name: 'Nicolas Andrews',
    photoSrc: `${ASSETS_PATH}/nic.png`,
    title: 'Production Lead',
  },
];

const AboutUs = () => {
  useScroll();
  return (
    <l.Div>
      <Hero imageSrc={CoverImg} text="About Us" />
      <l.PageContent>
        <PageNav items={navItems} />
        <Heading id="principles" text="Principles Of Our Work" />
        <l.Flex
          columnOnMobile
          justifyBetween
          mb={th.spacing.xxl}
          mt={th.spacing.xl}
        >
          <l.Div width={[th.sizes.fill, '45%']}>
            <ty.ContentText>
              At Shooting Star Productions we understand that all of our clients
              have different styles, needs, and requirements. We have proven
              time and time again that we have the capabilities to adapt to each
              client’s unique message and story and produce videos that
              successfully represent their brand and objectives. Learn more
              about our experience below and view our portfolio to see some of
              our recent work.
            </ty.ContentText>
            <ty.LargeText bold mt={th.spacing.xl}>
              Creativity
            </ty.LargeText>
            <ty.ContentText mt={th.spacing.lg}>
              Creativity is the focal point of our approach to each project we
              produce. Channeling our imagination to cook up original ideas to
              stand out in a cluttered landscape of content.
            </ty.ContentText>
            <ty.LargeText bold mt={th.spacing.xl}>
              Integrity
            </ty.LargeText>
            <ty.ContentText mt={th.spacing.lg}>
              We value the integrity of our clients and the brands we work with.
              Both ethically and cohesively we strive to handle our client’s
              brand and reputation with care in everything we create.
            </ty.ContentText>
          </l.Div>
          <l.Div mt={[th.spacing.xl, 0]} width={[th.sizes.fill, '45%']}>
            <l.Img src={ProfileImg} width={[th.sizes.fill, '80%'] as any} />
            <ty.LargeText bold mt={th.spacing.xl}>
              Innovation
            </ty.LargeText>
            <ty.ContentText mt={th.spacing.lg}>
              Shooting Star Productions utilizes the latest in technology,
              equipment and methodology to deliver the most cutting edge
              production offering that exists in today’s market.
            </ty.ContentText>
          </l.Div>
        </l.Flex>
        <Heading id="team" text="Meet The Team" />
        <l.Div height={th.spacing.xl} />
        {teamMembers.map(({ bio, name, photoSrc, title }, idx) => (
          <Fragment key={idx}>
            <l.Flex columnOnMobile justifyBetween>
              <l.Img height={['auto', th.spacing.xxxl] as any} src={photoSrc} />
              <l.Div ml={[0, th.spacing.xl]}>
                <ty.DisplayText mb={th.spacing.md} mt={[th.spacing.md, 0]}>
                  {name}
                </ty.DisplayText>
                <ty.LargeText mb={th.spacing.lg}>{title}</ty.LargeText>
                <ty.ContentText mb={th.spacing.md}>{bio}</ty.ContentText>
              </l.Div>
            </l.Flex>
            <l.Div
              bdb={th.borders.black}
              height={th.spacing.xl}
              mx="auto"
              opacity={th.opacities.disabled}
              width="80%"
            />
          </Fragment>
        ))}
        <l.Div height={[th.spacing.xl, th.spacing.xxl]} />
      </l.PageContent>
    </l.Div>
  );
};

export default AboutUs;
