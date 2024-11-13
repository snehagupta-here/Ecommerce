// import React from 'react'

const Subscribe = () => {
    const submitHandler = (e) =>{
         e.preventDefault();
    }
  return (
    <>
    <div className="w-[45%] h-auto mx-auto flex flex-col items-center mb-8">
       <h1 className="text-[#373737] font-medium text-[1.8rem]">Subscribe now & get 20% off</h1>
       <h1 className="text-[#9A9A9A] font-medium text-md my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
       <form className="flex h-[52px] mt-3" onSubmit={submitHandler}>
        <input placeholder="Enter your email" className="w-[500px] border-[1px] pl-4 border-[#C7C7C7]" required />
        <button type="submit" className="bg-black text-white w-[200px]">SUBSCRIBE</button>
               </form>
    </div>
    </>
  )
}

export default Subscribe