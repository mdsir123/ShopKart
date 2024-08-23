import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ReviewComponent from "./ReviewComponent";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./utils/Store/CartSlice";
import useFindSingleProduct from "./utils/useFindSingleProduct";
import { ThemeStore } from "./utils/ThemeController.jsx";



const SingleProductPage = () => {

  // let [obj, setObj] = useState({
  //   thumbnail: "",
  //   title: "Product",
  //   brand: "NA",
  //   category: "NA",
  //   price: 0,
  //   rating: 0,
  //   stock: 0,
  // });


  let [showIdx, setShowIdx] = useState(null);

  // useEffect(() => {
  //   getData();
  // }, []);

  const {theme} = useContext(ThemeStore)

  let { id } = useParams();

  let obj = useFindSingleProduct(id);


  let dispatch = useDispatch();

  let cartItems = useSelector((store) => store.cart.items);


  

  // let getData = async () => {
  //   let data = await fetch(`https://dummyjson.com/product/${id}`);
  //   let objData = await data.json();
  //   setObj(objData);
  //   console.log(obj);
  // };


  let {
    thumbnail,
    title,
    brand,
    category,
    price,
    rating,
    tags,
    stock,
    reviews,
  } = obj;

  if (reviews == undefined) return <>Loading.......</>;

  
  let checkInCart = () => {
    let objId = cartItems.findIndex((cartObj) => cartObj.objData.id == Number(id));
    console.log(objId)
    return objId;
  };

  let darkTheme = "bg-base-200 w-full h-[89vh] pt-5 "
  let lightTheme = "bg-gray-100 w-full h-[89vh] pt-5 "

  let darkCardTheme = "card card-side w-1/2 bg-base-100 mx-auto shadow-xl "
  let lightCardTheme = "card card-side w-1/2 bg-gray-300 text-black mx-auto shadow-xl"

  let lightBtnTheme = "btn btn-outline text-black p-2"
  let darkBtnTheme = "btn btn-outline p-2"
  
  let darkReviewTheme = "box h-[36vh] w-1/2 bg-gray-300 mx-auto mt-8 rounded-3xl shadow-xl p-3"
  let lightReviewTheme = "box h-[36vh] w-1/2 bg-gray-900 mx-auto mt-8 rounded-3xl shadow-xl p-3"


  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className={theme == "light" ? lightCardTheme : darkCardTheme}>
        {checkInCart() != -1 ? (
          <span className=" m-5 p-2  border-red-600 border-2 rounded-badge cursor-pointer absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="red"
              viewBox="0 0 24 24"
              stroke=""
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
            </svg>
          </span>
        ) : null}
        
        <figure>
          <img src={thumbnail} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="">
            <button className="btn">
              Rating:
              <div className="badge badge-secondary">{rating}⭐</div>
            </button>
            <button className="btn">
              Price:
              <div className="badge badge-secondary">${price}</div>
            </button>
            <button className="btn">
              Stock:
              <div className="badge badge-secondary">{stock}</div>
            </button>

            <button className="btn">
              Brand:
              <div className="badge badge-secondary">{brand}</div>
            </button>
            <button className="btn">
              Category:
              <div className="badge badge-secondary">{category}</div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <button
              className={theme == "light" ? lightBtnTheme : darkBtnTheme}
              onClick={() => dispatch(addCart(obj))}
            >
              Add to Cart
            </button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className={theme == "light" ? lightReviewTheme : darkReviewTheme}>
        {/* <div className="commentHead  pl-10">
                <p>Comments:</p>
                </div> */}
        {reviews.map((obj, index) => {
          return (
            <ReviewComponent
              obj={obj}
              index={index}
              showIdx={showIdx}
              setShowIdx={setShowIdx}
              key={index}
            ></ReviewComponent>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProductPage;
