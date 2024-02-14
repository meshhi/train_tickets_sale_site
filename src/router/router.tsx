import {
    createBrowserRouter,
    createMemoryRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../components/Layout/Root";
import MainPage from "../components/Content/MainPage/MainPage";
import ErrorPage from "../components/Layout/ErrorPage";
import { OrderTicket } from "../components/Content/OrderTicket/OrderTicket";
import Passengers from "../components/Content/OrderTicket/Content/TicketOrderWindow/Stages/Passengers/Passengers";
import Directions from "../components/Content/OrderTicket/Content/TicketOrderWindow/Stages/Directions/Directions";
import Payment from "../components/Content/OrderTicket/Content/TicketOrderWindow/Stages/Payment/Payment";
import Check from "../components/Content/OrderTicket/Content/TicketOrderWindow/Stages/Check/Check";
import OrderCompleted from "../components/Content/OrderCompleted/OrderCompleted";

export default createMemoryRouter([
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
          children: [
            {
              path: "directions",
              element: <Directions />,
            },
            {
              path: "passengers",
              element: <Passengers />,
            },
            {
              path: "payment",
              element: <Payment />,
            },
            {
              path: "check",
              element: <Check />,
            },
          ]
        },
        {
          path: "ordercompleted",
          element: <OrderCompleted />,
        },
      ]
    },
  ]);