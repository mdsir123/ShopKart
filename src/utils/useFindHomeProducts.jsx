import React, { useState, useEffect } from "react";

const useFindHomeProducts = () => {
  const [allData, setAllData] = useState([]);

  const [productData, setProductData] = useState([]);
  let getData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let obj = await data.json();

    setAllData(obj.products);
    setProductData(obj.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return {allData : allData, productData : productData};
};

export default useFindHomeProducts;
