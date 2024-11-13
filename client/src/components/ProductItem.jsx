// import React from 'react'
import { useContext } from "react";
import {Link} from "react-router-dom";
import ShopContext from "../context/ShopContext";
const ProductItem = ({id,name,price,image}) => {
   const {currency} = useContext(ShopContext);
  return (
<>
          <Link to={`/product/${id}`} className="cursor-pointer text-[#494949] text-sm flex flex-col items-start" >
                    <div className="overflow-hidden">
                   <img src={image} className="hover:scale-110 transition ease-in-out" />
                    </div>
                   <h1 className="my-2">{name}</h1>
                   <h1 className="font-medium">{currency}{price}</h1>
          </Link>
</>
  )
}

export default ProductItem