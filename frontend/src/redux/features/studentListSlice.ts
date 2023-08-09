import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { StudentListSchema } from "../../helper/zodSchema"
import { z } from "zod"

type StudentListSchema = z.infer<typeof StudentListSchema>

type InitialStateprops = {
  studentsList: StudentListSchema
}

const initialState: InitialStateprops = {
  studentsList: [],
}

export const studentListSlice = createSlice({
  name: "studentList",
  initialState,
  reducers: {
    fetchStudentList: (state, action: PayloadAction<StudentListSchema>) => {
      state.studentsList = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchStudentList } = studentListSlice.actions

export default studentListSlice
