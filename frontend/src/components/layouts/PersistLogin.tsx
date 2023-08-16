import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import useRefreshToken from "../../hooks/useRefreshToken"
import { useAppSelector, useAppDispatch } from "../../redux/store"
import LoadingSpinner from "../LoadingSpinner"
import { fetchUser } from "../../redux/features/userSlice"

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { refresh } = useRefreshToken()
  const user = useAppSelector((state) => state.user)
  const persist = JSON.parse(localStorage.getItem("persistLogin") as string)
  const dispatch = useAppDispatch()


  useEffect(() => {
    let isMounted = true

    const verifyRefreshToken = async () => {
      try {
        const response = await refresh()
        if (response.data.access_token) {
          const userData = {
            accessToken: response.data.access_token,
            user: {
              name: response.data.name,
              email: response.data.email,
            },
          }
          // console.log(userData, "<<-- after login")

          dispatch(fetchUser({ ...userData }))
        }
      } catch (err) {
        console.error(err)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    // persist added here AFTER tutorial video
    // Avoids unwanted call to verifyRefreshToken
    !user?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false)

    return () => {
      isMounted = false
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, user?.accessToken])

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <LoadingSpinner className="w-20 h-20" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  )
}

export default PersistLogin
