import { Outlet, Navigate } from "react-router-dom"
import { useAppSelector } from "../../redux/store"

export default function SigninLayout() {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
  if (isLoggedIn) {
    return <Navigate to="/" />
  }
  return <Outlet />
}
