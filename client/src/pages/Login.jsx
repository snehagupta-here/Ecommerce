// import React from 'react'
import { useState } from "react"
const Login = () => {
  let [userState,setUserState] = useState('Sign Up');
  const submitHandler = async (e) =>{
    e.preventDefault();
}
  return (
    <>
<div className="flex flex-col mt-[8rem] text-black mx-auto w-[25%] gap-6">
  <div className="flex items-center self-center">
  <h1 className="text-3xl font-serif mr-2">{userState}</h1>
  <hr className="bg-gray-800 w-[2rem] h-[0.3rem]" />
  </div>
  <form className="flex flex-col" onSubmit={submitHandler}>
    {userState === 'Sign Up' ? <input type="text" placeholder="Name" className="p-2 border-black border-[1px] mb-4" required /> : ''}
    <input type="email" placeholder="Email" className="p-2 border-black border-[1px] mb-4" required />
    <input type="password" placeholder="Password" className="p-2 border-black border-[1px] mb-2" required />
    <div className="text-[#3C3C3C] flex justify-between text-sm font-medium">
      <p className={`cursor-pointer ${userState === 'Sign Up' ? 'hidden' : ''}`}>Forgot your password?</p>
      <p onClick={userState === 'Sign Up' ? () => setUserState('Login') : () => setUserState('Sign Up')} className="cursor-pointer">{userState === 'Sign Up' ?  'Login Here' : 'create new account'}</p>
    </div>
    <button className="text-white bg-black w-[30%] h-[2.4rem] self-center mt-6">{userState === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
  </form>
</div>
    </>
  )
}

export default Login