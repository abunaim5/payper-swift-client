import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Wallet from "../../Pages/Wallet/Wallet";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <PrivateRoute><Home /></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/wallet',
          element: <PrivateRoute><Wallet /></PrivateRoute>
        },
      ],
    },
  ]);

  export default router;