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
import { AmbassadorDetailPage } from '../../pages/AmbassadorDetailPage';
import { AmbassadorMerchPage } from '../../pages/AmbassadorMerchPage';
import { AmbassadorContentPage } from '../../pages/AmbassadorContentPage';
import { AmbassadorPromocodePage } from '../../pages/AmbassadorPromocodePage';

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
        path: 'ambassadors/:id/detail',
        element: <AmbassadorDetailPage />,
      },
      {
        path: 'ambassadors/:id/promocode',
        element: <AmbassadorPromocodePage />,
      },
      {
        path: 'ambassadors/:id/content',
        element: <AmbassadorContentPage />,
      },
      {
        path: 'ambassadors/:id/merch',
        element: <AmbassadorMerchPage />,
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
