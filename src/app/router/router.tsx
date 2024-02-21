import { createBrowserRouter } from "react-router-dom"
import App from "../ui/App"
import { ErrorPage } from "../../pages/ErrorPage"
import { Counter } from "../../features/counter/Counter"
import { Quotes } from "../../features/quotes/Quotes"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "quotes",
        element: <Quotes />,
      },
    ],
  },
])
