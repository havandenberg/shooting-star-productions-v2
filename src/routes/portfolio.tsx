import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { capitalCase, paramCase } from 'change-case';
import { pluck, uniq } from 'ramda';
import { useLocation, useParams } from 'react-router-dom';

import PlayImg from 'assets/images/play';
import Heading from 'components/heading';
import Hero from 'components/hero';
import Modal from 'components/modal';
import { NavItem } from 'components/nav';
import PageNav from 'components/page-nav';
import brands from 'content/brands';
import portfolioItems from 'content/portfolio';
import useScroll from 'hooks/use-scroll';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';

const navItems = [
  { id: 'recent-work', text: 'Recent Work' },
  { id: 'clients', text: 'Clients' },
];

export interface PortfolioItem {
  id: string;
  category: string;
  posterSrc: string;
  videoSrc: string;
  title: string;
}

export const PortfolioTile = ({
  category,
  posterSrc,
  title,
  videoSrc,
}: PortfolioItem) => {
  useScroll();
  const [hover, setHover] = useState(false);
  const toggleHover = (value: boolean) => () => {
    setHover(value);
  };
  return (
    <Modal
      trigger={(show) => (
        <l.Flex
          bg={th.colors.white}
          borderRadius={th.borderRadii.default}
          boxShadow={th.shadows.box}
          column
          cursor="pointer"
          height={275}
          onClick={show}
          onMouseEnter={toggleHover(true)}
          onMouseLeave={toggleHover(false)}
          overflow="hidden"
          width={287}
        >
          <l.Div flex={1} mb={th.spacing.md} position="relative">
            <l.Img src={posterSrc} width={th.sizes.fill} />
            <l.Flex
              alignCenter
              bg={th.colors.overlay.medium}
              bottom={0}
              justifyCenter
              left={0}
              opacity={hover ? 1 : 0}
              position="absolute"
              right={0}
              top={0}
              transition={th.transitions.default}
              zIndex={2}
            >
              <PlayImg height={th.sizes.md} />
            </l.Flex>
          </l.Div>
          <ty.LargeText center mb={th.spacing.md}>
            {title}
          </ty.LargeText>
          <ty.BodyText center disabled mb={24}>
            {category}
          </ty.BodyText>
        </l.Flex>
      )}
    >
      <video autoPlay controls preload="true" height="100%" width="100%">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </Modal>
  );
};

export const PortfolioWrapper = styled(l.Flex)({
  background: th.colors.lightGray,
  justifyContent: 'space-between',
  marginBottom: th.spacing.xxl,
  marginTop: th.spacing.lg,
  padding: th.spacing.lg,
  width: th.sizes.fill,
});

const Portfolio = () => {
  const { pathname } = useLocation();
  const { category } = useParams<{ category?: string }>();
  const categories = uniq(pluck('category', portfolioItems)).sort();
  const filteredItems = portfolioItems.filter((item) =>
    category ? item.category === capitalCase(category) : true,
  );
  return (
    <l.Div>
      <Hero text="Portfolio" />
      <l.PageContent>
        <PageNav items={navItems} />
        <l.Flex flexWrap="wrap" id="recent-work">
          <NavItem
            active={pathname === '/portfolio'}
            key="all"
            text="All"
            to={`/portfolio`}
          />
          {categories.map((category) => {
            const to = paramCase(category);
            return (
              <Fragment key={category}>
                <l.Div width={th.spacing.md} />
                <NavItem
                  active={pathname.includes(to)}
                  text={category}
                  to={`/portfolio/${to}`}
                />
              </Fragment>
            );
          })}
        </l.Flex>
        <PortfolioWrapper>
          {filteredItems.map((item) => (
            <PortfolioTile key={item.id} {...item} />
          ))}
        </PortfolioWrapper>
        <Heading id="clients" text="Clients" />
        <l.Flex
          justifyBetween
          mb={th.spacing.xxl}
          mt={th.spacing.lg}
          mx="auto"
          p={th.spacing.lg}
          width="80%"
        >
          {brands.map((brandSrc, idx) => (
            <l.Img height={th.sizes.xl} key={idx} src={brandSrc} />
          ))}
        </l.Flex>
      </l.PageContent>
    </l.Div>
  );
};

export default Portfolio;
