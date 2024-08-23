import react from "react";

const AddedProductInCart = (Component) => {
  return (props) => {
    return (
      <div className="relative">
        <div className=" p-2 absolute top-8 left-8 w-11 border-red-600 border-2 rounded-badge z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="red"
              viewBox="0 0 24 24"
              stroke=""
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
            </svg>
          </div>
        <Component {...props}></Component>
      </div>
    )
  }
};


export default AddedProductInCart;
