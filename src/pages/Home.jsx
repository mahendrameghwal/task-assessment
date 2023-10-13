import Content from "../components/Content"
import Sidebar from "../components/Sidebar"


const home = () => {
  return (
    <div className="min-h-screen max-h-full ">
    <Sidebar/>
    <Content/>
    </div>
  )
}

export default home