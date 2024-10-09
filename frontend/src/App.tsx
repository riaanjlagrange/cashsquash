import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="flex w-[100vw] h-[100vh] dark:bg-slate-900">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App;
