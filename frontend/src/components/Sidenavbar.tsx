import { Menu, MenuItem, Sidebar } from "react-pro-sidebar"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { icons } from "../constant"
import { persistor, useAppSelector, useAppDispatch } from "../redux/store"
import { setActivePath } from "../redux/features/sidebarSlice"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,

} from "../components/ui/avatar"
import { logoutSuccess } from "../helper/functions/functions"

function SideNavBar() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const activeLink = useAppSelector((state) => state.sidebar.activePath)
  const [collapsed, setCollapsed] = useState(true)
  const navigate = useNavigate()
  const handleLogout = () => {
    persistor.purge()
    logoutSuccess()
    navigate("/login")
  }

  useEffect(() => {
    dispatch(setActivePath(location.pathname))
  }, [location, dispatch])
  return (
    <div style={{ height: "auto", display: "flex" }} className="relative">
      <Sidebar
        style={{
          height: "auto",
          backgroundColor: "white",
          marginRight: "",
          position: "fixed",
          zIndex: 999,
        }}
        collapsed={collapsed}
        transitionDuration={400}
        className="bg-white hidden md:block"
      >
        <Menu className="min-h-screen border-r-2 bg-white">
          <MenuItem
            className="bg-white"
            icon={<icons.MenuOutlinedIcon />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ textAlign: "center" }}
          ></MenuItem>

          <MenuItem
            onClick={() => {
              if (!collapsed) setCollapsed(!collapsed)
            }}
            icon={
              <>
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </>
            }
            component={<Link to={`/`} />}
          >
            {user.user.name}
          </MenuItem>
          <MenuItem
            onClick={() => {
              if (!collapsed) setCollapsed(!collapsed)
            }}
            className={`${
              activeLink == "/" || activeLink.includes("student_detail")
                ? "bg-gradient-to-r from-orange-400  to-yellow-300"
                : ""
            }`}
            icon={<icons.DashboardIcon style={{ color: "black" }} />}
            component={<Link to={`/`} />}
          >
            DashBoard
          </MenuItem>

          <MenuItem
            onClick={() => {
              if (!collapsed) setCollapsed(!collapsed)
            }}
            className={`${
              activeLink == "/analytics"
                ? "bg-gradient-to-r from-orange-400  to-yellow-300"
                : ""
            }`}
            icon={<icons.InsightsIcon style={{ color: "black" }} />}
            component={<Link to={`/analytics`} />}
          >
            Analytics
          </MenuItem>
          <MenuItem
            onClick={() => {
              if (!collapsed) setCollapsed(!collapsed)
            }}
            className={`${
              activeLink == "/predictions"
                ? "bg-gradient-to-r from-orange-400  to-yellow-300"
                : ""
            }`}
            icon={<icons.OnlinePredictionIcon style={{ color: "black" }} />}
            component={<Link to={`/predictions`} />}
          >
            Predictions
          </MenuItem>
          <MenuItem
            onClick={() => {
              if (!collapsed) setCollapsed(!collapsed)
            }}
            className={`${
              activeLink == "/changepassword"
                ? "bg-gradient-to-r from-orange-400  to-yellow-300"
                : ""
            }`}
            icon={<icons.SettingsIcon style={{ color: "black" }} />}
            component={<Link to={`/changepassword`} />}
          >
            Settings
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleLogout()
            }}
            icon={<icons.LogoutIcon style={{ color: "black" }} />}
            component={<Link to={`/`} />}
          >
            Log Out
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideNavBar
