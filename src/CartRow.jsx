import React, {useContext} from "react";
import { removeCart, incItem, decItem } from "./utils/Store/CartSlice";
import { useDispatch } from "react-redux";
import { ThemeStore } from "./utils/ThemeController";



const CartRow = ({ cartObj }) => {
  let { quantity, objData } = cartObj;
  let { thumbnail, title, rating, price, id } = objData;

  let {theme} = useContext(ThemeStore)

  // let lightText = 

  let lightTheme = "mask mask-squircle h-24 w-24 bg-gray-500"
  let darkTheme = "mask mask-squircle h-24 w-24 bg-white"

  let lightBtnTheme = "text-[8px] border-black border-2 rounded-md p-1 cursor-pointer"
  let darkBtnTheme = "text-[8px] border-white border-2 rounded-md p-1 cursor-pointer"

  let dispatch = useDispatch()

  return (
    <tr className="font-bold">
      <td className="text-base">
        <div className="flex items-center gap-6">
          <div className="avatar">
            <div className={theme == "light" ? lightTheme : darkTheme}>
              <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>{rating}⭐</td>
      <td >${price}</td>
      <td><span className={theme == "light" ? lightBtnTheme : darkBtnTheme} onClick={() => dispatch(incItem(id))}>➕</span><span className="px-3 ">{quantity}</span><span className={theme == "light" ? lightBtnTheme : darkBtnTheme} onClick={() => dispatch(decItem(id))}>➖</span></td>
      <th>
        <button className="btn btn-outline btn-error" onClick={()=> dispatch(removeCart(id))} >Remove Item</button>
      </th>
    </tr>
  );
};

export default CartRow;
