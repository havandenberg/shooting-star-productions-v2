import React from 'react';

import th from 'ui/theme';

const Hours = ({
  fill = th.colors.brand.secondary,
  ...rest
}: React.SVGProps<SVGSVGElement>) => (
  <svg width="30" height="30" viewBox="0 0 30 30" {...rest}>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g fill={fill} fillRule="nonzero" transform="translate(-183 -1146)">
        <g transform="translate(114 804)">
          <g transform="translate(62 178)">
            <g transform="translate(7 149)">
              <g transform="translate(0 15)">
                <path d="M15 0C6.729 0 0 6.729 0 15s6.729 15 15 15 15-6.729 15-15S23.271 0 15 0zm7.134 22.759a1.247 1.247 0 01-1.768 0l-6.25-6.25a1.244 1.244 0 01-.366-.884V7.5a1.25 1.25 0 112.5 0v7.608l5.884 5.883a1.249 1.249 0 010 1.768z"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Hours;
