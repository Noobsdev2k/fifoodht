import { lazy } from "react";
import { Navigate } from "react-router-dom";

import { PATH_NAMES } from "../constants/routes";

// modules
const Home = lazy(() => import("../features/Home"));
const Login = lazy(() => import("../features/Login"));
const Shop = lazy(() => import("../features/Shop"));
const Detail = lazy(() => import("../features/Detail"));
const Checkout = lazy(() => import("../features/Checkout"));
const NotFound = lazy(() => import("../components/NotFound"));

const routesConfig = [
  {
    exact: true,
    path: PATH_NAMES.ROOT,
    element: <Navigate to={PATH_NAMES.HOME} replace />,
  },
  {
    exact: true,
    path: PATH_NAMES.HOME,
    element: <Home />,
  },

  {
    exact: true,
    path: PATH_NAMES.SHOP,
    element: <Shop />,
  },
  {
    exact: true,
    path: PATH_NAMES.DETAIL,
    element: <Detail />,
  },
  {
    exact: true,
    path: PATH_NAMES.CHECKOUT,
    element: <Checkout />,
  },
  {
    exact: true,
    path: PATH_NAMES.LOGIN,
    element: <Login />,
  },
  { exact: true, path: PATH_NAMES.NotFound, element: <NotFound /> },
];

export default routesConfig;
