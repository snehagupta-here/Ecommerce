// import React from 'react'

import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import Title from "../components/Title"
import Subscribe from "../components/Subscribe";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col border-t pt-12 gap-16">
      <div className="w-[20%] self-center">
        <Title text1={'CONTACT'} text2={'US'} />
     </div>
     <div className="flex gap-16 justify-center text-gray-600 items-center mb-16">
      <img src={assets.contact_img} className="w-[30%] h-[50vh]" />
      <div className="w-[15%] flex flex-col gap-10 items-start">
        <h1 className="text-gray-700 font-semibold text-xl">Our Store</h1>
        <h1 className="w-[100%]">54709 Willms Station
        Suite 350, Washington, USA</h1>
        <h1>Tel: (415) 555-0132
        Email: admin@forever.com</h1>
        <h1 className="text-gray-700 font-semibold ">Explore more of us at</h1>
        <button onClick={() => navigate('/collection')} className="border-black border-[1px] p-3 px-6 hover:bg-black hover:text-white">Explore</button>
      </div> 
      </div>
      <Subscribe />
    </div>
  )
}

export default Contact