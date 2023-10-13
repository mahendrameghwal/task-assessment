

import Action from "./Action"
import Actions from "./Actions";
import { Table } from "./Table";

const Content = () => {
  return (
    <div>
     <div className="max-md:p-1 sm:ml-64">
      <Actions/>
      <div className="min-h-screen  py-5">
      <Action/>
      <p className=" text-red-600 font-medium">Please enter <span className="uppercase text-red-700">offer price</span> including with  it&lsquo;s GST </p>
     <Table/>  
    </div>
      








  
  
















    
    </div>
  

    
    
  
  </div>
  );
};

export default Content;
