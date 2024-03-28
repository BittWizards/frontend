import { useEffect } from 'react';
import { BASE_URL } from 'src/utils/constants/api';

export function SuggestTokenPage() {
  useEffect(() => {
    window.onload = function () {
      // @ts-ignore
      window.YaSendSuggestToken(`${BASE_URL}/login`);
    };
  }, []);

  return null;
}
