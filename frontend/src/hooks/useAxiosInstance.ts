import axios, { AxiosInstance } from "axios";
import { useAppSelector } from "../redux/store";

const baseURL = "http://localhost:1337";

// Define a custom type for the return value of useAxiosInstance
type UseAxiosInstanceType = {
  axiosInstance: AxiosInstance;
};

const useAxiosInstance = (): UseAxiosInstanceType => {
  const user = useAppSelector((state) => state.user);

  const axiosInstance:AxiosInstance = axios.create({
    baseURL,
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${user.accessToken}`,
    },
  });

  return { axiosInstance };
};

export default useAxiosInstance;
