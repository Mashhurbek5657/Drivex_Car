import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Navbar from './Component/Navbar'
import Home from './HomePeg/Home'
import Avtomobil from './Avtomobil/Avtomobil'
import Motorcycle from './MotorcyclePeg/Motorcycle'
import Biz from './Biz/Rent'
import Zapchas from './Zapchas/Zapchas'
import Notfon from './Component/Notfon'
import AuthPage from './Component/AuthPage'
import Idcard from './Component/Idcard'
import Dashboard from './Component/Dashboard'

function App() {
  const reactrot = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "dashboard", element: <Dashboard/> },
        { path: "avtomobil", element: <Avtomobil /> },
        { path: "avtomobil/:id", element: <Idcard /> },
        { path: "motosikl", element: <Motorcycle /> },
        { path: "biz", element: <Biz /> },
        { path: "zapchas", element: <Zapchas /> },
        { path: "logn", element: <AuthPage /> },
        { path: "*", element: <Notfon /> }
      ]
    }
  ])

  return <RouterProvider router={reactrot} />
}

export default App
