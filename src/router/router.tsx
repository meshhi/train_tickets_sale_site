import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../components/Layout/Root";
import MainPage from "../components/Content/MainPage/MainPage";
import ErrorPage from "../components/Layout/ErrorPage";
import OrderTicket from "../components/Content/OrderTicket/OrderTicket";

export default createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "",
          element: <MainPage />,
        },
        {
            path: "orderticket",
            element: <OrderTicket />,
        },
      ]
    },
  ]);