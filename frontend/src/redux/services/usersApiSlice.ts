import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { LoginUser, User } from "../types"
import { api } from "./api"

export const usersApiSlice = api.injectEndpoints({
  endpoints: (build) => ({
    setSignup: build.mutation<User, void>({
      query: (data) => ({ url: "users/signup/", method: "POST", body: data }),
    }),
    setLogin: build.mutation<LoginUser, void>({
      query: (data) => ({ url: "users/login/", method: "POST", body: data }),
    }),

    SetUpdateUser: build.mutation<User, User>({
      query: (data: User) => ({
        url: `users/user/${data._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getUser: build.query<User, string>({
      query: (_id: string) => ({ url: `users/user/${_id}` }),
      providesTags: ["User"],
    }),
  }),
})

export const { useSetLoginMutation, useSetSignupMutation, useGetUserQuery, useSetUpdateUserMutation } =
  usersApiSlice
