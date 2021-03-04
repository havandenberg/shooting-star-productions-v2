import React from 'react';

import Heading from 'components/heading';
import Hero from 'components/hero';
import PageNav from 'components/page-nav';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';

const navItems = [
  { id: 'full-service', text: 'Full Service Video' },
  { id: 'small-business', text: 'Small Businesses' },
  { id: 'graphic-design', text: 'Graphic & Logo Design' },
];

const Services = () => (
  <l.Div>
    <Hero text="Services" />
    <l.PageContent>
      <PageNav items={navItems} />
      <Heading id="full-service" text="Full Service Video Production" />
      <ty.ContentText my={th.spacing.lg}>
        We create videos for a variety of needs including weddings, commercials,
        real estate ventures, or anything you can think of. It is our number one
        priority to provide the best service and experience as possible while we
        help to make our clients’ vision a reality.
      </ty.ContentText>
      <ty.ContentText>
        Our network of videographers, photographers, is unparalleled. Our team
        is capable of coordinating nearly anything logistically for our clients
        both locally and nationwide.
      </ty.ContentText>
      <l.Div height={th.spacing.xl} />
      <Heading id="small-business" text="Small Business Package" />
      <l.Div height={th.spacing.xxxl} />
      <Heading id="graphic-design" text="Graphic & Logo Design" />
      <l.Div height={th.spacing.xxxl} />
    </l.PageContent>
  </l.Div>
);

export default Services;
