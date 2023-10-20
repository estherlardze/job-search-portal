import { useState } from "react"
import {AiTwotoneMail} from 'react-icons/ai'

const JobsCardOne = (props) => {
  const {img ,title,children} = props
  return (
    <div className="">
      <div className="bg-blue  flex  rounded-tr-xl rounded-tl-xl sm:h-20  p-4 space-x-3 flex-wrap">
       {img && <img src={img} alt="picture"/>}
        <h3 className="capitalize sm:text-3xl font-bold text-white mx-8">{title} </h3>
      </div>
      <div className="px-12 py-6 space-y-4 bg-blue/20 rounded-br-xl rounded-bl-xl pb-12 ">
       {children}
      </div>
    </div>
  )
}

export default JobsCardOne
