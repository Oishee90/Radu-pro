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

import Payment from "./Components/Dashboard/AdminLayout/payment/Payment";
import SubscriptionPlans from "./Components/Dashboard/AdminLayout/subscription/SubscriptionPlans";

import UserManagementTable from "./Components/Dashboard/AdminLayout/UserManagementTable";
import UserFeedbackTable from "./Components/Dashboard/AdminLayout/UserFeedbackTable";
import Settings from "./Components/Dashboard/AdminLayout/Settings/Settings";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { PrivateRoute } from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element:<PublicRoute><Login /></PublicRoute>,
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
        element:<PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute> ,
      },
      // {
      //   path: "/content-moderation",
      //   element: <ContentModeration></ContentModeration>,
      // },
      {
        path: "/quote-packs",
        element:<PrivateRoute><QuotePack></QuotePack></PrivateRoute>,
      },
      {
        path: "/edit-pack",
        element: <PrivateRoute><EditPack></EditPack></PrivateRoute>,
      },
      {
        path: "/new-quote",
        element: <PrivateRoute><NewQuote></NewQuote></PrivateRoute>,
      },
      {
        path: "/user-management",
        element: <PrivateRoute><UserManagementTable></UserManagementTable></PrivateRoute>,
      },
      {
        path: "/user-feedback",
        element: <PrivateRoute><UserFeedbackTable></UserFeedbackTable></PrivateRoute>,
      },
      {
        path: "/settings",
        element: <PrivateRoute><Settings></Settings></PrivateRoute>,
      },
      {
        path: "/terms",
        element: <PrivateRoute><TermsCondition></TermsCondition></PrivateRoute>,
      },
      {
        path: "/payments",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
      },
      {
        path: "/subscriptions",
        element: <PrivateRoute><SubscriptionPlans></SubscriptionPlans></PrivateRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
