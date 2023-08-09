import { zodResolver } from "@hookform/resolvers/zod"
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Fragment, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { ChangePasswordSchema } from "../helper/zodSchema"
import { CircularProgress } from "@mui/material"
import { toast } from "react-hot-toast"

import Icon from "../components/Icon"
import { persistor, useAppSelector } from "../redux/store"
import useAxiosInstance from "../hooks/useAxiosInstance"

const ChangePassword = () => {
  const { axiosInstance } = useAxiosInstance()
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user)
  const [open, setOpen] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const baseURL = "http://localhost:1337"
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value)
  }
  const handleLogout = () => {
    persistor.purge()
    navigate("/login")
  }

  type ChangePassworData = z.infer<typeof ChangePasswordSchema>
  const methods = useForm<ChangePassworData>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })
  const onSubmit = async (data: ChangePassworData) => {
    console.log(data)
    handleSubmit(data)
  }
  function handleSubmit(changePasswordData: ChangePassworData) {
    console.log(changePasswordData)
    changePassword(changePasswordData)
  }
  const changePassword = async (changePasswordData: {
    confirmPassword: string
    password: string
  }) => {
    try {
      setIsSubmitting(true)
      // const response = await axios.post(
      //   `${baseURL}/users/update/${user.user.email}`,
      //   changePasswordData,
      //   {
      //     headers: {
      //       Accept: "application/json",
      //       Authorization: `Bearer ${user.accessToken}`,
      //     },
      //   }
      // )
      const response = axiosInstance.post(
        `/users/update/${user.user.email}`,
        changePasswordData
      )
      console.log(response, "<<<<---- response")
      toast.success("Password updated successfully Please login again!")
      handleLogout()
    } catch (err) {
      console.log(err)
      toast.error("Failed to update password")
    } finally {
      setIsSubmitting(false)
    }
  }
  console.log(user)
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 font-poppins">
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-2 uppercase"
            >
              Name : {user.user.name}
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-2 uppercase"
            >
              Email : {user.user.email}
            </Typography>
            {/* <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography> */}
          </CardBody>
          <CardFooter className="pt-0">
            {/* <Button>Read More</Button> */}
            <div className="flex-1 items-center justify-center h-full max-w-xl mx-auto overflow-hidden bg-white  dark:bg-gray-800">
              <div className="flex flex-col overflow-y-auto md:flex-row">
                <div className="flex items-center justify-center w-full max-w-sm">
                  <div className="w-full">
                    <FormProvider {...methods}>
                      <Fragment>
                        <Accordion
                          open={open === 1}
                          icon={<Icon id={1} open={open} />}
                        >
                          <AccordionHeader onClick={() => handleOpen(1)}>
                            <h1 className="text-md uppercase">
                              Change Password
                            </h1>
                          </AccordionHeader>
                          <AccordionBody>
                            <form
                              onSubmit={methods.handleSubmit(onSubmit)}
                              noValidate
                            >
                              <label className="block mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">
                                  Password
                                </span>
                                <input
                                  type="password"
                                  className="border-b-[1px] block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-yellow-400 focus:outline-none focus:shadow-outline-yellow dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                  placeholder="***************"
                                  {...methods.register("password")}
                                />
                                <div className="h-4">
                                  {methods.formState.errors.password
                                    ?.message && (
                                    <span className="text-xs text-red-600">
                                      {
                                        methods.formState.errors.password
                                          ?.message
                                      }
                                    </span>
                                  )}
                                </div>
                              </label>
                              <label className="block mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">
                                  Confirm password
                                </span>
                                <input
                                  className="border-b-[1px] block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-yellow-400 focus:outline-none focus:shadow-outline-yellow dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                  placeholder="***************"
                                  {...methods.register("confirmPassword")}
                                  // type='password'
                                />
                                <div className="h-4">
                                  {methods.formState.errors.confirmPassword
                                    ?.message && (
                                    <span className="text-xs text-red-600">
                                      {
                                        methods.formState.errors.confirmPassword
                                          ?.message
                                      }
                                    </span>
                                  )}
                                </div>
                              </label>

                              {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
                              <button
                                className="rounded-full block w-full h-12 mt-12 text-lg font-extrabold leading-5 text-center text-white transition-colors duration-150 bg-[#FDC80C] border border-transparent active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <CircularProgress
                                    className="p-1"
                                    color="inherit"
                                  />
                                ) : (
                                  <>Update</>
                                )}
                              </button>
                            </form>
                          </AccordionBody>
                        </Accordion>
                      </Fragment>
                    </FormProvider>
                  </div>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default ChangePassword
