import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Wallet from "../../Pages/Wallet/Wallet";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/wallet',
          element: <Wallet />
        },
      ],
    },
  ]);

  export default router;