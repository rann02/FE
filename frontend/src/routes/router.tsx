import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Search from "../pages/Search";
import Ironman from "../pages/Ironman";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: rootLoader,
  },
  {
    path: "/ironman",
    element: <Ironman />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export default router;
