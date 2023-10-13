import {IoIosArrowForward} from "react-icons/io"
import Items from "../data/LinkData"
import { useEffect, useState } from "react"


const Links = () => {
  

  return (
    <div className="h-full px-3 pb-4 overflow-y-auto  bg-gray-200">
    <ul className="space-y-2 font-medium">
    {
      Items && 
      Items.map((data, i)=>(
        <li key={i}>
        <p className="cursor-pointer flex mt-4 items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-300 group">
          
          <div className="flex items-center justify-between w-full">
          <span className="ml-3 font-semibold text-gray-500 flex items-center gap-x-2"><data.icon color="black" size={20}/>{data.title}</span>
          <span><IoIosArrowForward/></span>
          </div>
        </p>
     </li>
      ))
    }
     
      
      
      
    </ul>
 </div>
  )
}

export default Links