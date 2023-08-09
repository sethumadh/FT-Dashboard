import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import EditIcon from "@mui/icons-material/Edit"
import LogoutIcon from "@mui/icons-material/Logout"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useNavigate } from "react-router-dom"
import { persistor, useAppSelector } from "../redux/store"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { toast } from "react-hot-toast"

const logoutSuccess = () =>
  toast.success("Succesfully Logged out. Please login to access dashboard", {
    duration: 4000,
    position: "top-center",
    style: {},
    className: "text-blue-400",
    icon: "",
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  })
export default function ProfileDropDown() {
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user)
  // console.log(user, "<<-user details from redux")
  const handleLogout = () => {
    // console.log("logout clicked")
    persistor.purge()
    logoutSuccess()
    navigate("/login")
  }
  return (
    <div className="z-1000 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* <KeyboardArrowDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-yellow-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <AccountCircleIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <AccountCircleIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => navigate("/changepassword")}
                    className={`${
                      active ? "bg-yellow-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <EditIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Change password
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      handleLogout()
                    }}
                    className={`${
                      active ? "bg-yellow-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <LogoutIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <LogoutIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
