import React from 'react';

import LogoSecondaryImg from 'assets/images/logo-secondary.png';
import Heading from 'components/heading';
import Hero from 'components/page/hero';
import { featuredPortfolio } from 'content/portfolio';
import useScroll from 'hooks/use-scroll';
import { PortfolioTile, PortfolioWrapper } from 'routes/portfolio';
import b from 'ui/button';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';
import { isMobile } from 'ui/utils';

const Home = () => {
  useScroll();
  return (
    <l.Div>
      <Hero home text="Turn Your" />
      <l.PageContent position="relative">
        <l.Div position="relative" zIndex={2}>
          <Heading text="The Best Videography & Photography In Massachusetts & Florida" />
          <l.Flex
            columnOnMobile
            justifyBetween
            mb={th.spacing.lg}
            mt={[th.spacing.lg, th.spacing.xl]}
          >
            <ty.ContentText width={['auto', '60%']}>
              When it comes to Video and Photo Production in Massachusetts &
              Florida, our team at Shooting Star Production we specialize in our
              clients retell that history in an interactive and exciting way in
              helping customers through video. Our team utilizes the latest
              tools and technology to make sure that we always get the right
              shot and that the final product is the best possible.
            </ty.ContentText>
            <l.Div
              ml={[th.spacing.md, 0]}
              mr={[0, th.spacing.xl]}
              mt={[th.spacing.lg, 0]}
            >
              <ty.LargeText mb={th.spacing.md}>We specialize in:</ty.LargeText>
              <ty.BodyText mb={th.spacing.sm}>• Corporate videos</ty.BodyText>
              <ty.BodyText mb={th.spacing.sm}>• Website videos</ty.BodyText>
              <ty.BodyText mb={th.spacing.sm}>• Sales videos</ty.BodyText>
              <ty.BodyText mb={th.spacing.sm}>• Promotional videos</ty.BodyText>
              <ty.BodyText mb={th.spacing.sm}>• Music videos</ty.BodyText>
              <ty.BodyText mb={th.spacing.sm}>• Healthcare videos</ty.BodyText>
              <ty.BodyText mb={th.spacing.sm}>• About Us videos</ty.BodyText>
              <ty.BodyText mb={th.spacing.sm}>• Fitness videos</ty.BodyText>
              <ty.BodyText mb={th.spacing.sm}>• Photoshoots</ty.BodyText>
            </l.Div>
          </l.Flex>
          <l.Flex justifyBetween mb={100} mx="auto" width={['90%', '50%']}>
            <l.AreaLink to="/about-us">
              <b.SecondaryBlue>Our Principles</b.SecondaryBlue>
            </l.AreaLink>
            <l.AreaLink to="/services">
              <b.SecondaryBlue>Our Services</b.SecondaryBlue>
            </l.AreaLink>
          </l.Flex>
          <l.Div height={[200, th.spacing.md]} />
          <Heading
            text="Featured Videos"
            textAlign={isMobile() ? 'center' : 'left'}
          />
          <l.Div height={[th.spacing.lg, 0]} />
          <PortfolioWrapper mb={th.spacing.xl}>
            {featuredPortfolio.map((item) => (
              <PortfolioTile key={item.id} {...item} />
            ))}
          </PortfolioWrapper>
          <l.Flex justifyCenter mb={th.spacing.xxl} mt={[th.spacing.lg, 0]}>
            <l.AreaLink to="/portfolio">
              <b.SecondaryBlue>View Full Portfolio</b.SecondaryBlue>
            </l.AreaLink>
          </l.Flex>
        </l.Div>
        <l.Div
          left={'50%'}
          opacity={0.4}
          position="absolute"
          top={[720, 325]}
          transform="translateX(-50%)"
          zIndex={1}
        >
          <l.Img height={[350, 431] as any} src={LogoSecondaryImg} />
        </l.Div>
      </l.PageContent>
    </l.Div>
  );
};

export default Home;
