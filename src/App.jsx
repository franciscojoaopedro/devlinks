import { createBrowserRouter } from "react-router-dom";

import  Home from './pages/Home/index';
import Login from './pages/Login/index';
import Admin from './pages/Admin/index';
import Error from './pages/Error/index';


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
    element:<Admin/>
  },{
    path:"*",
    element:<Error/>
  }
])

export {router}