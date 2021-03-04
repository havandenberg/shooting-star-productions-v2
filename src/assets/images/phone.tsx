import React from 'react';

import th from 'ui/theme';

const Phone = ({
  fill = th.colors.brand.secondary,
  ...rest
}: React.SVGProps<SVGSVGElement>) => (
  <svg width="30" height="30" viewBox="0 0 30 30" {...rest}>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g fill={fill} fillRule="nonzero" transform="translate(-183 -982)">
        <g transform="translate(114 804)">
          <g transform="translate(62 178)">
            <g transform="translate(7)">
              <path d="M29.163 22.002l-4.184-4.184c-1.494-1.494-4.034-.897-4.632 1.046-.448 1.345-1.942 2.092-3.287 1.793-2.988-.747-7.022-4.632-7.77-7.77-.448-1.345.449-2.839 1.794-3.287 1.942-.598 2.54-3.138 1.046-4.632L7.946.784C6.75-.26 4.958-.26 3.912.784l-2.84 2.84c-2.838 2.988.3 10.907 7.322 17.93 7.023 7.022 14.942 10.31 17.93 7.32l2.839-2.838c1.046-1.196 1.046-2.989 0-4.034z"></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Phone;
