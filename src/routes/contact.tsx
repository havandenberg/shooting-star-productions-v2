import React from 'react';

import { ASSETS_PATH } from 'api';
import EmailImg from 'assets/images/email';
import HoursImg from 'assets/images/hours';
import LocationImg from 'assets/images/location.png';
import PhoneImg from 'assets/images/phone';
import Heading from 'components/heading';
import Hero from 'components/page/hero';
import QuoteForm from 'components/quote-form';
import SocialIcons from 'components/social-icons';
import useScroll from 'hooks/use-scroll';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';
import { isMobile } from 'ui/utils';

const Contact = () => {
  useScroll();
  return (
    <l.Div>
      <Hero imageSrc={`${ASSETS_PATH}/events.png`} text="Contact Us" />
      <l.PageContent>
        <l.Flex columnOnMobile justifyBetween>
          <l.Flex alignCenter column width={[th.sizes.fill, '50%']}>
            <Heading text="Shooting Star Productions" />
            <l.Div my={th.spacing.xl} mx={['auto', 0]} width={['90%', '65%']}>
              <l.Flex>
                <l.Div width={96}>
                  <PhoneImg />
                </l.Div>
                <l.Anchor href="tel:15088476380">
                  <ty.LargeText>(508) 847 - 6380</ty.LargeText>
                </l.Anchor>
              </l.Flex>
              <l.Div height={th.spacing.lg} />
              <l.Flex>
                <l.Div width={96}>
                  <EmailImg />
                </l.Div>
                <l.AreaLink to="/contact?id=contact-form">
                  <ty.LargeText
                    textDecoration={isMobile() ? 'underline' : undefined}
                  >
                    {isMobile() ? 'C' : 'Please use c'}ontact form
                    {isMobile() ? ' below' : ''}
                  </ty.LargeText>
                </l.AreaLink>
              </l.Flex>
              <l.Div height={th.spacing.lg} />
              <l.Flex>
                <l.Div width={96}>
                  <HoursImg />
                </l.Div>
                <ty.LargeText lineHeight={1.5}>
                  Monday - Friday
                  <br />
                  8:00am - 5:00pm
                </ty.LargeText>
              </l.Flex>
            </l.Div>
            <l.Flex alignCenter>
              <ty.LargeText fontSize={th.fontSizes.title} mr={th.spacing.lg}>
                Follow Us:
              </ty.LargeText>
              <SocialIcons gap={th.spacing.lg} size={th.sizes.md} />
            </l.Flex>
            <l.Div height={th.spacing.xl} />
            <l.Anchor
              href="https://www.google.com/maps/place/50+Franklin+St,+Worcester,+MA+01608/@42.261213,-71.8037655,17z/data=!3m1!4b1!4m5!3m4!1s0x89e406643841ca63:0x8f906e99a7f83c9a!8m2!3d42.2612091!4d-71.8015715"
              rel="noopener noreferrer"
              target="_blank"
            >
              <l.Img width="100%" src={LocationImg} />
            </l.Anchor>
          </l.Flex>
          <l.Flex column mt={[th.spacing.xl, 0]} width={[th.sizes.fill, '42%']}>
            <QuoteForm />
          </l.Flex>
        </l.Flex>
        <l.Div height={th.spacing.xxl} />
      </l.PageContent>
    </l.Div>
  );
};

export default Contact;
