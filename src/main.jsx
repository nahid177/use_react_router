import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './compunent/Home/Home.jsx';
import Home_router from './compunent/Home/Home_router.jsx';
import Job_Main from './compunent/Job_Details/Job_Main.jsx';
import Job_Apply from './compunent/Apply/Job_Apply.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element : <Home></Home>,
    children: [
      {
        path: "/banar",
        element: <Home_router></Home_router>
      },
      {
        path: "/details/:id",
        element: <Job_Main></Job_Main>,
        loader: () => fetch('./jobs.json')
      },
      {
        path: "/apply",
        element: <Job_Apply></Job_Apply>
      },
     
    ]
    
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
