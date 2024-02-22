import { createBrowserRouter } from 'react-router-dom';

import App from 'src/app/ui/App';
import { ErrorPage } from 'src/pages/ErrorPage';
import { MainPage } from 'src/pages/MainPage';
import { AmbassadorPage } from 'src/pages/AmbassadorPage';
import { ContentPage } from 'src/pages/ContentPage';
import { StatsPage } from 'src/pages/StatsPage';
import { MailingPage } from 'src/pages/MailingPage';
import { MerchPage } from 'src/pages/MerchPage';
import { PromocodePage } from 'src/pages/PromocodePage';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'ambassadors',
        element: <AmbassadorPage />,
      },
      {
        path: 'promocode',
        element: <PromocodePage />,
      },
      {
        path: 'content',
        element: <ContentPage />,
      },
      {
        path: 'merch',
        element: <MerchPage />,
      },
      {
        path: 'mailing',
        element: <MailingPage />,
      },
      {
        path: 'stats',
        element: <StatsPage />,
      },
    ],
  },
]);
