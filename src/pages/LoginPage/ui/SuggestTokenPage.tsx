import { useEffect } from 'react';
import { CURRENT_URL } from 'src/utils/constants/api';

export function SuggestTokenPage() {
  useEffect(() => {
    window.onload = function () {
      // @ts-ignore
      window.YaSendSuggestToken(`${CURRENT_URL}/login`);
    };
  }, []);

  return null;
}
