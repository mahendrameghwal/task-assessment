import {AiOutlinePlus} from "react-icons/ai"
import {MdOutlineArrowBack} from "react-icons/md"
import {BsChevronCompactDown} from "react-icons/bs"
const Actions = () => {
  return (
    <div className="p-2  rounded-lg  mt-14">
    <div className="flex flex-wrap  flex-row item-center justify-between">
      <p className="flex font-bold items-center">BLPG/ARB/NFR ITEMS PRICE MASTER</p>
      <div className="flex gap-x-3 flex-wrap">
      <button className="max-md:px-1 max-md:font-medium flex max-md:mt-3 py-2 px-3 max-md:py-1  gap-x-2 text-white rounded-sm font-semibold items-center bg-green-500"><AiOutlinePlus />ADD</button>
      <button className="max-md:px-1 max-md:font-medium flex max-md:mt-3 py-2 px-3 max-md:py-1  text-white rounded-sm font-semibold items- bg-teal-600">CALCULATE</button>
      <button className="max-md:px-1 max-md:font-medium flex max-md:mt-3 py-2 px-3 max-md:py-1  text-white rounded-sm font-semibold items-center bg-blue-500">SAVE</button>
      <button className="max-md:px-1 max-md:font-medium flex max-md:mt-3 py-2 px-3 max-md:py-1  gap-x-2 text-white rounded-sm font-semibold items-center bg-teal-600"><MdOutlineArrowBack />BACK</button>
      <button className="max-md:px-1 max-md:font-medium flex max-md:mt-3 py-2 px-3 max-md:py-1  gap-x-2 rounded-sm font-semibold items-center text-blue-500 border-2 border-blue-500">HELP<BsChevronCompactDown/></button>
      </div>
      </div>
    </div>
  )
}

export default Actions