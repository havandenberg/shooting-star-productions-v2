import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { capitalCase, paramCase } from 'change-case';
import { pluck, uniq } from 'ramda';
import { useLocation, useParams } from 'react-router-dom';

import CoverImg from 'assets/images/cover-2.jpg';
import Heading from 'components/heading';
import Hero from 'components/page/hero';
import Modal from 'components/modal';
import PageNav from 'components/page/links';
import brands from 'content/brands';
import portfolioItems from 'content/portfolio';
import useScroll from 'hooks/use-scroll';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';
import { isMobile } from 'ui/utils';

const navItems = [
  { id: 'recent-work', text: 'Recent Work' },
  { id: 'clients', text: 'Clients' },
];

const StyledNavItem = styled(l.AreaLink)(
  ({ active }: { active?: boolean }) => ({
    p: {
      color: active ? th.colors.brand.primary : th.colors.text.default,
      padding: th.spacing.sm,
    },
    transition: th.transitions.default,
    width: 'auto',
    ':hover': {
      p: {
        color: th.colors.brand.primary,
      },
    },
  }),
);

export interface NavItemProps {
  active?: boolean;
  text: string;
  to: string;
}

export const NavItem = ({ active, text, to }: NavItemProps) => (
  <StyledNavItem active={active} to={to}>
    <ty.DisplayText fontSize={th.fontSizes.body}>{text}</ty.DisplayText>
  </StyledNavItem>
);

export interface PortfolioItem {
  id: string;
  category: string;
  frame?: number;
  videoSrc: string;
  title: string;
}

export const PortfolioTile = ({
  category,
  frame = 1,
  title,
  videoSrc,
}: PortfolioItem) => {
  useScroll();
  const { category: categoryParam } = useParams<{ category?: string }>();
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
          mb={th.spacing.lg}
          onClick={show}
          overflow="hidden"
          width={[th.sizes.fill, 287]}
        >
          <video preload="metadata" height="100%" width="100%">
            <source src={`${videoSrc}#t=${frame}`} type="video/mp4" />
          </video>
          <l.Flex alignCenter column height={80} justifyCenter>
            <ty.LargeText
              center
              mb={!!categoryParam ? th.spacing.sm : th.spacing.md}
            >
              {title}
            </ty.LargeText>
            {!categoryParam && (
              <ty.BodyText center disabled mb={24}>
                {category}
              </ty.BodyText>
            )}
          </l.Flex>
        </l.Flex>
      )}
    >
      <video autoPlay controls height="100%" width="100%">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </Modal>
  );
};

export const PortfolioWrapper = styled(l.Flex)({
  background: th.colors.lightGray,
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: th.spacing.lg,
  padding: th.spacing.lg,
  paddingBottom: 0,
  [th.breakpointQueries.small]: {
    flexDirection: 'column',
    margin: `0 -${th.spacing.md}`,
  },
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
      <Hero imageSrc={CoverImg} text="Portfolio" />
      <l.PageContent>
        <PageNav items={navItems} />
        <l.Flex flexWrap="wrap" id="recent-work" mb={[th.spacing.md, 0]}>
          <NavItem
            active={pathname === '/portfolio'}
            key="all"
            text="All"
            to="/portfolio?id=recent-work"
          />
          {categories.map((category) => {
            const to = paramCase(category);
            return (
              <Fragment key={category}>
                <l.Div width={[0, th.spacing.md]} />
                <NavItem
                  active={pathname.includes(to)}
                  text={category}
                  to={`/portfolio/${to}?id=recent-work`}
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
        <l.Div height={th.spacing.xxl} />
        <Heading id="clients" text="Clients" />
        <l.Flex
          alignCenter={isMobile()}
          columnOnMobile
          flexWrap="wrap"
          justifyBetween
          mb={th.spacing.xxl}
          mt={th.spacing.lg}
          mx="auto"
          p={th.spacing.lg}
          pb={0}
          width="80%"
        >
          {brands.map((brandSrc, idx) => (
            <l.Img
              height={th.sizes.xl}
              key={idx}
              mb={th.spacing.lg}
              src={brandSrc}
            />
          ))}
        </l.Flex>
      </l.PageContent>
    </l.Div>
  );
};

export default Portfolio;
