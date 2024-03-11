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
import { NewAmbassadorPage } from 'src/pages/NewAmbassadorPage';
import { CandidateDetailPage } from 'src/pages/CandidateDetailPage';
import { ReportContent } from 'src/pages/ReportContent';
import { AmbassadorDetailPage } from 'src/pages/AmbassadorDetailPage';
import { AmbassadorMerchPage } from 'src/pages/AmbassadorMerchPage';
import { AmbassadorContentPage } from 'src/pages/AmbassadorContentPage';
import { AmbassadorPromocodePage } from 'src/pages/AmbassadorPromocodePage';

export const router = createBrowserRouter([
  {
    path: '/',
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
        path: 'ambassadors/:id/detail/:detailId/report',
        element: <ReportContent />,
      },
      {
        path: 'ambassadors/candidate/:id/detail',
        element: <CandidateDetailPage />,
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
        path: 'ambassadors/new-ambassador',
        element: <NewAmbassadorPage />,
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
