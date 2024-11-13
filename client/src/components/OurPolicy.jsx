// import React from 'react'
import { assets } from "../assets/assets"
const OurPolicy = () => {
  return (
    <>
    <div className="w-[80%] mx-auto h-auto my-[8rem] flex justify-between">
      <div className="text-md flex flex-col items-center">
        <img src={assets.exchange_icon} className="w-[3rem] h-[3rem] mb-4" />
        <h1 className="text-[#373737] font-semibold">Easy Exchange Policy</h1>
        <h1 className="text-[#898989] mt-1">We offer hastle free exchange policy</h1>
      </div>
      <div className="text-md flex flex-col items-center">
        <img src={assets.quality_icon} className="w-[3rem] h-[3rem] mb-4" />
        <h1 className="text-[#373737] font-semibold">7 Days Return Policy</h1>
        <h1 className="text-[#898989] mt-1">We provide 7 days free return policy</h1>
      </div>
      <div className="text-md flex flex-col items-center">
        <img src={assets.support_img} className="w-[3rem] h-[3rem] mb-4" />
        <h1 className="text-[#373737] font-semibold">Best customer support</h1>
        <h1 className="text-[#898989] mt-1">We provide 24/7 customer support</h1>
      </div>
    </div>
    </>
  )
}

export default OurPolicy