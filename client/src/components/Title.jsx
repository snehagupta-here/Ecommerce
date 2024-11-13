// import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <>
    <div className="flex items-center">
        <h1 className="text-[#707070] text-[28px] font-400 ">{text1}</h1>
        <h2 className="font-400 text-[28px] text-[#171717]">&nbsp;{text2}</h2>
        <hr className="w-[50px] ml-2 h-[3px] bg-[#252525]" />
    </div>
    </>
  )
}

export default Title