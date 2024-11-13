// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ShopContext from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const {productId} = useParams();
  let {products,currency,addToCart,deleteFromCart,getCartCount} = useContext(ShopContext);
  const [product,setProduct] = useState(null);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');
  useEffect(()=>{
              const newProduct = products.find((el) => el._id === productId);
              console.log(newProduct);
              setProduct(newProduct);
              window.scrollTo(0, 0); // Scroll to the top of the page
              // setImage(product.image[0]);
              // console.log(product);
  },[products,productId])
 useEffect(()=>{
     console.log("product",product);
      // console.log(product.image[0]);
     if(product !== null){
       setImage(product.image[0]);
     }
 },[product])
//  useEffect(()=>{
// console.log(image);
//  },[image])
// const adddToCart = () =>{
//   setCounter(counter++);
// }
  return (
   <>
   {product && <div className="flex border-t pt-16 justify-start gap-4">
    <div className="flex flex-col-reverse sm:flex-row w-[50%] gap-4">
      <div className="flex flex-col">
      {product.image.map((img,index) =>
      <img key={index} src={img} onClick={()=> setImage(img)} className="h-[10rem] w-[9rem] mb-4" />)}
      </div>
   <img src={image} className="flex-1 max-h-[700px] mr-8" />
    </div>
   <div className="w-[40%] flex flex-col gap-y-5">
    <div className="flex flex-col gap-y-2">
         <h1 className="text-2xl font-medium">{product.name}</h1>
         <div className="flex gap-1 items-center">
         <img src={assets.star_icon} className="w-[0.8rem] h-[0.8rem]"  />
         <img src={assets.star_icon} className="w-[0.8rem] h-[0.8rem]"  />
         <img src={assets.star_icon} className="w-[0.8rem] h-[0.8rem]"  />
         <img src={assets.star_icon} className="w-[0.8rem] h-[0.8rem]"  />
         <img src={assets.star_dull_icon} className="w-[0.8rem] h-[0.8rem]"  />
          <p className="ml-2">(122)</p>
         </div>
    </div>
      <h1 className="text-3xl font-medium">{currency}{product.price}</h1>
    <h1 className="text-[#555555]">{product.description}</h1>
    <h1 className="#656565">Select Size</h1>
    <div className="flex">
    {product.sizes.length > 0 && product.sizes.map((s,index)=>{ return( <div key = {index} onClick={()=>setSize(s)} className={`w-[2rem] h-[2rem] mr-3 flex justify-center items-center bg-[#EBEBEB] border text-sm p-5 cursor-pointer ${size == s ? 'border-orange-400' : ''}`}>{s}</div>) 
    })}
    </div>
    {getCartCount() === 0 ?  <button onClick={() => addToCart(product._id,size)} className="flex items-center justify-center bg-black text-white mt-4 w-[10rem] h-[2.9rem] text-sm active:bg-gray-700">ADD TO CART</button> : <div className="flex items-center justify-between bg-white text-black border-black border-2 px-3 mt-4 w-[10rem] h-[2.9rem] text-sm "><img src={assets.bin_icon} className="w-[0.9rem] h-[0.9rem] cursor-pointer" onClick={()=>deleteFromCart(product._id,size)} /><p>{getCartCount()}</p><img src={assets.plus} className="w-[0.9rem] h-[0.9rem] cursor-pointer" onClick={()=>addToCart(product._id,size)} /></div>}
   
    <div className="flex flex-col border-t text-[#555555] text-sm pt-5 gap-y-1 mt-4">
      <p>100% Original product.</p>
      <p>Cash on delivery is available on this product.</p>
      <p>Easy return and exchange policy within 7 days.</p>
    </div>
   </div>
   </div>}
   {/* description & reviews  */}
   <div className="mt-[5rem]">
         <div className="flex items-center text-sm">
          <p className="font-semibold border p-4">Description</p>
          <p className="border p-4">Reviews (122)</p>
         </div>
         <div className="flex flex-col text-gray-500 border p-6 gap-4 text-sm">
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
         </div>
   </div>
   {product &&  <RelatedProduct category={product.category} subcategory={product.subCategory} id = {product._id} />}
   </>
  )
}

export default Product