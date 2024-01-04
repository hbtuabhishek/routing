import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./layout";
import { useRoutes } from "react-router-dom";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        }
      ]
    }
  ]);
  // return element;
};
export default Router;
