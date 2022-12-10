import { createBrowserRouter } from "react-router-dom";

import  Home from './pages/Home/index';
import Login from './pages/Login/index';
import Admin from './pages/Admin/index';
import Error from './pages/Error/index';
import Social from './pages/Networks/index';


import Private from "./routes/Private";

const router=createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/admin",
    element: <Private> <Admin/> </Private> 
  },
  {
    path:"/admin/social",
    element:<Private><Social/></Private>

  },
  {
    path:"*",
    element:<Error/>
  }
])

export {router}