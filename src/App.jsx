// import React from "react";

// const App = () => {
//   return (
//     <div>
//       <h1>I am Component</h1>
//     </div>
//   )
// }

import Navbar from "./Navbar"
import Home from "./Home"
import { Outlet } from "react-router-dom"
import ThemeController from "./utils/ThemeController"

function App(){
  return (
    <ThemeController>
    <Navbar/>
    {/* <Home/> */}
    <Outlet/>
    </ThemeController>
  )
}


export default App

