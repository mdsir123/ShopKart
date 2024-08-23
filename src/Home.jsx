import { useState, useEffect,useContext } from "react";
import ProductCard from "./ProductCard.jsx";
import ShimmerUI from "./ShimmerUI.jsx";
import { ThemeStore } from "./utils/ThemeController.jsx";
import {useSelector} from "react-redux";
import AddedProductInCart from "./AddedProductInCart.jsx"
// import useFindHomeProducts from "./utils/useFindHomeProducts.jsx";

let Home = () => {

  const [allData, setAllData] = useState([])

  const [productData, setProductData] = useState([])

  const [query, setQuery] = useState("");

  const {theme} = useContext(ThemeStore)

  // let allData = useFindHomeProducts().allData

  // let productData = useFindHomeProducts().productData

  let getData = async () => {
    let data = await fetch('https://dummyjson.com/products')
    let obj = await data.json();
  
    setAllData(obj.products)
    setProductData(obj.products)
  }

  let cartItems = useSelector((store) => store.cart.items)

  let checkInCart = (id) => {
    let objId = cartItems.findIndex((cartObj) =>{
      return cartObj.objData.id == Number(id)
    })

    return objId;
  };

  let AddedProduct = AddedProductInCart(ProductCard)

  useEffect(()=>{
    getData();
  },[])


  if(allData.length == 0){
    return <ShimmerUI/>
  }

  let handleTopRated = () =>{
    let filteredData = allData.filter((obj) => {
      return obj.rating>4
    })

    setProductData(filteredData)
  }

  let handleSortAsc = () =>{
     let copy = [...productData];
     copy.sort((a,b)=> a.price - b.price );
     setProductData([...copy])
  }

  let handleSortDesc = () =>{
    let copy = [...productData];
     copy.sort((a,b)=> b.price - a.price );
     setProductData([...copy])
  }

  let handleCategory = (category) =>{
    let filteredData = allData.filter((obj) => {
      return obj.category == category
    })

    setProductData(filteredData)
  }

  let handleSearch = () => {
    let filteredData = allData.filter((obj) => {
      return obj.title.toLowerCase().includes(query.trim().toLowerCase())
    })

    setProductData(filteredData)
    setQuery("")
  }

  let darkTheme = "min-h-[89vh] w-100 bg-slate-500"
  let lightTheme = "min-h-[89vh] w-100 bg-gray-100"

  

  return (

    <div className={theme == "light"? lightTheme:darkTheme}>

      <div className="utility flex justify-around pt-4 px-2">
        
        <button className="btn btn-outline text-slate-900 " onClick={handleTopRated}>Top Rated</button>
        <button className="btn btn-outline text-slate-900 " onClick={handleSortDesc}>Sort: High to Low</button>
        <button className="btn btn-outline text-slate-900 " onClick={handleSortAsc}>Sort: Low to High</button>
        
        
        
        <button className="btn btn-outline text-slate-900 " onClick={()=>handleCategory('groceries')}>Groceries</button>
        <button className="btn btn-outline text-slate-900 " onClick={()=>handleCategory('furniture')}>Furniture</button>
        <button className="btn btn-outline text-slate-900 " onClick={()=>handleCategory('beauty')}>Beauty</button>
        
        <div className="SearchBar flex ">
          <input 
          type="text" 
          placeholder="Search here" 
          className="input input-bordered w-full max-w-xs bg-transparent border-slate-900" 
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          />
          <button className="btn btn-success mx-2" onClick={handleSearch}>Search</button>
        </div>
        
    </div>

    <div className="cards  flex flex-wrap justify-around"> {
      productData.map((obj) => checkInCart(obj.id) != -1 ? <AddedProduct obj = {obj} key={obj.id}></AddedProduct> : <ProductCard obj = {obj} key={obj.id}></ProductCard>)
      // productData.map((obj) => <ProductCard obj = {obj} key={obj.id}></ProductCard>)
    } </div>

    </div>
  );
};

export default Home;
