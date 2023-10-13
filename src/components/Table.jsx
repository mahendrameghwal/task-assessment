import { BiTrash } from "react-icons/bi"
import tableData from "../data/TableData"



export const Table = () => {
  return (
    <div className='overflow-x-auto w-full'>
            <table className=' border border-blue-950 w-full whitespace-nowrap rounded-md  overflow-hidden'>
                <thead className="bg-sky-700">
                    <tr className="text-white text-left">
                        <th className="border border-white font-medium  text-sm uppercase px-6 py-3"> Product </th>
                        <th className="border border-white font-medium  text-sm uppercase px-6 py-3"> MRP </th>
                        <th className="border border-white font-medium  text-sm uppercase px-6 py-3 text-center"> Basic price </th>
                        <th className="border border-white font-medium  text-sm uppercase px-6 py-3 text-center"> CGST AMOUNT </th>
                        <th className="border border-white font-medium  text-sm uppercase px-6 py-3"> scgt amount </th>
                        <th className="border border-white font-medium  text-sm uppercase px-6 py-3 text-center"> offer price </th>
                        <th className="border border-white font-medium  text-sm uppercase px-6 py-3 text-center"> Month </th>
                        <th className="border border-white font-medium  text-sm uppercase px-6 py-3">year </th>
                        <th className="border border-white font-medium  text-sm uppercase px-6 py-3">actions </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                   {
                    tableData&& tableData.map((data, i)=>(
                      <tr key={i}>
                      <td className=" px-6 py-4">
                      <div className=" flex items-center space-x-3">
                        <div className=" whitespace-normal">
                          <p className="text-gray-500 text-sm font-semibold tracking-wide">{data.product}</p>
                        </div>
                      </div>
                    </td>
                          <td className=" px-6 py-4">
                              <p className="text-gray-500 text-sm font-semibold tracking-wide"> {data.mrp}</p>
                          </td>
                          <td className="px-6 py-4 text-center"> <span className=" text-sm w-1/3 pb-1 text-gray-500 font-semibold px-2 rounded-full">{data.basicPrice} </span> </td>
                          <td className="px-6 py-4 text-center text-gray-500  font-medium"> {data.cgstAmount}</td>
                          <td className="px-6 py-4 text-center text-gray-500  font-medium">{data.sgstAmount}</td>
                           <td className="px-6 py-4 text-center text-gray-500  font-medium"> {data.offerPrice} </td>
                            <td className="px-6 py-4 text-center text-gray-500  font-medium"> {data.month} </td>
                             <td className="px-6 py-4 text-center text-gray-500  font-medium"> {data.year} </td>
                              <td className="px-6 py-4 flex justify-center hover:text-red-700 cursor-pointer text-xl text-center text-gray-500  font-medium"> <BiTrash/> </td> 
                      </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
  )
}
