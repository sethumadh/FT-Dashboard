import { Link } from "react-router-dom"

import { images } from "../constant"

type HeaderProps = {
  openDrawerRight: () => void
}
const Header = ({ openDrawerRight }: HeaderProps) => {
  return (
    <div className="bg-slate-50 w-full">
      <div className="shadow-sm max-w-7xl  mx-auto">
        <nav className="flex items-center justify-between">
          <div className="pl-8">
            <Link to={"/"} className="w-20 md:w-32  h-auto ml-8 rounded-full">
              <img src={images.FT} className="my-2" alt="Future Tayari" />
            </Link>
          </div>
          {/* <div className="flex justify-between space-x-5">
            <Link to={"/analytics"}>
              <h1>Analytics</h1>
            </Link>
            <Link to={"/predictions"}>
              <h1>Predictions</h1>
            </Link>
          </div> */}

          <div className="mr-4 md:hidden">
            <button className="relative group py-2" onClick={openDrawerRight}>
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-white ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden group-focus:rotate-180">
                  <div className="bg-black h-[2px] w-7 transform transition-all duration-500 group-focus:-rotate-45 -translate-x-1"></div>
                  <div className="bg-black h-[2px] w-7 rounded transform transition-all duration-500 "></div>
                  <div className="bg-black h-[2px] w-7 transform transition-all duration-500 group-focus:rotate-45 -translate-x-1"></div>
                </div>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
