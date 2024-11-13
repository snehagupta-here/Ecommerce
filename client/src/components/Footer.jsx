// import React from 'react'
import { assets } from "../assets/assets"
const Footer = () => {
  return (
    <>
    <div className="h-auto w-[100%] flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] text-[#595959] text-sm my-8 gap-[15rem] mt-[10rem] mb-[3rem]">
         <div className="flex flex-col">
            <img src={assets.logo} className="h-[2rem] w-[7rem] mb-3" />
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&abps;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
         </div>
         <div>
            <h1 className="text-black text-xl font-semibold mb-3">COMPANY</h1>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
         </div>
         <div>
            <h1 className="text-black text-xl font-semibold mb-3">GET IN TOUCH</h1>
            <ul>
                <li>+1-000-000-0000</li>
                <li>sneha@gmail.com</li>
                <li>Linkedin</li>
            </ul>
         </div>
    </div>
     <hr className="w-[100%] h-[1px] bg-[#BDBDBD]" />
     <h1 className="text-sm text-[#565656] mx-auto font-medium my-8 w-[25%]">Copyright 2024@ greatstack.dev - All Right Reserved.</h1>
    </>
  )
}

export default Footer