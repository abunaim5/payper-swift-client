import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Home from "../../Pages/Home/Home/Home";

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
      ],
    },
  ]);

  export default router;