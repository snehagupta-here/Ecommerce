// import React from 'react'

import { useContext, useEffect,useState } from "react"
import Title from "./Title"
import ShopContext from "../context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProduct = ({category,subcategory,id}) => {
    // console.log(category);
    // console.log(subcategory);
    const {products} = useContext(ShopContext);
    const [relatedProduct,setRelatedProduct] = useState([]);
    useEffect(()=>{
            //   console.log(products);
             let newProducts = products.filter((product)=> product.category === category);
             newProducts = newProducts.filter((product)=> product.subCategory === subcategory);
             newProducts = newProducts.filter((product)=> product._id !== id);
             console.log(newProducts);
             setRelatedProduct(newProducts.slice(0,5));
    },[])
  return (
<>
<div className="w-[100]">
    <div className="w-[20%] mx-auto mt-[6rem] mb-[3rem]">
<Title text1={"RELATED"} text2={"PRODUCTS"} />
</div>
         {relatedProduct.length > 0 ? <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {  relatedProduct.map((product,index)=>(
                <ProductItem key={index} id = {product._id} name={product.name} price={product.price} image={product.image[0]} />
            )) }
            </div> : <div>No Related Items Available</div>}
    </div>

</>
  )
}

export default RelatedProduct