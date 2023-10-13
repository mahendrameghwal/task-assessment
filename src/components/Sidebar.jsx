import { useState } from "react";
import Links from "./Links";
import Navbar from "./Navbar";


const Sidebar = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showProfile, SetshowProfile] = useState(false);


    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };

  return (
    <div>

<Navbar showProfile={showProfile} SetshowProfile={SetshowProfile} toggleSidebar={toggleSidebar} />
<aside  onClick={toggleSidebar}  className={`fixed top-0 left-0  w-64 h-screen pt-12 transition-transform ${
    showSidebar ? 'translate-x-0' : '-translate-x-full' } border-r border-gray-200 sm:translate-x-0 dark:border-gray-700`}
  aria-label="Sidebar">
 <Links/>
</aside>



    
    
    
    
    
    
    </div>
  )
}

export default Sidebar