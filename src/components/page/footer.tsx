import React from 'react';

import LogoImg from 'assets/images/logo.png';
import SecondaryLogoImg from 'assets/images/logo-secondary.png';
import SocialIcons from 'components/social-icons';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';
import { isMobile } from 'ui/utils';

const Footer = () => (
  <>
    <l.Flex bg={th.colors.mediumGray} p={th.spacing.lg}>
      <l.Flex
        columnOnMobile
        justifyBetween
        width={th.widths.maxContent}
        mx="auto"
        pb={[th.spacing.xxl, 0]}
      >
        <l.Flex column alignStart>
          <l.AreaLink to="/">
            <l.Img
              height={['auto', th.sizes.xl] as any}
              src={LogoImg}
              width={[th.sizes.fill, 'auto'] as any}
            />
          </l.AreaLink>
          <l.Div mt={th.spacing.lg} width={[th.sizes.fill, 'auto']}>
            <l.Flex ml={[th.spacing.md, 0]}>
              <ty.BodyText
                inverted
                mr={th.spacing.xl}
                secondary
                width={th.sizes.lg}
              >
                Phone:
              </ty.BodyText>
              <l.Anchor href="tel:15088476380">
                <ty.BodyText inverted secondary>
                  (508) 847 - 6380
                </ty.BodyText>
              </l.Anchor>
            </l.Flex>
            <l.Div height={th.spacing.md} />
            <l.Flex ml={[th.spacing.md, 0]}>
              <ty.BodyText
                inverted
                mr={th.spacing.xl}
                secondary
                width={th.sizes.lg}
              >
                Email:
              </ty.BodyText>
              <l.AreaLink to="/contact">
                <ty.BodyText inverted secondary textDecoration="underline">
                  Contact Us
                </ty.BodyText>
              </l.AreaLink>
            </l.Flex>
            <l.Div height={th.spacing.md} />
            <l.Flex ml={[th.spacing.md, 0]}>
              <ty.BodyText
                inverted
                mr={th.spacing.lg}
                secondary
                width={th.sizes.xl}
              >
                Location:
              </ty.BodyText>
              <l.Anchor
                href="https://www.google.com/maps/place/50+Franklin+St,+Worcester,+MA+01608/@42.261213,-71.8037655,17z/data=!3m1!4b1!4m5!3m4!1s0x89e406643841ca63:0x8f906e99a7f83c9a!8m2!3d42.2612091!4d-71.8015715"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ty.BodyText inverted secondary>
                  Worcester, MA & Orlando, FL
                </ty.BodyText>
              </l.Anchor>
            </l.Flex>
            <l.Div height={th.spacing.md} />
            <l.Flex ml={[th.spacing.md, 0]}>
              <ty.BodyText
                inverted
                mr={th.spacing.lg}
                secondary
                width={th.sizes.xl}
              >
                Hours:
              </ty.BodyText>
              <ty.BodyText inverted secondary>
                Monday - Friday,{isMobile() && <br />} 8:00am - 5:00pm
              </ty.BodyText>
            </l.Flex>
            <l.Flex
              mt={[48, th.spacing.lg]}
              width={[th.sizes.fill, 'auto']}
            >
              <SocialIcons inverted />
            </l.Flex>
          </l.Div>
        </l.Flex>
        <l.Flex mt={[48, th.spacing.lg]}>
          <l.Flex column alignStart mr={[th.spacing.lg, th.spacing.xl]}>
            <l.Div
              bdb={th.borders.white}
              mb={th.spacing.lg}
              opacity={th.opacities.secondary}
              pb={th.spacing.md}
            >
              <ty.LargeText inverted>Services</ty.LargeText>
            </l.Div>
            <l.AreaLink to="/services?id=full-service">
              <ty.CaptionText inverted secondary>
                Full Service Production
              </ty.CaptionText>
            </l.AreaLink>
            <l.Div height={th.spacing.md} />
            <l.AreaLink to="/services?id=small-business">
              <ty.CaptionText inverted secondary>
                Small Business Package
              </ty.CaptionText>
            </l.AreaLink>
            <l.Div height={th.spacing.md} />
            <l.AreaLink to="/services?id=graphic-design">
              <ty.CaptionText inverted secondary>
                Graphic & Logo Design
              </ty.CaptionText>
            </l.AreaLink>
            <l.Div height={th.spacing.md} />
          </l.Flex>
          <l.Div mr={th.spacing.lg}>
            <l.Div
              bdb={th.borders.white}
              mb={th.spacing.lg}
              opacity={th.opacities.secondary}
              pb={th.spacing.md}
            >
              <ty.LargeText inverted>Company</ty.LargeText>
            </l.Div>
            <l.AreaLink to="/services">
              <ty.CaptionText inverted secondary>
                Our Services
              </ty.CaptionText>
            </l.AreaLink>
            <l.Div height={th.spacing.md} />
            <l.AreaLink to="/about-us">
              <ty.CaptionText inverted secondary>
                About Us
              </ty.CaptionText>
            </l.AreaLink>
            <l.Div height={th.spacing.md} />
            <l.AreaLink to="/about-us?id=team">
              <ty.CaptionText inverted secondary>
                Our Team
              </ty.CaptionText>
            </l.AreaLink>
            <l.Div height={th.spacing.md} />
            <l.AreaLink to="/portfolio">
              <ty.CaptionText inverted secondary>
                Portfolio
              </ty.CaptionText>
            </l.AreaLink>
            <l.Div height={th.spacing.md} />
            <l.AreaLink to="/contact">
              <ty.CaptionText inverted secondary>
                Contact
              </ty.CaptionText>
            </l.AreaLink>
          </l.Div>
        </l.Flex>
      </l.Flex>
    </l.Flex>
    <l.Flex bg={th.colors.darkGray} p={th.spacing.md} position="relative">
      <l.Flex justifyBetween width={th.widths.maxContent} mx="auto">
        <l.Div>
          <ty.CaptionText inverted mb={th.spacing.sm} secondary>
            Copyright © {new Date().getFullYear()}
          </ty.CaptionText>
          <ty.CaptionText inverted secondary>
            Shooting Star Productions
          </ty.CaptionText>
        </l.Div>
        <l.Div
          bottom={0}
          position="absolute"
          left="50%"
          transform={isMobile() ? 'translate(-50%, -96px)' : 'translateX(-50%)'}
        >
          <l.Img height={109} src={SecondaryLogoImg} />
        </l.Div>
        <l.Flex column alignEnd>
          <ty.CaptionText inverted mb={th.spacing.sm} secondary>
            Developed By
          </ty.CaptionText>
          <ty.CaptionText inverted secondary>
            Halsey Vandenberg
          </ty.CaptionText>
        </l.Flex>
      </l.Flex>
    </l.Flex>
  </>
);

export default Footer;
