import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./Components/Error/Error";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import AddItem from "./Components/AddItem/AddItem";
import AllItems from "./Components/AllItems/AllItems";
import MyCraft from "./Components/MyCraft/MyCraft";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <AddItem></AddItem>,
        // loader: () => fetch("https://assigment10-type02-server-ew2wp7rtf-hasibs-projects-23da5587.vercel.app/items"),
      },
      {
        path: "/allitems",
        element: <AllItems></AllItems>,
        loader: () =>
          fetch("https://assigment10-type02-server.vercel.app/items"),
      },
      {
        path: "/mycraft",
        element: <MyCraft></MyCraft>,
      },
      {
        path: "/register",
        element: <Register></Register>,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
