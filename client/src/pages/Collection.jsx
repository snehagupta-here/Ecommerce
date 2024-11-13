// import React from 'react'
import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ShopContext from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
const Collection = () => {
  const [showFilter,setShowFilter] = useState(false);
  const {products} = useContext(ShopContext);
  let [filteredProducts,setFilteredProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortedProduct,setSortedProduct] = useState("relavent");
   const {showSearchbar,setShowSearchbar} = useContext(ShopContext);
   const [searchInput,setSearchInput] = useState('');
  useEffect(()=>{
          setFilteredProducts(products);
  },[])
  const handleClick = (e) =>{
        if(category.includes(e.target.value)){
             let newCategory = category.filter((el) => el !== e.target.value);
             setCategory(newCategory);
        }else{
           setCategory([...category,e.target.value]);
        }

  }
  const handleClick1 = (e) =>{
    console.log(e.target.value);
    if(subCategory.includes(e.target.value)){
      setSubCategory(subCategory.filter((el) => el !== e.target.value));
    }else{
      setSubCategory([...subCategory,e.target.value]);
    }
  }
  useEffect(()=>{
     console.log("subCategory changed",subCategory);
    let newProducts = products.slice();
    if(category.length > 0){
        console.log("category filtering");
        newProducts = newProducts.filter((el)=> category.includes(el.category));
    }
    if(subCategory.length > 0){
      console.log("fitering");
                newProducts = newProducts.filter((el) => subCategory.includes(el.subCategory));
    }
    if (sortedProduct=== "low-high") {
      newProducts = newProducts.sort((a, b) => a.price - b.price);
    } else if (sortedProduct === "high-low") {
      newProducts = newProducts.sort((a, b) => b.price - a.price);
    }
    if(searchInput != ''){
             newProducts = newProducts.filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()));
    }
         setFilteredProducts(newProducts);
  },[category,subCategory,sortedProduct,searchInput])
  // useEffect(()=>{
  //   console.log(filteredProducts);
  // },[filteredProducts])
const handleChange = (e) =>{
  console.log(e.target.value);
        setSortedProduct(e.target.value);
}
const handleInputChange = (e) =>{
  console.log(e.target.value);
  setSearchInput(e.target.value);
}
  return (
  <>
   <div className={`w-[100%] h-[80px] bg-[#F9FAFB] border-t flex items-center justify-center ${showSearchbar === false ? "hidden" : ''}`}>
          <div className={`w-[50%] rounded-[4rem] h-[50%] bg-white border-[1px] border-gray-300 flex items-center justify-between `}>
           <input className="outline-none p-4 h-[90%] rounded-[4rem] w-[85%] text-sm" onChange={handleInputChange} placeholder="Search"/>
           <img src={assets.search_icon} className="w-[1rem] h-[1rem] mr-4" />
          </div>
          <img src={assets.cross_icon} className="w-[0.7rem] h-[0.7rem] ml-3 cursor-pointer" onClick={()=>{setShowSearchbar(false);setSearchInput('')}} />
   </div>
   <div className="border-t-[1px] flex flex-col sm:flex-row pt-12">
          <div className="min-w-60 flex flex-col h-auto">
            <div className="flex items-center cursor-pointer">
                 <h1 className="text-black text-xl mr-2">FILTERS</h1>
                 <img src={assets.dropdown_icon} className={`w-[0.7rem] h-[0.7rem] sm:hidden ${showFilter === true ? 'rotate-90' : ''}`} onClick={()=>{setShowFilter(!showFilter)}} />
            </div>
                 <div className={`flex flex-col border-2 p-4 text-[#212121] mt-7 ${showFilter === true ? '' : 'hidden'} sm:flex`}>
                      <h1 className="font-semibold">CATEGORIES</h1>
                      <div className="flex font-light text-sm mt-3">
                        <input type="checkbox" className="mr-2" value={'Men'} onClick={handleClick} />
                        <p>Men</p>
                      </div>
                      <div className="flex font-light text-sm mt-2">
                        <input type="checkbox" className="mr-2" value={'Women'} onClick={handleClick} />
                        <p>Women</p>
                      </div>
                      <div className="flex font-light text-sm mt-2">
                        <input type="checkbox" className="mr-2" value={'Kids'} onClick={handleClick} />
                        <p>Kids</p>
                      </div>
                 </div>
                 <div className={`flex flex-col border-2 p-4 text-[#212121] mt-7 ${showFilter === true ? '' : 'hidden'} sm:flex`}>
                      <h1 className="font-semibold">TYPE</h1>
                      <div className="flex font-light text-sm mt-3">
                        <input type="checkbox" className="mr-2" value={'Topwear'} onClick={handleClick1} />
                        <p>Topwear</p>
                      </div>
                      <div className="flex font-light text-sm mt-2">
                        <input type="checkbox" className="mr-2" value={'Bottomwear'} onClick={handleClick1}  />
                        <p>Bottomwear</p>
                      </div>
                      <div className="flex font-light text-sm mt-2">
                        <input type="checkbox" className="mr-2" value={'Winterwear'} onClick={handleClick1} />
                        <p>Winterwear</p>
                      </div>
                 </div>
          </div>
          <div className="flex-1 ml-12 flex-col">
            <div className="flex justify-between">
            <Title text1={"ALL"} text2 = {"COLLECTIONS"} />
             <select className="border px-2 text-sm" onClick={handleChange}>
              <option className="" value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
             </select>
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {filteredProducts.map((el,index)=>(
                      <ProductItem key={index} id={el._id} name={el.name} price={el.price} image={el.image[0]} />
                    ))}
            </div>
          </div>
   </div>
  </>
  )
}

export default Collection