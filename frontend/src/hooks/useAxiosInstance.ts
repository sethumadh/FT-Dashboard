import axios, { AxiosInstance } from "axios"
import { useAppSelector, useAppDispatch } from "../redux/store"
import useRefreshToken from "./useRefreshToken"
import { fetchUser } from "../redux/features/userSlice"
import { useNavigate } from "react-router-dom"

// Define a custom type for the return value of useAxiosInstance
type UseAxiosInstanceType = {
  axiosInstance: AxiosInstance
  PubcliAxiosInstance: AxiosInstance
}


const useAxiosInstance = (): UseAxiosInstanceType => {
  const baseURL = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { refresh } = useRefreshToken()
  const user = useAppSelector((state) => state.user)
  // console.log(user.accessToken, "access Token")

  const axiosInstance: AxiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
  const PubcliAxiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
      Accept: `application/json`,
    },
  })
  axiosInstance.interceptors.request.use(
    (request) => {
      if (!request.headers[`Authorization`]) {
        request.headers[`Authorization`] = `Bearer ${user?.accessToken}`
      }
      return request
    },
    async (error) => {
      // console.log("Request Error", error)
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      // console.log(error?.config.sent, "<<-- before login")
      const prevReq = error?.config
      if (
        error?.response?.data?.message == "TokenExpiredError" ||
        ("jwt expired" && !prevReq?.sent == true)
      ) {
        prevReq.sent = true
        const response = await refresh()
        if (response?.data.access_token) {
          const userData = {
            accessToken: response?.data.access_token,
            user: {
              name: response?.data.name,
              email: response?.data.email,
            },
          }
          // console.log(userData.accessToken, "new access token")
          dispatch(fetchUser({ ...userData }))
        }
        // console.log(prevReq?.sent, "<<-- after login")
        prevReq.headers[
          `Authorization`
        ] = `Bearer ${response?.data.access_token}`
        return axiosInstance(prevReq)
      }
      
      return Promise.reject(error)
    }
  )

  return { axiosInstance, PubcliAxiosInstance }
}

export default useAxiosInstance
