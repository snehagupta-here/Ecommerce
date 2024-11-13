import { useContext, useEffect,useState } from "react"
import Title from "./Title"
import ShopContext from "../context/ShopContext"
import { useLocation, useNavigate } from "react-router-dom";
const CartTotal = () => {
    let {currency,delivery_fee,products,cartItems} = useContext(ShopContext);
    let [cartTotal,setCartTotal] = useState(0);
    let navigate = useNavigate();
    let location = useLocation();
    useEffect(()=>{
            //    let total = cartData.reduce((total,item)=>{
            //     let product = products.find((el) => item.id === el._id);
            //     return total + product.price * item.quantity},0);
            //    setCartTotal(total);
            let total = 0;
                     for(const id in cartItems){
                        for(const size in cartItems[id]){
                                  let product = products.find((el) => id === el._id);
                                          total += product.price * cartItems[id][size];
                        }
                     }
                     setCartTotal(total);
    },[cartItems])
  return (
 <>
 <div className="flex justify-end">
 <div className={`flex flex-col gap-4 w-[100%] ${location.pathname === '/place-order' ? '' : 'w-[27%]'}`}>
    <Title text1={"CART"} text2={"TOTALS"} />
       <div className="flex flex-col gap-3">
           <div className="flex justify-between border-b pb-2 text-[#555555] font-medium">
            <h1>Subtotal</h1>
            <h1>{currency}{cartTotal.toFixed(2)}</h1>
           </div>
           <div className="flex justify-between border-b pb-2 text-[#555555] font-medium">
            <h1>Shipping Fee</h1>
            <h1>{currency}{delivery_fee.toFixed(2)}</h1>
           </div>
           <div className="flex justify-between font-semibold">
            <h1>Total</h1>
               <h1>{currency}{(cartTotal + delivery_fee).toFixed(2)}</h1>
           </div>
       </div>
       {location.pathname === '/cart' ? <button className="bg-black text-white h-[2.7rem] w-[50%] mt-3 text-sm self-end" onClick={()=>navigate('/place-order')}>PROCEED TO CHECKOUT</button> : ''}
 </div>
 </div>
 </>
  )
}

export default CartTotal