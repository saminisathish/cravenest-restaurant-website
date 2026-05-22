import { createBrowserRouter } from "react-router";

import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Dashboard } from "./pages/Dashboard";
import { FoodDetails } from "./pages/FoodDetails";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },

  {
    path: "/menu",
    element: (
      <Layout>
        <Menu />
      </Layout>
    ),
  },

  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },

  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },

  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },

  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },

  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },

  {
    path: "/checkout",
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },

  {
    path: "/food/:id",
    element: (
      <Layout>
        <FoodDetails />
      </Layout>
    ),
  },
]);