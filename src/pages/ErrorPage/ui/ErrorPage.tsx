import { useRouteError } from 'react-router-dom';

import style from './ErrorPage.module.scss';

export function ErrorPage() {
  const error = useRouteError();
  {
    /* @ts-ignore */
  }
  console.error(error);

  return (
    <div id="error-page" className={style.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* @ts-ignore */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
