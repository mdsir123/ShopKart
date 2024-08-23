import React from "react";
import {useState, useEffect} from "react"

const useFindSingleProduct = (id) => {
  let [obj, setObj] = useState({
    thumbnail: "",
    title: "Product",
    brand: "NA",
    category: "NA",
    price: 0,
    rating: 0,
    stock: 0,
  });

  let getData = async () => {
    let data = await fetch(`https://dummyjson.com/product/${id}`);
    let objData = await data.json();
    setObj(objData);    
    console.log(obj);
  };

  useEffect(() => {
    getData();
  }, []);

  return obj
};

export default useFindSingleProduct