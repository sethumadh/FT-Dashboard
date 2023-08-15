import { useEffect, useState } from "react"
import AverageStudentsChart from "../components/charts/AverageStudentsChart"
import CourseProgressChart from "../components/charts/CourseProgressChart"
import StudentsList from "../components/StudentsList"
// import LoadingSpinner from "@components/LoadingSpinner"
import Summary from "../components/Summary"

import { useAppSelector, useAppDispatch } from "../redux/store"
import { StudentListSchema } from "../helper/zodSchema"
import { fetchStudentList } from "../redux/features/studentListSlice"
import useAxiosInstance from "../hooks/useAxiosInstance"


const Dashboard = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { axiosInstance, PubcliAxiosInstance } = useAxiosInstance()
  const controller = new AbortController()

  const dispatch = useAppDispatch()


  useEffect(() => {
    setIsMounted(true)
    const fetchStudents = async () => {
      if (isMounted) {
        try {
          const data = await axiosInstance.get(
            `/api/vendor/6486c6ab01d5e2e87cafd3e1`,
            {
              signal: controller.signal,
            }
          )

          const std = StudentListSchema.parse(data?.data?.studentsEnrolled)

          // const res = await axios.get("http://localhost:1337/api/users/refresh", {
          //   withCredentials: true,
          // })
          // const res = await PubcliAxiosInstance.get(`/api/users/refresh`, {
          //   signal: controller.signal,
          // })
          // console.log(res, "->>refresh")
          // console.log(std, "students")
          dispatch(fetchStudentList(std))
        } catch (err) {
          // console.log(err, ">>>>>>refreshe error")
          // signout
        }
      }
    }
    fetchStudents()
    return () => {
      setIsMounted(false)
      controller.abort()
    }
  }, [axiosInstance,isMounted,dispatch,controller])
  return (
    <div className=" my-8 w-full max-w-7xl mx-auto font-mada">
      <div id="dashboard" className="mx-8 ">
        <Summary />
      </div>

      <div className="mt-8 mx-8 flex flex-col md:flex md:flex-row md:space-x-5 space-x-0 space-y-5 md:space-y-0">
        <div className=" w-full md:w-2/3 ">
          <AverageStudentsChart />
        </div>
        <div className="w-full md:w-1/3">
          <CourseProgressChart />
        </div>
      </div>

      <div id="studentsList" className="  ">
        <StudentsList />
      </div>
    </div>
  )
}

export default Dashboard
