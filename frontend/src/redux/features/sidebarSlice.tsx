import { PURGE } from "redux-persist"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

type initialStateProps = {
  activePath: string
}
const initialState: initialStateProps = {
  activePath: "",
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActivePath: (state, action: PayloadAction<string>) => {

      state.activePath = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  },
})

// Action creators are generated for each case reducer function
// eslint-disable-next-line react-refresh/only-export-components
export const { setActivePath } = sidebarSlice.actions

export default sidebarSlice
