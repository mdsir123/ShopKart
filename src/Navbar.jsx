import { Link } from "react-router-dom";
import { ThemeStore } from "./utils/ThemeController";
import { useContext, useState } from "react";

import { useSelector } from "react-redux";

let Navbar = () => {

  const {theme, setTheme} = useContext(ThemeStore)

  let darkTheme = "navbar bg-base-300"
  let lightTheme = "navbar bg-gray-200 text-black"

  let cartItems = useSelector((store)=> store.cart.items)

  let totalItems = cartItems.reduce((total,cartObj)=> total + Number(cartObj.quantity), 0)

  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="flex-1">
        
        <Link to={"/"} className="btn btn-ghost text-xl">GetKart</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            {/* <Link to={"/cart"}>Cart : {totalItems} </Link> */}
            <Link to={"/cart"}>Cart <sup className="text-red-600 text-sm font-bold">{totalItems}</sup></Link>
          </li>
          <li>
          <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <label className="flex cursor-pointer gap-2" onClick={()=>{
              setTheme(theme == "light"? "dark":"light")
              console.log(theme)
              // localStorage.setItem("Theme",theme)  // this does not work
              setTheme(() => {
                let newTheme = (theme == 'light'? 'dark' : 'light')
                localStorage.setItem("Theme",newTheme)
                return newTheme
              })
            }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
             <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
