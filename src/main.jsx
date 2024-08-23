import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Home from './Home.jsx'
import Cart from "./Cart.jsx";
import Profile from "./Profile.jsx";
import appStore from "./utils/Store/appStore.js";
import { Provider } from "react-redux";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import SingleProductPage from "./SingleProductPage.jsx";

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/product/:id",
        element: <SingleProductPage></SingleProductPage>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter}></RouterProvider>
  </Provider>
);

// function H1Tag(){
//   return (<div id="parent">
//               <div id="child">
//                   <h1>I am nested H1 using vite </h1>
//               </div>
//           </div>
// )}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   // h1Tag()
//   // <h1Tag></h1Tag>
//   // <H1Tag/>
// )
