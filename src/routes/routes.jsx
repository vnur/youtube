import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout/MainLayout";
import { HomePage } from "../pages/home-page/HomePage";
import { ErrorPage } from "../pages/home-page/error-page/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
    ],
  },
]);
