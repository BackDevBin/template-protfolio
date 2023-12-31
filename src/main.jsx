import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Protfolio from './component/Protfolio/Protfolio.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
