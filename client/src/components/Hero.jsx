// import React from 'react'

import { assets } from "../assets/assets"

const Hero = () => {
  return (
   <>
   <div className="border-[1px] flex flex-col h-full sm:flex-row border-gray-400 sm:h-[300px] md:h-[470px] lg:h-[540px] xl:h-[620px]">
         <div className="sm:w-[50%] h-full flex flex-col items-center justify-center text-[#414141]">
                <div className="flex items-center">
                    <hr className="bg-[#484848] h-[3px] w-[44px] mr-2" />
                    <p>OUR BESTSELLERS</p>
                </div>
                <h1 className="text-[35px] sm:text-[38px] md:text-[45px] lg:text-[50px] font-600" style={{fontFamily:"'Prata',serif"}}>Latest Arrivals</h1>
                <div className="flex items-center">
                <p>SHOP NOW</p>
                <hr className="bg-[#484848] ml-2 h-[2px] w-[43px]" />
                </div>
         </div>
         <div className="w-[100%] sm:w-[50%] h-full">
            <img src={assets.hero_img} className="w-[100%] h-[100%] " />
         </div>
   </div>
{/* <div className="border-[1px] flex flex-col sm:flex-row border-gray-400 h-full sm:h-[500px]">
  <div className="sm:w-[50%] bg-black h-full flex flex-col items-center justify-center text-[#414141]">
    <div className="flex items-center">
      <hr className="bg-[#484848] h-[3px] w-[44px] mr-2" />
      <p>OUR BESTSELLERS</p>
    </div>
    <h1 className="text-[35px] sm:text-[38px] md:text-[45px] lg:text-[50px] font-600" style={{ fontFamily: "'Prata', serif" }}>Latest Arrivals</h1>
    <div className="flex items-center">
      <p>SHOP NOW</p>
      <hr className="bg-[#484848] ml-2 h-[2px] w-[43px]" />
    </div>
  </div>
  <div className="w-[100%] sm:w-[50%] h-full">
    <img src={assets.hero_img} className="w-[100%] h-[100%] object-cover" />
  </div>
</div> */}


   </>
  )
}

export default Hero