import { ASSETS_PATH } from 'api';
import React from 'react';

import b from 'ui/button';
import l from 'ui/layout';
import th from 'ui/theme';
import ty from 'ui/typography';

const Hero = ({
  home,
  imageSrc,
  text,
}: {
  home?: boolean;
  imageSrc?: string;
  text: string;
}) => (
  <>
    <l.Div
      height={home ? [400, 800] : [300, 450]}
      overflow="hidden"
      position="relative"
      width={th.sizes.fill}
    >
      <l.Div
        bottom="-8px"
        left={0}
        right={0}
        position="absolute"
        top="-8px"
        zIndex={1}
      >
        {home ? (
          <video
            autoPlay
            webkit-playsinline
            playsInline
            loop
            muted
            preload="true"
            height="100%"
            width="100%"
          >
            <source src={`${ASSETS_PATH}/intro.m4v`} type="video/mp4" />
          </video>
        ) : (
          imageSrc && (
            <l.Flex justifyCenter>
              <l.Img height={th.sizes.fill} src={imageSrc} />
            </l.Flex>
          )
        )}
      </l.Div>
      <l.Flex
        alignCenter
        bg={th.colors.overlay.medium}
        bottom={0}
        column
        justifyCenter
        left={0}
        position="absolute"
        right={0}
        top={0}
        zIndex={2}
      >
        <ty.HugeText
          fontFamily={th.fontFamilies.title}
          fontSize={
            home
              ? [th.fontSizes.large, th.fontSizes.display]
              : th.fontSizes.huge
          }
          inverted
          mt={home ? th.spacing.xl : th.spacing.xxl}
          secondary
        >
          {text}
        </ty.HugeText>
        {home && (
          <>
            <ty.HugeText
              fontFamily={th.fontFamilies.title}
              fontSize={[th.fontSizes.display, 64]}
              inverted
              mt={th.spacing.md}
            >
              Vision Into Reality
            </ty.HugeText>
            <l.Div
              bdb={th.borders.white}
              my={th.spacing.lg}
              width={th.spacing.xxl}
            />
            <l.Flex mt={th.spacing.md}>
              <l.AreaLink to="/about-us">
                <b.Primary
                  fontSize={th.fontSizes.large}
                  height={[50, 60]}
                  width={[125, 150]}
                >
                  About Us
                </b.Primary>
              </l.AreaLink>
              <l.Div width={th.spacing.lg} />
              <l.AreaLink to="/portfolio">
                <b.SecondaryWhite
                  fontSize={th.fontSizes.large}
                  height={[50, 60]}
                  width={[125, 150]}
                >
                  Portfolio
                </b.SecondaryWhite>
              </l.AreaLink>
            </l.Flex>
          </>
        )}
      </l.Flex>
    </l.Div>
    <l.Div bg={th.colors.black} height={th.spacing.xs} width={th.sizes.fill} />
  </>
);

export default Hero;
