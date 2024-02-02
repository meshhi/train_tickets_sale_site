import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../components/Layout/Root";
import ErrorPage from "../components/Layout/ErrorPage";
import MainPage from "../components/Pages/MainPage/MainPage";
import OrderPage from "../components/Pages/OrderPage/OrderPage";
import CompletedPage from "../components/Pages/CompletedPage/CompletedPage";
import { Passengers } from "../components/Pages/OrderPage/Content/TicketOrderWindow/Stages/Passengers/Passengers";
import { Directions } from "../components/Pages/OrderPage/Content/TicketOrderWindow/Stages/Directions/Directions";
import { Payment } from "../components/Pages/OrderPage/Content/TicketOrderWindow/Stages/Payment/Payment";
import { Check } from "../components/Pages/OrderPage/Content/TicketOrderWindow/Stages/Check/Check";
import React from "react";

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
          path: "order",
          element: <OrderPage />,
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
          path: "completed",
          element: <CompletedPage />,
        },
      ]
    },
  ]);