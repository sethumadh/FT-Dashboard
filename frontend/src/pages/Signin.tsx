import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

import { CircularProgress } from "@mui/material"
import { useState } from "react"
import { images } from "../constant"
import {
  loginError,
  loginSucess,
  signupError,
  signupSucess,
} from "../helper/functions/functions"
import { LoginFormDataSchema, SignupSchema } from "../helper/zodSchema"
import { fetchUser } from "../redux/features/userSlice"
import { useAppDispatch } from "../redux/store"

const Signin = () => {
  const dispatch = useAppDispatch()
  const baseURL = "http://localhost:1337"
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  type LoginFormData = z.infer<typeof LoginFormDataSchema>
  type SignupData = z.infer<typeof SignupSchema>

  const methods = useForm<LoginFormData>({
    // mode: "onChange",
    resolver: zodResolver(LoginFormDataSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const signupMethods = useForm<SignupData>({
    // mode: "onChange",
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  const onSubmit = async (data: LoginFormData) => {
    console.log(data)
    handleSubmit(data)
  }
  function handleSubmit(loginFormData: LoginFormData) {
    console.log(loginFormData)
    signin(loginFormData)
  }

  const signin = async (loginFormData: { email: string; password: string }) => {
    setIsSubmitting(true)
    try {
      const response = await axios.post(`${baseURL}/users/login`, loginFormData)

      if (response.data.access_token) {
        const userData = {
          accessToken: response.data.access_token,
          user: {
            name: response.data.name,
            email: response.data.email,
          },
        }
        // console.log(userData, "<<-- after login")

        loginSucess()
        dispatch(fetchUser({ ...userData }))
        navigate("/", { replace: true })
      }
    } catch (err) {
      console.log(err)
      loginError()
    } finally {
      setIsSubmitting(false)
    }
  }

  const onSubmitSignup = async (data: SignupData) => {
    console.log(data)
    handleSignup(data)
  }
  function handleSignup(signupFormData: SignupData) {
    console.log(signupFormData)
    signup(signupFormData)
  }
  const signup = async (signupFormData: {
    email: string
    password: string
    confirmPassword: string
  }) => {
    console.log(signupFormData, "<<-- signup ")
    setIsSubmitting(true)
    try {
      const response = await axios.post(
        `${baseURL}/users/signup`,
        signupFormData
      )

      if (response.data.access_token) {
        const userData = {
          accessToken: response.data.access_token,
          user: {
            name: response.data.name,
            email: response.data.email,
          },
        }
        // console.log(userData, "<<-- after login")
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`
        signupSucess()
        dispatch(fetchUser({ ...userData }))
        navigate("/", { replace: true })
      }
    } catch (err) {
      console.log(err)
      signupError()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900 font-poppins ">
      <div className="border flex-1 h-full max-w-2xl mx-auto overflow-hidden bg-white shadow-xl dark:bg-gray-800 rounded-lg ">
        <div className="mt-10 w-28 md:w-40 mx-auto">
          <img src={images.FT} className="w-full  my-2 " alt="Future Tayari" />
        </div>
        <div className="flex flex-col md:flex justify-between">
          <div className="flex flex-col overflow-y-auto md:flex-row ">
            <div className="flex items-center justify-center p-6 sm:p-12  mx-auto w-full">
              <div className="w-full">
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                    <h1 className="flex mb-4 text-base capitalize font-semibold text-gray-700 dark:text-gray-200 justify-center">
                      Sign in to your account
                    </h1>
                    <label className="block text-sm">
                      <span className="text-gray-700 dark:text-gray-400  text-lg">
                        Email
                      </span>
                      <input
                        className="border-b-[1px] block w-full mt-1 text-lg dark:border-gray-600 dark:bg-gray-700 focus:border-yellow-400 focus:outline-none focus:shadow-outline-yellow dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                        {...methods.register("email")}
                        placeholder="email@example.com"
                      />
                      <div className="h-4">
                        {methods.formState.errors.email?.message && (
                          <span className="text-xs text-red-600">
                            {methods.formState.errors.email?.message}
                          </span>
                        )}
                      </div>
                    </label>
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400 text-lg">
                        Password
                      </span>
                      <input
                        className="border-b-[1px] block w-full mt-1 text-lg dark:border-gray-600 dark:bg-gray-700 focus:border-yellow-400 focus:outline-none focus:shadow-outline-yellow dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                        placeholder="***************"
                        type="password"
                        {...methods.register("password")}
                      />
                      <div className="h-4">
                        {methods.formState.errors.password?.message && (
                          <span className="text-xs text-red-600">
                            {methods.formState.errors.password?.message}
                          </span>
                        )}
                      </div>
                    </label>

                    {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
                    <button
                      type="submit"
                      className="rounded-full block w-full h-12 mt-4 text-md font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#FDC80C] border border-transparent active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow"
                      // href="../index.html"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <CircularProgress className="p-1" color="inherit" />
                      ) : (
                        <>Log in</>
                      )}
                    </button>
                  </form>
                </FormProvider>

                {/* <p className="mt-4">
                <a
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  href="./forgot-password.html"
                >
                  Forgot your password?
                </a>
              </p> */}
              </div>
            </div>
          </div>
          <p className="items-center justify-center flex text-2xl">Or</p>
          <div className="flex flex-col overflow-y-auto md:flex-row ">
            <div className="flex items-center justify-center p-6 sm:p-12  mx-auto w-full">
              <div className="w-full">
                <FormProvider {...signupMethods}>
                  <form
                    onSubmit={signupMethods.handleSubmit(onSubmitSignup)}
                    noValidate
                  >
                    <h1 className="flex mb-4 text-base capitalize font-semibold text-gray-700 dark:text-gray-200 justify-center">
                      Sign up for your account
                    </h1>
                    <label className="block text-sm">
                      <span className="text-gray-700 dark:text-gray-400  text-lg">
                        Name
                      </span>
                      <input
                        className="border-b-[1px] block w-full mt-1 text-lg dark:border-gray-600 dark:bg-gray-700 focus:border-yellow-400 focus:outline-none focus:shadow-outline-yellow dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                        {...signupMethods.register("name")}
                        placeholder="John"
                      />
                      <div className="h-4">
                        {signupMethods.formState.errors.name?.message && (
                          <span className="text-xs text-red-600">
                            {signupMethods.formState.errors.name?.message}
                          </span>
                        )}
                      </div>
                    </label>
                    <label className="block text-sm">
                      <span className="text-gray-700 dark:text-gray-400  text-lg">
                        Email
                      </span>
                      <input
                        className="border-b-[1px] block w-full mt-1 text-lg dark:border-gray-600 dark:bg-gray-700 focus:border-yellow-400 focus:outline-none focus:shadow-outline-yellow dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                        {...signupMethods.register("email")}
                        placeholder="email@example.com"
                      />
                      <div className="h-4">
                        {signupMethods.formState.errors.email?.message && (
                          <span className="text-xs text-red-600">
                            {signupMethods.formState.errors.email?.message}
                          </span>
                        )}
                      </div>
                    </label>
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400 text-lg">
                        Password
                      </span>
                      <input
                        className="border-b-[1px] block w-full mt-1 text-lg dark:border-gray-600 dark:bg-gray-700 focus:border-yellow-400 focus:outline-none focus:shadow-outline-yellow dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                        placeholder="***************"
                        type="password"
                        {...signupMethods.register("password")}
                      />
                      <div className="h-4">
                        {signupMethods.formState.errors.password?.message && (
                          <span className="text-xs text-red-600">
                            {signupMethods.formState.errors.password?.message}
                          </span>
                        )}
                      </div>
                    </label>
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400 text-lg">
                        Confirm Password
                      </span>
                      <input
                        className="border-b-[1px] block w-full mt-1 text-lg dark:border-gray-600 dark:bg-gray-700 focus:border-yellow-400 focus:outline-none focus:shadow-outline-yellow dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                        placeholder="***************"
                        type="password"
                        {...signupMethods.register("confirmPassword")}
                      />
                      <div className="h-4">
                        {signupMethods.formState.errors.confirmPassword
                          ?.message && (
                          <span className="text-xs text-red-600">
                            {
                              signupMethods.formState.errors.confirmPassword
                                ?.message
                            }
                          </span>
                        )}
                      </div>
                    </label>

                    {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
                    <button
                      type="submit"
                      className="rounded-full block w-full h-12 mt-4 text-md font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#FDC80C] border border-transparent active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow"
                      // href="../index.html"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <CircularProgress className="p-1" color="inherit" />
                      ) : (
                        <>Sign up</>
                      )}
                    </button>
                  </form>
                </FormProvider>

                {/* <p className="mt-4">
                <a
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  href="./forgot-password.html"
                >
                  Forgot your password?
                </a>
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
