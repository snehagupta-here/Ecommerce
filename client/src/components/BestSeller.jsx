// import React from 'react'
import { useContext,useEffect,useState } from "react"
import ShopContext from "../context/ShopContext"
import ProductItem from "./ProductItem";
import Title from "./Title";
const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [product,setProduct] = useState([]);
    useEffect(()=>{
           const BestSellingProducts = products.filter((el)=> {return (el.bestseller === true)});
           console.log(BestSellingProducts.slice(0,5));
           setProduct(BestSellingProducts.slice(0,5));
    },[products])
    // useEffect(()=>{
    //          console.log(product);
    // },[product])
  return (
  <>        
                <div className="mx-auto w-[20rem] mt-12">
                    <Title text1={"BEST"} text2 = {"SELLERS"} />
                </div>
                    <p className="text-[#868686] mx-auto font-400 w-auto max-w-[50%] mb-12">
                    Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
         {product.length > 0  && product.map((el,index)=>(
            <ProductItem key = {index} id = {el._id} name = {el.name} price = {el.price} image = {el.image[0]} />
         ))}
         </div>
  </>
  )
}

export default BestSeller