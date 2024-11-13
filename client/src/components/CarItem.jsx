import { useContext, useEffect, useState } from "react"
import ShopContext from "../context/ShopContext";
import { assets } from "../assets/assets";
const CarItem = ({id,size,quantity,cartData,setCartData}) => {
    let [product,setProduct] = useState({});
    let {products,currency,handleClick} = useContext(ShopContext);
    // let [localQuantity,setLocalQuantity] = useState(quantity);
    useEffect(()=>{
            let productCopy = products.find((item) => id === item._id);
            setProduct(productCopy);
    },[id])
    useEffect(()=>{
          console.log(product);
    },[product])
    
    
    // const handleChange = (e) => {
    //     const newQuantity = Number(e.target.value);
    //     setCounter((prevCounter) => prevCounter - localQuantity + newQuantity);
    //     setLocalQuantity(newQuantity);
    //     setProduct({ ...product, quantity: newQuantity });
    
    //     // Update cartData to reflect the new quantity
    //     const updatedCartData = cartData.map(item =>
    //         item.id === id && item.size === size ? { ...item, quantity: newQuantity } : item
    //     );
    //     setCartData(updatedCartData);
    // };
    // useEffect(() => {
    //     setLocalQuantity(quantity);
    // }, [quantity]);
    
  return (
    <>
    {
          product ? 
    <div className="border-t flex justify-between pt-5 items-center">
                <div className="flex gap-7 w-[20%]">
{product.image && product.image[0] && (

                    <img src={product.image[0]} className="w-[5rem] h-[6rem]" />
)}
                    <div className="flex flex-col gap-3">
                           <h1 className="font-medium text-[#494949] text-lg">{product.name}</h1>
                           <div className="flex items-center gap-5"> 
                                <h1 className="font-light text-md">{currency}{product.price}</h1>
                                <div className="w-[1rem] h-[1rem] flex justify-center items-center bg-[#EBEBEB] border text-sm p-4 ">
                                           {size}
                                </div>
                           </div>
                    </div>
                </div>
                <input onChange={(e)=>handleClick(product._id,size,Number(e.target.value))} type="number" className="border w-[5rem] h-[2rem] pl-2 text-[#494949] font-medium" value={quantity} min={1} />
                {/* <div className="border w-[5rem] h-[2rem] border-2">
                    <h1 className="pl-2 text-[#494949] font-medium">{quantity}</h1>
                </div> */}
                <img src={assets.bin_icon} className="w-[1rem] h-[1.3rem] cursor-pointer" onClick={() => handleClick(product._id,size,0)} />
    </div> : ''
    }
    </>
  )
}

export default CarItem