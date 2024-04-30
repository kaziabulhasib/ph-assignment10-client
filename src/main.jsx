import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./Components/Error/Error";
// import "dotenv/config";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import AddItem from "./Components/AddItem/AddItem";
// import AllItems from "./Components/AllItems/AllItems";
import MyCraft from "./Components/MyCraft/MyCraft";
import AuthProvider from "../Providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import CraftItemDetails from "./Components/CraftItemDetails/CraftItemDetails";
import AllCraft from "./Components/AllCraft/AllCraft";
import Update from "./Components/Update/Update";
// import Delete from "./Components/Delete/Delete";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assigment10-type02-server.vercel.app/items"),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
        // loader: () => fetch("https://assigment10-type02-server-ew2wp7rtf-hasibs-projects-23da5587.vercel.app/items"),
      },
      {
        path: "/items/:id",
        element: (
          <PrivateRoute>
            <CraftItemDetails></CraftItemDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assigment10-type02-server.vercel.app/items/${params.id}`
          ),
      },
      // {
      //   path: "/allitems",
      //   element: <AllItems></AllItems>,
      //   loader: () =>
      //     fetch("https://assigment10-type02-server.vercel.app/items"),
      // },
      {
        path: "/allcraft",
        element: <AllCraft></AllCraft>,
        loader: () =>
          fetch("https://assigment10-type02-server.vercel.app/items"),
      },
      {
        path: "/mycraft",
        element: (
          <PrivateRoute>
            <MyCraft></MyCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        // loader: (params) =>
        //   fetch(
        //     `https://assigment10-type02-server.vercel.app/items/${params.id}`
        //   ),
      },
      // {
      //   path: "/delete",
      //   element: (
      //     <PrivateRoute>
      //       <Delete></Delete>
      //     </PrivateRoute>
      //   ),
      // },
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
