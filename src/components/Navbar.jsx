import {HiUsers, HiDocumentDownload} from "react-icons/hi"
import {FaHeadset} from "react-icons/fa"
import {PiVideo} from "react-icons/pi"
import {IoMdPaper} from "react-icons/io"
import {FaBarsStaggered} from "react-icons/fa6"
import {MdVerifiedUser} from "react-icons/md"
import {IoMdNotifications} from "react-icons/io"
import { useState } from "react"


const Navbar = ({SetshowProfile,showProfile, toggleSidebar}) => {

const [ShowItem, setShowItem]= useState(true)

    
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200  dark:border-gray-700">
    <div className="px-2 py-2 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">

         {/*logo */}
        <div className="flex items-center justify-start ">
          <button  onClick={toggleSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none  ">
              
              <FaBarsStaggered color="#8e3aa1" size={20}/>
           </button>
          <p className="flex gap-x-2 items-center ml-2 md:mr-24">
          <img src="https://www.srenergy.in/assets/img/logo-white.png"  />
          </p>
        </div>
          {/*nav items */}


                     




        <div className="flex py-1 px-2 justify-between max-md:justify-end items-center  w-full">

        
          <div className="flex max-md:hidden flex-row gap-x-1">
          <div className="flex items-center ">
          <button onClick={()=>{setShowItem(!ShowItem)}} className=" focus:divide-violet-400 ">
          <FaBarsStaggered color="#c18fcc" size={20}/>
          </button>
          </div>

         {
          ShowItem &&
          <div className="flex ">
          <section className="flex gap-x-2 px-3">
          <p className="border rounded-md font-semibold border-gray-300 px-2 text-gray-600 bg-blue-50">CP</p>
          <p className="border rounded-md font-semibold border-gray-300 px-2 text-gray-600 bg-blue-50">OP</p>
          <p className="border rounded-md font-semibold border-gray-300 px-2 text-gray-600 bg-blue-50">DS</p>
          <p className="border rounded-md font-semibold border-gray-300 px-2 text-gray-600 bg-blue-50">CS</p>
          <p className="border rounded-md font-semibold border-gray-300 px-2 text-gray-600 bg-blue-50">DC</p>
          <p className="border rounded-md font-semibold border-gray-300 px-2 text-gray-600 bg-blue-50">NC</p>
          <p className="border rounded-md font-semibold border-gray-300 px-2 text-gray-600 bg-blue-50">RC</p>
          <p className="border rounded-md font-semibold border-gray-300 px-2 text-gray-600 bg-blue-50">PT</p>
          <p className="border rounded-md font-semibold border-gray-300 px-2 text-gray-600 bg-blue-50">BT</p>

          </section>
          
          </div>

         }
          
          
          </div>












       
            <div className="flex items-center ml-3">
         {

          ShowItem && 
          <div className="flex max-md:hidden gap-x-2 px-2">
          <FaHeadset color="#374142" size={25}/>
          <HiDocumentDownload color="#374142" size={25}/>
          <IoMdNotifications color="#374142" size={25}/>
          <MdVerifiedUser color="#374142" size={25}/>
          <IoMdPaper color="#374142" size={25}/>
          <PiVideo color="#374142" size={25}/>
          <HiUsers color="#374142" size={25}/>
          </div>

         }



              <div>
                <button onClick={()=>{SetshowProfile(!showProfile)}} type="button" className="flex text-sm  rounded-full focus:ring-4" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  
                  <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/149/149995.png" alt="user photo"/>
                </button>
              </div>
          {
             showProfile && 
             <div className="z-50 top-9 absolute right-2 my-4 text-base list-none bg-white divide-y  rounded shadow " id="dropdown-user">
             <div className="px-4 py-3" role="none">
               <p className="text-sm text-gray-900" role="none">
                 Neil Sims
               </p>
               <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                 neil.sims@flowbite.com
               </p>
             </div>
             <ul className="py-1" role="none">
               <li>
                 <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</p>
               </li>
               <li>
                 <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Settings</p>
               </li>
               <li>
                 <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</p>
               </li>
               <li>
                 <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</p>
               </li>
             </ul>
           </div>
          }
            </div>
          </div>
      </div>
    </div>
    </nav>
  )
}

export default Navbar