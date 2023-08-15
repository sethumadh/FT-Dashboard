import axios from "axios"
import { useAppSelector, useAppDispatch } from "../redux/store"
import { fetchUser } from "../redux/features/userSlice"

const useRefreshToken = () => {
  const dispatch = useAppDispatch()
  const refresh = async () => {
    const response = await axios.get(
      "http://localhost:1337/api/users/refresh",
      {
        withCredentials: true,
      }
    )
    // console.log(response.data, "inside userefresh")
    
    return response
  }

  return { refresh }
}

export default useRefreshToken
