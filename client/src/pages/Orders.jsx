import { useContext, useEffect, useState } from "react"
import Title from "../components/Title"
import ShopContext from "../context/ShopContext"
const Orders = () => {
  let {cartItems,products,currency} = useContext(ShopContext);
  let [cartData,setCartData] = useState([]);
  useEffect(()=>{
          let cartCopy = [];
          console.log("cartitems are:",cartItems);
          for(const id in cartItems){
            for(const size in cartItems[id]){
              cartCopy.push({
                id:id,
                size:size,
                quantity:cartItems[id][size]
              })
            }
          }
          setCartData(cartCopy);
  },[cartItems])
  useEffect(()=>{
console.log("sneha:",cartData);
  },[cartData])
  return (
   <>
   <div className="border-t pt-12 flex flex-col gap-6">
      <Title text1={"MY"} text2={"ORDERS"} />
       {cartData && cartData.map((el,index)=>{
        let product = products.find((item)=>item._id === el.id);
        return <div key={index} className="flex justify-between border-t text-sm pt-4 items-center">
                    <div className="flex gap-6">
                      <img src={product.image[0]} className="w-[5rem] h-[6rem]" />
                      <div className="flex flex-col gap-1">
                        <h1 className="text-[#494949] font-medium text-[1rem]">{product.name}</h1>
                        <div className="flex gap-3">
                          <h1>{currency}{product.price}</h1>
                          <h1>Quantity: {el.quantity}</h1>
                          <h1>Size: {el.size}</h1>
                        </div>
                        <h1 className="text-[#3C3C3C]">Date: <span className="text-[#989898]">{Date.now()}</span></h1>
                        <h1 className="text-[#3C3C3C]">Payment: <span className="text-[#989898]">cod</span></h1>
                      </div>
                    </div>
                    <div className="border p-2 px-3 cursor-pointer">
                      Track Order
                    </div>
        </div>})}
   </div>
   </>
  )
}

export default Orders