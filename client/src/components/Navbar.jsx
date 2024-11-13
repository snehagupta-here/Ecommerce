// import React from 'react'
import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { NavLink , Link} from "react-router-dom"
import ShopContext from "../context/ShopContext";
const Navbar = () => {
    let [isVisible,setIsVisible] = useState(false);
    const {setShowSearchbar,getCartCount }= useContext(ShopContext);
  return (
    <>
        <div className="flex justify-between items-center h-[80px]">

        <div className="w-[40%]">
          <Link to="/"> <img src={assets.logo} className="w-[166px]" /></Link>
        </div>
        <div className="hidden sm:flex justify-evenly md:w-[70%] lg:w-[35%] ">
                 <NavLink to="/" className="flex flex-col items-center">
                 <p>HOME</p>
                 <hr className="w-[35px] h-[2px] bg-[#303030] hidden"></hr>
                 </NavLink>
                 <NavLink to="/collection" className="flex flex-col items-center">
                 <p>COLLECTION</p>
                 <hr className="w-[40px] h-[2px] bg-[#303030] hidden"></hr>
                 </NavLink>
                 <NavLink to="/about" className="flex flex-col items-center">
                 <p>ABOUT</p>
                 <hr className="w-[35px] h-[2px] bg-[#303030] hidden"></hr>
                 </NavLink>
                 <NavLink to="/contact" className="flex flex-col items-center">
                 <p>CONTACT</p>
                 <hr className="w-[35px] h-[2px] bg-[#303030] hidden"></hr>
                 </NavLink>
          
        </div>
        <div className="flex justify-end w-[40%] cursor-pointer">
          <Link to="/collection">  <img src={assets.search_icon} className="h-[22px] w-[22px] mr-6" onClick={() => {setShowSearchbar(true)}} /></Link>
            <div className="group ">              
              <Link to="/login" ><img src={assets.profile_icon} className="h-[24px] w-[24px] mr-6" /></Link>
            
            <div className="group-hover:block hidden absolute dropdown-menu flex flex-col py-3 w-36 px-5 bg-slate-50 text-gray-600 rounded shadow-xl ring-1 ring-gray-900/5">       
                          <p className="hover:text-black font-semibold">My Profile</p>
                          <p className="hover:text-black font-semibold">Orders</p>
                          <p className="hover:text-black font-semibold">Logout</p>
            </div>
            </div>
            <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="h-[24px] w-[24px]" />
            <p className="flex justify-center items-center rounded-full w-[1.1rem] h-[1.1rem] absolute top-3 -right-2 bg-black text-white text-xs">{getCartCount()}</p>
            </Link>
        </div>
        <img onClick={()=> {setIsVisible(true)}} src={assets.menu_icon} className="w-[1.1rem] h-[1.1rem] cursor-pointer sm:hidden" />
        {isVisible && <div className="w-full h-[100vh] absolute bg-white bottom-0 top-0 left-0 overflow-hidden transition-all">
            <div onClick={() => {setIsVisible(false)}} className="flex flex-col text-gray-600 font-semibold">
            <div  className="cursor-pointer flex pl-2 py-4 items-center text-gray-600 font-semibold">
            <img src={assets.dropdown_icon} className="w-[1rem] h-[1rem] mr-3 rotate-180" />
            <p className="text-[1rem]">Back</p>
                </div>
                <NavLink to="/" className="border py-2 pl-4">HOME</NavLink>
                <NavLink to="/collection" className="border py-2 pl-4">COLLECTION</NavLink>
                <NavLink to="/about" className="border py-2 pl-4">ABOUT</NavLink>
                <NavLink to="/contact" className="border py-2 pl-4">CONTACT</NavLink>
                </div>
            </div>}
        
    </div>
    </>
  )
}

export default Navbar