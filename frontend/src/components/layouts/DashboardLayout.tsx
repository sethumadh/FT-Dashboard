import { useState } from "react"
import { Outlet } from "react-router-dom"

import SideNavBar from "../../components/Sidenavbar"
import Header from "../Header"
import MobileViewSidenavbar from "../../components/MobileViewSidenavbar"
import Footer from "../../components/Footer"

const DashboardLayout = () => {
  const [openRight, setOpenRight] = useState(false)
  const openDrawerRight = () => setOpenRight(true)
  const closeDrawerRight = () => setOpenRight(false)
  return (
    <div id="dashboard" className=" w-full ">
      <div className="hidden md:flex">
        <SideNavBar />
      </div>
      <div className="w-full pl-0 md:pl-16 min-h-screen  flex flex-col justify-between">
        <div>
          <Header openDrawerRight={openDrawerRight} />
          <Outlet />
          <MobileViewSidenavbar
            openRight={openRight}
            openDrawerRight={openDrawerRight}
            closeDrawerRight={closeDrawerRight}
          />
        </div>

        <div className="border shadow-sm bg-slate-50">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
