import React from 'react';

import th from 'ui/theme';

const Play = ({
  fill = th.colors.white,
  ...rest
}: React.SVGProps<SVGSVGElement>) => (
  <svg width={163.861} height={163.861} viewBox="0 0 163.861 163.861" {...rest}>
    <path
      d="M34.857 3.613C20.084-4.861 8.107 2.081 8.107 19.106v125.637c0 17.042 11.977 23.975 26.75 15.509L144.67 97.275c14.778-8.477 14.778-22.211 0-30.686L34.857 3.613z"
      fill={fill}
    />
  </svg>
);

export default Play;
