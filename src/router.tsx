import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import CardPage from "./pages/CardPage";
import Contacts from "./pages/Contacts";
import Questions from "./pages/Questions";
import Footer from "./pages/Footer";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
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
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/footer",
    element: <Footer />
  },
  {
    path: "/card_page" + "/:id",
    element: <CardPage />,
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
