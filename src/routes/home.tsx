import React from 'react';

import LogoSecondaryImg from 'assets/images/logo-secondary.png';
import Heading from 'components/heading';
import Hero from 'components/hero';
import { featuredPortfolio } from 'content/portfolio';
import useScroll from 'hooks/use-scroll';
import { PortfolioTile, PortfolioWrapper } from 'routes/portfolio';
import b from 'ui/button';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';

const Home = () => {
  useScroll();
  return (
    <l.Div>
      <Hero home text="Turn Your" />
      <l.PageContent height={1500} position="relative">
        <l.Div position="relative" zIndex={2}>
          <Heading
            text="The Best Videography & Photography
 In Massachusetts"
          />
          <l.Flex justifyBetween mb={th.spacing.lg} mt={th.spacing.xl}>
            <ty.ContentText width="60%">
              When it comes to Video and Photo Production in Massachusetts, our
              team at Shooting Star Production we specialize in our clients
              retell that history in an interactive and exciting way in helping
              customers through video. Our team utilizes the latest tools and
              technology to make sure that we always get the right shot and that
              the final product is the best possible.
            </ty.ContentText>
            <l.Div mr={th.spacing.xl}>
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
          <l.Flex justifyBetween mb={100} mx="auto" width="50%">
            <l.AreaLink to="/about-us">
              <b.SecondaryBlue>Our Principles</b.SecondaryBlue>
            </l.AreaLink>
            <l.AreaLink to="/services">
              <b.SecondaryBlue>Our Services</b.SecondaryBlue>
            </l.AreaLink>
          </l.Flex>
          <Heading text="Featured Videos" textAlign="left" />
          <l.Div height={th.spacing.md} />
          <PortfolioWrapper>
            {featuredPortfolio.map((item) => (
              <PortfolioTile key={item.id} {...item} />
            ))}
          </PortfolioWrapper>
          <l.Flex justifyCenter>
            <l.AreaLink to="/portfolio">
              <b.SecondaryBlue>View Full Portfolio</b.SecondaryBlue>
            </l.AreaLink>
          </l.Flex>
        </l.Div>
        <l.Div
          left="50%"
          opacity={0.4}
          position="absolute"
          top={300}
          transform="translateX(-50%)"
          zIndex={1}
        >
          <l.Img height={431} src={LogoSecondaryImg} />
        </l.Div>
      </l.PageContent>
    </l.Div>
  );
};

export default Home;
