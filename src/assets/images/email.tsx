import React from 'react';

import th from 'ui/theme';

const Email = ({
  fill = th.colors.brand.secondary,
  ...rest
}: React.SVGProps<SVGSVGElement>) => (
  <svg width="44" height="31" viewBox="0 0 44 31" {...rest}>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g fill={fill} fillRule="nonzero" transform="translate(-176 -1056)">
        <g transform="translate(114 804)">
          <g transform="translate(62 178)">
            <g transform="translate(0 74.5)">
              <g>
                <path d="M28.9254545 15.2236364L43.6363636 24.5236364 43.6363636 5.53090909z"></path>
                <path d="M0 5.53090909L0 24.5236364 14.7109091 15.2236364z"></path>
                <path d="M40.91 0H2.726C1.367 0 .287 1.015.082 2.32l21.736 14.322L43.555 2.32C43.35 1.015 42.27 0 40.909 0zM26.427 16.87l-3.859 2.543a1.362 1.362 0 01-1.5 0l-3.859-2.545L.087 27.698C.297 28.994 1.372 30 2.727 30H40.91c1.356 0 2.43-1.006 2.64-2.302L26.427 16.871z"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Email;
