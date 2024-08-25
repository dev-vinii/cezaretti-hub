import { createBrowserRouter } from "react-router-dom";
import { LoginLayout } from "@/layouts/login";
import { Login } from "@/components/views/login";

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
]);
