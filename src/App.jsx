import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/Navbar";
import Home from "./HomePeg/Home";
import Avtomobil from "./Avtomobil/Avtomobil";
import Motorcycle from "./MotorcyclePeg/Motorcycle";
import Biz from "./Biz/Rent";
import Zapchas from "./Zapchas/Zapchas";
import Notfon from "./Component/Notfon";
import AuthPage from "./Component/AuthPage";
import Idcard from "./Component/Idcard";
import Dashboard from "./Component/Dashboard";
import { LoadingProvider } from "./Component/LoadingContext";
import Idzapchas from "./Component/Idzapchas";
import Shop from "./Component/Shop";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "avtomobil", element: <Avtomobil /> },
        { path: "avtomobil/:id", element: <Idcard /> },
        { path: "zapchas/:id", element: <Idzapchas /> },
        { path: "tss", element: <Motorcycle /> },
        { path: "biz", element: <Biz /> },
        { path: "zapchas", element: <Zapchas /> },
        { path: "logn", element: <AuthPage /> },
        { path: "shop", element: <Shop/> },
        { path: "*", element: <Notfon /> }
      ]
    }
  ]);

  return (
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  );
}

export default App;
