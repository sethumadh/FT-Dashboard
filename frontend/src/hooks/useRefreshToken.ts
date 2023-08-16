import axios from "axios"
import { useAppSelector, useAppDispatch } from "../redux/store"
import { fetchUser } from "../redux/features/userSlice"

const useRefreshToken = () => {
  const baseURL = import.meta.env.VITE_BASE_URL
  const dispatch = useAppDispatch()
  const refresh = async () => {
    const response = await axios.get(`${baseURL}/api/users/refresh`, {
      withCredentials: true,
    })
    // console.log(response.data, "inside userefresh")

    return response
  }

  return { refresh }
}

export default useRefreshToken
