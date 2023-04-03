import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "./Dashboard";
import OrderSaga from "./SagaView/OrderSaga";
import Signup from "./UserView/signup";
import Signin from "./UserView/signin";
export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { path: "order", element: <OrderSaga /> },
        { path: 'signup', element: <Signup /> },
        { path: 'signin', element: <Signin /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}