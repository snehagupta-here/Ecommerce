import { useContext, useEffect, useState } from "react"
import ShopContext from "../context/ShopContext"
import Title from "../components/Title";
import CarItem from "../components/CarItem";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  let {products,cartItems,currency} = useContext(ShopContext);
  let [cartData,setCartData] = useState([]);
  useEffect(()=>{
    console.log("cartItems",cartItems);
            let cartCopy = [];
            for(const id in cartItems){
              for(const size in cartItems[id]){
                    //  let obj = {
                    //   id: id,
                    //   size:size,
                    //   quantity:cartItems[id][size]
                    //  };
                    let obj = {};
                     obj.id = id;
                     obj.size = size;
                    
                       obj.quantity = cartItems[id][size];
                     
                     cartCopy.push(obj);
              } 
            }
            console.log(cartCopy);
            setCartData(cartCopy);
  },[cartItems])
  return (
   <>
       <div className="border-t pt-12">
        <Title text1={"YOUR"} text2={"CART"} />
        <div className="flex flex-col mt-5 gap-4">
             {cartData.length > 0 ? cartData.map((data,index)=>(
                   <CarItem key={index} id = {data.id} size = {data.size} quantity = {data.quantity} cartData = {cartData} setCartData={setCartData} />
             )) : ''}
        </div>
        <div>
          <CartTotal />
        </div>
       </div>
   </>
  )
}

export default Cart