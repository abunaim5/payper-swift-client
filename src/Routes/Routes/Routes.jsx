import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import WAllet from "../../Pages/Wallet/WAllet";

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
          path: '/wallet',
          element: <WAllet />
        },
      ],
    },
  ]);

  export default router;