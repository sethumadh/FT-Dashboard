import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist"
// import { createEntityAdapter } from "@reduxjs/toolkit"

export type User = {
  accessToken: string
  user: {
    name: string
    email: string
  }
}
type InitialStateprops = {
  isLoggedIn: boolean
} & User

const initialState: InitialStateprops = {
  accessToken: "",
  user: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
}
// const customEntityAdapter = createEntityAdapter<User>()
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUser: (state, action: PayloadAction<User>) => {
      console.log(action.payload)
      state.accessToken = action.payload.accessToken
      state.user.name = action.payload.user?.name
      state.user.email = action.payload.user?.email
      if (state.accessToken) {
        state.isLoggedIn = true
      } else {
        state.isLoggedIn = false
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState
    })
  },
})

// Action creators are generated for each case reducer function
export const { fetchUser } = userSlice.actions

export default userSlice
