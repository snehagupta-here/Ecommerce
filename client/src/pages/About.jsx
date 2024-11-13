// import React from 'react'
import { assets } from "../assets/assets";
import Subscribe from "../components/Subscribe";
import Title from "../components/Title";
const About = () => {
  return (
    <div className="border-t pt-12 flex flex-col gap-16">
      <div className="w-[20%] self-center">
      <Title text1={'ABOUT'} text2={'US'} />
      </div>
        <div className="flex gap-16 items-center">
          <img className="w-[30%] h-[50vh]" src={assets.about_img} />
          <div className="flex flex-col gap-6 w-[50%] text-gray-600">
            <div>
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
            </div>
            <div>
            Since our inception, we&apos;ve worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
            </div>
            <h1 className="font-bold text-black">Our Mission</h1>
            <div>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We&apos;re dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
            </div>
          </div>
        </div>
        <div className="flex flex-col">
<Title text1={'WHY'} text2={'CHOOSE US'} />
<div className="flex flex-col sm:flex-row text-sm mt-8">
  <div className="flex flex-col border px-16 gap-6 py-[5rem]">
    <p className="font-semibold">
    Quality Assurance:
    </p>
    <p className="text-gray-600">
    We meticulously select and vet each product to ensure it meets our stringent quality standards.
    </p>
  </div>
  <div className="flex flex-col border px-16 gap-6 py-[5rem]">
    <p className="font-semibold">
    Convenience:
    </p>
    <p className="text-gray-600">
    With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
    </p>
  </div>
  <div className="flex flex-col border px-16 gap-6 py-[5rem]">
    <p className="font-semibold">
    Exceptional Customer Service:
    </p>
    <p className="text-gray-600">
    Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
    </p>
  </div>
</div>
        </div>
        <Subscribe />
    </div>
  )
}

export default About