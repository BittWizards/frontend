import { createBrowserRouter } from 'react-router-dom';
import { Counter } from 'src/features/counter/Counter';
import { Quotes } from 'src/features/quotes/Quotes';
import { ErrorPage } from 'src/pages/ErrorPage';
import App from 'src/app/ui/App';
import { MainPage } from 'src/pages/MainPage';

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
        path: 'counter',
        element: <Counter />,
      },
      {
        path: 'quotes',
        element: <Quotes />,
      },
    ],
  },
]);
