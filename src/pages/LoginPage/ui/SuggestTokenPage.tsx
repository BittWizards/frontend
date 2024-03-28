import { useEffect } from 'react';

export function SuggestTokenPage() {
  useEffect(() => {
    window.onload = function () {
      // @ts-ignore
      window.YaSendSuggestToken('https://ambas-1.ddns.net/login');
    };
  }, []);

  return null;
}
