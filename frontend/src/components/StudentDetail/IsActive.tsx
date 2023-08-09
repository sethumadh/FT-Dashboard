import { FcReading } from "react-icons/fc"

type IsActiveProps = {
  isActive?: boolean
}

const IsActive = ({ isActive }: IsActiveProps) => {
  return (
    <div className="flex md:space-x-6 space-x-4 relative w-full max-w-xs items-start justify-start md:justify-center px-4 py-6 border rounded-xl font-poppins font-light shadow-lg text-base ">
      <div className="w-6 md:w-8 p-1 bg-slate-300 rounded-full">
        <FcReading style={{ color: "blue", width: "100%", height: "100%" }} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-slate-400">Active</h1>
        <h1 className="font-bold">
          {isActive ? (
            <span className="relative flex items-center h-3 w-3 py-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 items-center top-2"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 top-2"></span>
            </span>
          ) : (
            <span className="relative flex items-center h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 items-center top-2"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 top-2"></span>
            </span>
          )}
        </h1>
      </div>
    </div>
  )
}

export default IsActive
