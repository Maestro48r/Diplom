import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Team from "./pages/Team";
import Card from "./components/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
