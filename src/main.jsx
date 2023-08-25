import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Providers from "./AuthProviders/Providers.jsx";
import "sweetalert2/dist/sweetalert2.css";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/User/Login.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Providers>
  </React.StrictMode>
);
