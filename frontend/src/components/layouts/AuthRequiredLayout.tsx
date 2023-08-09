import { Outlet, Navigate } from "react-router-dom"

import { useAppSelector } from "../../redux/store"

export default function AuthRequired({
  redirectPath = "/login",
  children,
}: any) {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} />
  }
  return <Outlet /> || children
}
