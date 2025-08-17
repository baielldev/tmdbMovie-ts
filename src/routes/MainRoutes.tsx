import { createBrowserRouter } from "react-router-dom";
import LayoutSite from "../components/layout/LayoutSite";
import HomePage from "../components/pages/home";
import DetailsCast from "../components/pages/home/details/actorsMovie/detailActors/DetailsCast";
import Details from "../components/pages/home/details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSite />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/details/:type/:id", element: <Details /> },
      {
        path: "/person/:id",
        element: <DetailsCast />,
      },
    ],
  },
]);
