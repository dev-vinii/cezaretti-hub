import { createBrowserRouter } from "react-router-dom";
import { LoginLayout } from "@/layouts/login";
import { Login } from "@/components/views/login";
import { AppLayout } from "@/layouts/app";
import { Clients } from "@/components/views/dashboard/clients";
import { Products } from "@/components/views/dashboard/products";

export const routes = createBrowserRouter([
  {
    path: "login",
    element: <LoginLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "",
        element: <Clients />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);
