import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeStore } from "./utils/ThemeController";
import { addCart } from "./utils/Store/CartSlice";
import { useDispatch } from "react-redux";

let ProductCard = ({ obj }) => {
  let { thumbnail, title, brand, category, price, rating, tags, id } = obj;
  const { theme } = useContext(ThemeStore);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  let handleCartBtn = (event) => {
    dispatch(addCart(obj));
    event.stopPropagation();
  };

  let handleBuyBtn = (event) => {
    event.stopPropagation();
  };

  let darkTheme = "card card-compact h-[24rem] w-70 bg-base-100 shadow-xl m-4 relative";
  let lightTheme = "card card-compact h-[24rem] w-70 bg-gray-300 shadow-xl m-4 text-black relative";

  let lightBtnTheme = "btn btn-outline text-black p-2"
  let darkBtnTheme = "btn btn-outline p-2"


  return (
    <div
      className= {theme == "light" ? lightTheme : darkTheme}
      onClick={handleProductClick}
    >
      {/* {checkInCart() != -1 ? (
          <div className=" p-2  border-red-600 border-2 rounded-full cursor-pointer absolute top-6 left-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="red"
              viewBox="0 0 24 24"
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
            </svg>
          </div>
        ): null} */}

      <figure>
        <img src={thumbnail} alt="Product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>
        <div className="font-medium">
          <div className="badge badge-primary p-2 m-1 ">{brand}</div>
          <div className="badge badge-accent badge-outline p-2 m-1">
            {category}
          </div>
          <div className="badge badge-secondary badge-outline p-2 m-1">
            {tags[1]}
          </div>
        </div>
        <div className="text-base font-bold px-1">$ {price}</div>
        <div className="text-base font-medium px-1">Rating: {rating}</div>
        <div className="card-actions justify-end">
          <button className={theme == "light" ? lightBtnTheme : darkBtnTheme} onClick={handleCartBtn}>
            Add to Cart
          </button>
          <button className="btn btn-primary p-2" onClick={handleBuyBtn}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
