import { useEffect } from "react"
import AverageStudentsChart from "../components/charts/AverageStudentsChart"
import CourseProgressChart from "../components/charts/CourseProgressChart"
import StudentsList from "../components/StudentsList"
// import LoadingSpinner from "@components/LoadingSpinner"
import Summary from "../components/Summary"

import { useAppSelector, useAppDispatch } from "../redux/store"
import axios from "axios"
import { StudentListSchema } from "../helper/zodSchema"
import { fetchStudentList } from "../redux/features/studentListSlice"

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const baseURL = "http://localhost:1337"
  const user = useAppSelector((state) => state.user)

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await axios.get(
          `${baseURL}/vendor/6486c6ab01d5e2e87cafd3e1`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        )

        const std = StudentListSchema.parse(data?.data?.studentsEnrolled)

        dispatch(fetchStudentList(std))
      } catch (err) {
        console.log(err)
      }
    }
    fetchStudents()
  }, [])

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
