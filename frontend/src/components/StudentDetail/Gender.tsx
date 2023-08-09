import WcTwoToneIcon from "@mui/icons-material/WcTwoTone"

type GenderProps = {
  gender?: string
}

const Gender = ({ gender }: GenderProps) => {
  return (
    <div className="flex md:space-x-6 space-x-4 relative w-full max-w-xs items-start justify-start md:justify-center px-4 py-6 border rounded-xl font-poppins font-light shadow-lg text-base ">
      <div className="w-6 md:w-8 p-1 bg-slate-300 rounded-full">
        <WcTwoToneIcon style={{ color: "blue", width: "100%", height: "100%" }} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-slate-400">Gender</h1>
        <h1 className="font-bold">{gender}</h1>
        
      </div>
    </div>
  )
}

export default Gender
