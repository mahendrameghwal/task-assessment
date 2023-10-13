import { BiTrash } from "react-icons/bi"
import tableData from "../data/TableData"



const Action = () => {

  // product: "STOVE - ELICA - 2 Burner ",
  // product: "MS DEBIT- HPCL AUXILIARY SERVICES",
  //   product: "MSL DEBITS - HPCL - FTL REGULATOR ",
  //   product: "KITCHENWARE - kit 2- kit 2 ",
  //   product: "KITCHENWARE - kit 1- kit 1 ",






  return (
    <div className=" py-5">
      <div className='overflow-x-auto w-full'>
          <table className=' border border-blue-950 w-full whitespace-nowrap rounded-md  overflow-hidden'>
              <thead className="bg-sky-700">
                  <tr className=" text-white text-left">
                      <th className="border border-white font-medium  text-sm uppercase px-6 py-3"> Product </th>
                      <th className="border border-white font-medium  text-sm uppercase px-6 py-3"> RSP </th>
                      <th className="border border-white font-medium  text-sm uppercase px-6 py-3 text-center"> Basic price </th>
                      <th className="border border-white font-medium  text-sm uppercase px-6 py-3 text-center"> SGST AMOUNT </th>
                      <th className="border border-white font-medium  text-sm uppercase px-6 py-3"> CGSt amount </th>
                      <th className="border border-white font-medium  text-sm uppercase px-6 py-3 text-center"> offer price </th>
                      <th className="border border-white font-medium  text-sm uppercase px-6 py-3 text-center"> Month </th>
                      <th className="border border-white font-medium  text-sm uppercase px-6 py-3">year </th>
                      <th className="border border-white font-medium  text-sm uppercase px-6 py-3">actions </th>
                  </tr>
              </thead>


              <tbody className="divide-y divide-gray-200">
              <tr>

              <td className=" px-6 py-4">
              <div className=" flex items-center space-x-3">
                <div className=" whitespace-normal">
           

                <select className="outline-none border-sky-300 border-2 rounded-md bg-sky-100 px-2 py-2" name="" id="">
        
                {
                  tableData && tableData.map((data,i)=>(
                <option key={i} className="text-gray-500 text-sm font-semibold tracking-wide"> {data.product}</option>

                  ))
                }

                </select>
                  
                </div>
              </div>
            </td>
            <td className=" px-6 py-4">
            <div className=" flex items-center space-x-3">
              <div className=" whitespace-normal">
              <select className="outline-none border-sky-300 border-2 rounded-md bg-sky-100 px-2 py-2" name="" id="">
        
              {
                tableData && tableData.map((data,i)=>(
              <option key={i} className="text-gray-500 text-sm font-semibold tracking-wide"> {data.mrp}</option>

                ))
              }

              </select>
              </div>
            </div>
          </td>
                  
          <td className=" px-6 py-4">
          <div className=" flex items-center space-x-3">
            <div className=" whitespace-normal">
            <select className="outline-none border-sky-300 border-2 rounded-md bg-sky-100 px-2 py-2" name="" id="">
        
                {
                  tableData && tableData.map((data,i)=>(
                <option key={i} className="text-gray-500 text-sm font-semibold tracking-wide"> {data.basicPrice}</option>

                  ))
                }

                </select>
              
            </div>
          </div>
        </td>
        <td className=" px-6 py-4">
        <div className=" flex items-center space-x-3">
          <div className=" whitespace-normal">
          <select className="outline-none border-sky-300 border-2 rounded-md bg-sky-100 px-2 py-2" name="" id="">
        
          {
            tableData && tableData.map((data,i)=>(
          <option key={i} className="text-gray-500 text-sm font-semibold tracking-wide"> {data.sgstAmount}</option>

            ))
          }

          </select>
            
          </div>
        </div>
      </td>
      <td className=" px-6 py-4">
      <div className=" flex items-center space-x-3">
        <div className=" whitespace-normal">
        <select className="outline-none border-sky-300 border-2 rounded-md bg-sky-100 px-2 py-2" name="" id="">
        
        {
          tableData && tableData.map((data,i)=>(
        <option key={i} className="text-gray-500 text-sm font-semibold tracking-wide"> {data.cgstAmount}</option>

          ))
        }

        </select>
          
        </div>
      </div>
    </td>
    <td className=" px-6 py-4">
    <div className=" flex items-center space-x-3">
      <div className=" whitespace-normal">
      <select className="outline-none border-sky-300 border-2 rounded-md bg-sky-100 px-2 py-2" name="" id="">
        
                {
                  tableData && tableData.map((data,i)=>(
                <option key={i} className="text-gray-500 text-sm font-semibold tracking-wide"> {data.offerPrice}</option>

                  ))
                }

                </select>
        
      </div>
    </div>
  </td>
  <td className=" px-6 py-4">
  <div className=" flex items-center space-x-3">
    <div className=" whitespace-normal">
    <select className="outline-none border-sky-300 border-2 rounded-md bg-sky-100 px-2 py-2" name="" id="">
        
    {
      tableData && tableData.map((data,i)=>(
    <option key={i} className="text-gray-500 text-sm font-semibold tracking-wide"> {data.month}</option>

      ))
    }

    </select>
    </div>
  </div>
</td>
<td className=" px-6 py-4">
<div className=" flex items-center space-x-3">
  <div className=" whitespace-normal">
  <select className="outline-none border-sky-300 border-2 rounded-md bg-sky-100 px-2 py-2" name="" id="">
        
                {
                  tableData && tableData.map((data,i)=>(
                <option key={i} className="text-gray-500 text-sm font-semibold tracking-wide"> {data.year}</option>

                  ))
                }

                </select>
  </div>
</div>
</td>
                      <td className="px-6 py-4 flex justify-center hover:text-red-700 cursor-pointer text-xl text-center text-gray-500  font-medium"> <BiTrash/> </td> 
              </tr>
              </tbody>
             
          </table>
      </div>
  </div>
  )
}

export default Action