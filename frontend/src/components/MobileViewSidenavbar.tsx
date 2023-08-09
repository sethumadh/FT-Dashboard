import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react"

import { Link } from "react-router-dom"
type MobileViewSidenavbarProps = {
  openDrawerRight: () => void
  closeDrawerRight: () => void
  openRight: boolean
}
import { useNavigate } from "react-router-dom"
import { persistor, useAppSelector } from "../redux/store"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

import { logoutSuccess } from "../helper/functions/functions"
import { icons } from "../constant"


const MobileViewSidenavbar = ({
  openRight,
  closeDrawerRight,
}: MobileViewSidenavbarProps) => {
  const user = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  const handleLogout = () => {
    persistor.purge()
    logoutSuccess()
    navigate("/login")
  }
  return (
    <div>
      <Drawer
        overlay={false}
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 bg-slate-100"
      >
        <div className="mb-6 flex items-start justify-between">
          <List>
            <ListItem>
              <ListItemPrefix>
                <Avatar className="w-6 h-6">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </ListItemPrefix>

              <div>{user.user.name}</div>
            </ListItem>
            <ListItem onClick={closeDrawerRight}>
              <ListItemPrefix>
                <icons.PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>

              <Link to={"/"}>Dashboard</Link>
            </ListItem>

            <ListItem onClick={closeDrawerRight}>
              <ListItemPrefix>
                <icons.Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Link to={`/changepassword`}>Settings</Link>
            </ListItem>
            <ListItem onClick={closeDrawerRight}>
              <ListItemPrefix>
                <icons.PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Link
                to={"/"}
                onClick={() => {
                  handleLogout()
                }}
              >
                Log Out
              </Link>
            </ListItem>
          </List>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <icons.CloseIcon />
          </IconButton>
        </div>
      </Drawer>
    </div>
  )
}

export default MobileViewSidenavbar
