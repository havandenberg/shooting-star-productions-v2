import { ASSETS_PATH } from 'api';
import { PortfolioItem } from 'routes/portfolio';

export const featuredPortfolio: PortfolioItem[] = [
  {
    id: 'corp-1',
    category: 'Corporate',
    posterSrc: `${ASSETS_PATH}/auto.png`,
    videoSrc: `${ASSETS_PATH}/auto.m4v`,
    title: 'Corporate #1',
  },
  {
    id: 'web',
    category: 'Website',
    posterSrc: `${ASSETS_PATH}/auto.png`,
    videoSrc: `${ASSETS_PATH}/auto.m4v`,
    title: 'Website #1',
  },
  {
    id: 'sales',
    category: 'Sales',
    posterSrc: `${ASSETS_PATH}/auto.png`,
    videoSrc: `${ASSETS_PATH}/auto.m4v`,
    title: 'Sales #1',
  },
];

const portfolio: PortfolioItem[] = [
  {
    id: 'corp-1',
    category: 'Corporate',
    posterSrc: `${ASSETS_PATH}/auto.png`,
    videoSrc: `${ASSETS_PATH}/auto.m4v`,
    title: 'Corporate #1',
  },
  {
    id: 'web',
    category: 'Website',
    posterSrc: `${ASSETS_PATH}/auto.png`,
    videoSrc: `${ASSETS_PATH}/auto.m4v`,
    title: 'Website #1',
  },
  {
    id: 'sales',
    category: 'Sales',
    posterSrc: `${ASSETS_PATH}/auto.png`,
    videoSrc: `${ASSETS_PATH}/auto.m4v`,
    title: 'Sales #1',
  },
];

export default portfolio;
