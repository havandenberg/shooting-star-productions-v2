import { useEffect } from 'react';
import { parse } from 'querystring';
import { useLocation } from 'react-router-dom';

import { scrollToId } from 'ui/utils';

export interface Props {
  location?: {
    search: string;
  };
}

const useScroll = (options?: {}) => {
  const location = useLocation();
  useEffect(() => {
    if (location) {
      const id = parse(location.search)['?id'];
      scrollToId(id ? `${id}` : 'top', options);
    }
  }, [location, options]);
};

export default useScroll;
