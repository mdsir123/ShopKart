import React, {useContext} from "react";
import CartRow from "./CartRow";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart,priceAsc, priceDesc } from "./utils/Store/CartSlice";
import { ThemeStore } from "./utils/ThemeController";

const Cart = () => {
  let cartItems = useSelector((store) => store.cart.items);
  let dispatch = useDispatch()

  let {theme} = useContext(ThemeStore)

  let lightTheme = "overflow-x-auto px-20 bg-slate-300 h-screen text-black"
  let darkTheme = "overflow-x-auto px-20 bg-slate-900 h-screen"

  let darkHeadTheme = "text-base text-slate-400"
  let lightHeadTheme = "text-base text-slate-900"




  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <table className="table">
        {/* head */}
        <thead className={theme == "light" ? lightHeadTheme : darkHeadTheme}>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th><span className="cursor-pointer" onClick={()=>dispatch(priceDesc())}>🔼</span> <span className="px-1">Price</span> <span className="cursor-pointer" onClick={()=>dispatch(priceAsc())}>🔽</span></th>
            <th>Quantity</th>
            <th>Remove </th>
          </tr>
        </thead>
        <tbody className="">
          {cartItems.map((cartObj) => (
            <CartRow key={cartObj.objData.id} cartObj={cartObj}></CartRow>
          ))}
        </tbody>
      </table>
      <div className="">
      <button className="btn btn-block" onClick={()=> dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
