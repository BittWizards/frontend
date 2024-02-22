import { useRouteError } from 'react-router-dom';

import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';

import style from './ErrorPage.module.scss';
import Header from '../../../widgets/Header';

export function ErrorPage() {
  const error = useRouteError();
  const errorMessage =
    typeof error === 'string' || error instanceof Error
      ? error.toString()
      : 'An unexpected error occurred';

  return (
    <div className={style.app}>
      <Header />
      <div id="error-page" className={style.main}>
        <Navbar links={navbarLinks} />
        <div className={style.container}>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{errorMessage}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
