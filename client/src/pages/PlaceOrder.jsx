import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import {  useState} from "react";
// import ShopContext from "../context/ShopContext";
const PlaceOrder = () => {
  const [method,setMethod] = useState('cod');
  // let {setCartItems} = useContext(ShopContext);
  const navigate = useNavigate();
  const handleClick = () =>{
                  navigate('/orders');
  }
  return (
   <>
   <div className="flex justify-between w-[100%] border-t pt-16">
    <div className="w-[50%] flex flex-col gap-4">
      <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      <div className="flex mt-4 gap-7">
        <input className="h-[2.7rem] pl-3 text-md border-2 rounded-md" placeholder="First name" type="text" required />
        <input className="border-2 h-[2.7rem] pl-3 text-md" placeholder="Last name" type="text" required  />
      </div>
      <input placeholder="Email address" type="email" className="border-2 h-[2.7rem] pl-3 text-md w-[60%]" required  />
      <input placeholder="Street" type="text" className="border-2 h-[2.7rem] pl-3 text-md w-[60%]" required  />
      <div className="flex gap-7">
        <input className="border-2 h-[2.7rem] pl-3 text-md" placeholder="City" type="text" required  />
        <input className="border-2 h-[2.7rem] pl-3 text-md" placeholder="State" type="text" required  />
      </div>
      <div className="flex gap-7">
        <input className="border-2 h-[2.7rem] pl-3 text-md" placeholder="Zipcode" type="number" required  />
        <input className="border-2 h-[2.7rem] pl-3 text-md" placeholder="Country" type="text" required  />
      </div>
      <input placeholder="Phone" type="number" className="border-2 h-[2.7rem] pl-3 text-md w-[60%]" required  />
    </div>
    <div className="w-[35%] flex flex-col">
    <CartTotal />
   <div className="w-[40%] flex mt-12 mb-4"> <Title text1={"PAYMENT"} text2={"METHOD"} /></div> 
    <div className="flex gap-3 justify-end flex-end">
            <div className="border flex items-center py-2 px-6 cursor-pointer">
              <p onClick={()=>setMethod('stripe')} className={`rounded-full w-[1rem] h-[1rem] border mr-5 ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} className="w-[3rem] h-[1.3rem]" />
            </div>
            <div className="border flex items-center py-2 px-6 cursor-pointer">
              <p onClick={()=>setMethod('razorpay')} className={`rounded-full w-[1rem] h-[1rem] border mr-5 ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} className="w-[6rem] h-[1.5rem]" />
            </div>
            <div className="border flex items-center py-2 px-6 cursor-pointer">
              <p onClick={()=>setMethod('cod')} className={`rounded-full w-[1rem] h-[1rem] border mr-5 ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-[#555555] text-sm">CASH ON DELIVERY</p>
            </div>
    </div>
 <button className="bg-black text-white h-[2.7rem] mt-8 w-[35%] self-end text-sm" onClick={handleClick}>PLACE ORDER</button>
    </div>
   </div>
   </>
  )
}

export default PlaceOrder