import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
 import Home  from "./pages/Home.jsx";
 import  Cart  from "./pages/Cart.jsx";
 import  ProductDetails  from "./pages/ProductDetails.jsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <Home />, 
      },
      {
        path: "cart",
        element:<Cart />,
      },
      {
        path: "/product/:productId",
        element:<ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
