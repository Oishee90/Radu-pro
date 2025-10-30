import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Components/Pages/Login";
import Forgot from "./Components/Pages/Forgot";

import "./index.css";
import AdminDashboard from "./Components/Dashboard/AdminLayout/AdminDashboard";
import Root from "./Components/Dashboard/Root";
import Verification from "./Components/Pages/Verification";
import Setnew from "./Components/Pages/Setnew";
import Privacy from "./Components/Dashboard/AdminLayout/Settings/Privacy";
import TermsCondition from "./Components/Dashboard/AdminLayout/Settings/TermsCondition";
import ContentModeration from "./Components/Dashboard/AdminLayout/ContentModeration";
import QuotePack from "./Components/Dashboard/AdminLayout/Quote/QuotePack";
import NewQuote from "./Components/Dashboard/AdminLayout/Quote/NewQuote";
import EditPack from "./Components/Dashboard/AdminLayout/Quote/EditPack";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/verification",
    element: <Verification></Verification>,
  },
  {
    path: "/setNew",
    element: <Setnew></Setnew>,
  },
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/content-moderation",
        element: <ContentModeration></ContentModeration>,
      },
      {
        path: "/quote-packs",
        element: <QuotePack></QuotePack>,
      },
      {
        path: "/edit-pack",
        element: <EditPack></EditPack>,
      },
      {
        path: "/new-quote",
        element: <NewQuote></NewQuote>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/terms",
        element: <TermsCondition></TermsCondition>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
