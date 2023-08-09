import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ShimmerSectionHeader } from "react-shimmer-effects-18"
import { z } from "zod"
import {
  CircularProgressLabel,
  Icon,
  LoadingSpinner,
  ProgressCircleChart,
} from "../components"
import { icons } from "../constant"
import {
  ProgressCard,
  dateFormat,
  progressChp,
  progressFun,
  progressStudent,
} from "../helper/functions/functions"
import { CourseDetailsSchema, StudentDetailsSchema } from "../helper/zodSchema"
import { useAppSelector } from "../redux/store"

// import LoadingSpinner from "../components/LoadingSpinner"

const StudentDetail = () => {
  const [open, setOpen] = useState([0])
  const [view, setView] = useState(true)
  const [Aopen, setAOPen] = useState(0)
  const [student, setStudent] = useState<z.infer<typeof StudentDetailsSchema>>()
  const [course, setCourse] = useState<z.infer<typeof CourseDetailsSchema>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const params = useParams()
  const baseURL = "http://localhost:1337"
  const user = useAppSelector((state) => state.user)

  const handleOpen = (value: number) => {
    let arr: number[] = []
    if (open.includes(value)) {
      arr = open.filter((o) => o != value)
      setOpen(arr)
    } else {
      setOpen((prev) => [...prev, value])
    }
  }
  const handleAopen = (value: number) => {
    setAOPen(Aopen == value ? 0 : value)
  }
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setIsLoading(true)
        const data = await axios.get(
          `${baseURL}/student-course/${params.id}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
        console.log(data?.data, "<<<<< full data")
        const std = StudentDetailsSchema.parse(data?.data?.basicDetails)
        const ctd = CourseDetailsSchema.parse(data?.data.courses)
        console.log(std, "<<< course details`")

        setStudent(std)
        setCourse(ctd)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchStudent()
  }, [params.id, user.accessToken])
  // console.log(course, "<<---std")
  if (isLoading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <LoadingSpinner className="w-20 h-20" />
        <ShimmerSectionHeader center />
        <ShimmerSectionHeader center />
        <ShimmerSectionHeader center />
        <ShimmerSectionHeader center />
      </div>
    )
  }

  return (
    <>
      <div className="py-5 px-8 text-lg font-normal leading-7 font-mada max-w-7xl m-auto">
        <Link to={`/`}>
          <ArrowBackIosIcon /> Back{" "}
        </Link>
      </div>
      <div
        className={` w-full 
             py-4 md:px-8 text-xl font-semibold leading-7  max-w-7xl m-auto`}
      >
        <div></div>
        <div className=" px-2 py-6 rounded-xl shadow flex flex-col mx-auto  relative">
          <h1 className="text-xl font-semibold px-4 mx-5 uppercase">
            Overall Progress
          </h1>
          <div className="flex flex-col space-x-0 space-y-2 md:space-y-0 md:mb-2 min-w-max items-center justify-center md:justify-around md:items-center md:space-x-12 md:flex-row px-8 md:px-2 w-full pt-4"></div>
          <div className="flex flex-wrap-reverse justify-center text-white font-extrabold">

            <div className="bg-gradient-to-r from-orange-600  to-amber-400 flex m-8 md:mt-0 flex-col relative w-full max-w-sm items-center justify-center p-5  border rounded-3xl font-poppins shadow-lg text-base border-[#FBA11C]">
              <div className="flex items-center justify-between w-full text-lg">
                <div>
                  <ProgressCircleChart progress={progressStudent(course)} />
                </div>
                <div className="pt-1 flex flex-col w-full ">
                  <div className="flex justify-between px-2">
                    <h1 className=" w-full ">Chapters</h1>
                    {course.length == 0 && <p className="w-1/6">--</p>}
                    {course.length > 0 && (
                      <p className="w-1/6">
                        {ProgressCard(course).progressCard.totalContent < 10
                          ? "0" + ProgressCard(course).progressCard.totalContent
                          : ProgressCard(course).progressCard.totalContent}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between px-2">
                    <h1 className=" w-full ">Completed</h1>
                    {course.length == 0 && <p className="w-1/6">--</p>}
                    {course.length > 0 && (
                      <p className="w-1/6">
                        {" "}
                        {ProgressCard(course).progressCard.completedContent < 10
                          ? "0" +
                          ProgressCard(course).progressCard.completedContent
                          : ProgressCard(course).progressCard.completedContent}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between px-2">
                    <h1 className=" w-full ">Remaining</h1>
                    {course.length == 0 && <p className="w-1/6">--</p>}
                    {course.length > 0 && (
                      <p className="w-1/6">
                        {ProgressCard(course).progressCard.remaining < 0
                          ? "0" + ProgressCard(course).progressCard.remaining
                          : ProgressCard(course).progressCard.remaining}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-tl from-teal-800  to-blue-700 flex m-8 md:mt-0 flex-col relative w-full max-w-sm items-center justify-center p-5  border rounded-3xl font-poppins shadow-lg text-base">
              <div className="flex w-full">
                <div className="w-[60px]">
                  <icons.Person2TwoToneIcon
                    style={{ color: "white", width: "20px" }}
                  />
                </div>
                <div className="">{student?.name}</div>
              </div>

              <div className="flex w-full">
                <div className="w-[60px]">
                  <icons.PhoneForwardedTwoToneIcon
                    style={{ color: "white", width: "20px" }}
                  />
                </div>
                {!student?.mobileNumber ? <div className="">--</div> : <div className="">{student?.mobileNumber}</div>}

              </div>
              <div className="flex w-full ">
                <div className="w-[60px]">
                  <icons.AlternateEmailTwoToneIcon
                    style={{ color: "white", width: "20px" }}
                  />
                </div>

                <div className="">{student?.email}</div>
              </div>
              <div className="flex w-full ">
                <div className="w-[60px]">
                  <icons.PersonPinCircleIcon
                    style={{ color: "white", width: "20px" }}
                  />
                </div>
                {!student?.city ? <div className="">--</div> : <div className="">{student?.city}</div>}

              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600  to-purple-500 flex m-8 md:mt-0 flex-col relative w-full max-w-sm items-center justify-center p-5  border rounded-3xl font-poppins shadow-lg text-base">
              <div className="ml-2 flex w-full flex-col">
                <div className="">Courses Completed</div>
                <div className="mt-4 text-4xl">0 / 5</div>
              </div>
            </div>

            <div className="bg-gradient-to-l from-lime-600  to-green-400 flex m-8 md:mt-0 flex-col relative w-full max-w-sm items-center justify-center p-5  border rounded-3xl font-poppins shadow-lg text-base">
              <div className="ml-2 flex w-full flex-col">
                <div className="">Test Result</div>
                <div className="mt-4 text-xs"> to be announced **</div>
              </div>
            </div>

          </div>
        </div>

        <div className="">
          <h1 className="text-xl font-semibold py-8 px-4 mx-5 uppercase">
            Assigned Course Details
          </h1>
          {course.length === 0 && (
            <h1 className="text-center text-base font-normal">
              There are no assigned courses for this student.
            </h1>
          )}
          {/* container */}
          <div className="flex flex-col space-y-2 mx-5">
            {/* each course */}
            {course.length > 0 &&
              course.map((c, index) => (
                <Fragment key={index}>
                  <Accordion
                    open={Aopen === index + 1}
                    icon={<Icon id={index + 1} open={Aopen} />}
                  >
                    <div className="w-full px-4 py-2 shadow-lg border  rounded-xl  relative">
                      <h1 className=" text-sm text-gray-500 font-light absolute right-2">
                        <span className="text-red-400">*</span>Assigned on{" "}
                        <span>{dateFormat(c?.purchasedOn)}</span>
                      </h1>
                      <AccordionHeader onClick={() => handleAopen(index + 1)}>
                        <h1 className="text-lg font-bold md:text-xl capitalize py-2">
                          {c.course?.name}{" "}
                          {/* {c.course.offerText ? <span>{c.course.offerText}</span> : ""} */}
                        </h1>
                      </AccordionHeader>
                      {/* course progress tracker */}
                      <div className="w-full bg-blue-200 rounded-full dark:bg-neutral-600 ">
                        <div
                          className={`bg-blue-500  rounded-full p-1 text-center text-xs font-medium leading-none text-white`}
                          style={{ width: progressFun(c).toString() + "%" }}
                        >
                          {progressFun(c).toString() + "%"}
                        </div>
                      </div>
                      {/* chapters */}
                      <AccordionBody>
                        <div className="flex flex-col space-y-4 font-bold">
                          {c.completedChapters?.map((chp, i) => (
                            <div
                              key={i}
                              className={`rounded-xl ${chp.status == "COMPLETED"
                                  ? "bg-[#B3FFAE]"
                                  : chp.status == "INPROGRESS"
                                    ? "bg-[#F8FFDB]"
                                    : "bg-[#FF7D7D]"
                                }`}
                            >
                              <div className="text-base md:text-lg font-semibold px-4 py-2 relative">
                                <div className=" text-sm text-black-500 font-light absolute hidden sm:right-2 sm:flex gap-1 items-center">
                                  <div className="w-10 h-10 px-2">
                                    <icons.FcClock
                                      style={{ width: "100%", height: "100%" }}
                                    />
                                  </div>
                                  <span>{chp.timeRequired} min</span>
                                </div>
                                <div className="w-full font-normal flex flex-col items-center md:flex md:flex-row">
                                  <span className="w-24 underline underline-offset-4 md:no-underline">
                                    Chapter {i + 1}
                                  </span>
                                  <span className="hidden md:flex">:</span>
                                  <h1 className="px-2  font-normal ">
                                    {chp.name}
                                  </h1>
                                </div>
                              </div>
                              <div className="flex flex-col w-full mx-auto space-y-4 text-base px-4 py-2 ">
                                <div className="w-full flex flex-col items-center justify-center  space-y-4 md:space-y-0 md:flex md:flex-row md:justify-center md:space-x-4 space-x-0  ">
                                  <div className="flex items-center w-full ">
                                    <span className=" font-light w-1/3">
                                      Progress
                                    </span>
                                    <span className="font-light">
                                      :
                                    </span>
                                    <span className="px-4">
                                      <CircularProgressLabel
                                        value={progressChp(
                                          chp.completedContent
                                        )}
                                      />
                                    </span>
                                  </div>

                                  <h1 className="flex items-center space-x-4 font-light w-full">
                                    <span className="w-1/3">Started </span>:
                                    <span className="px-2">
                                      {chp.startTime
                                        ? dateFormat(chp.startTime)
                                        : "NA"}
                                    </span>
                                  </h1>
                                </div>
                                <div className="w-full flex flex-col space-y-4 md:space-y-0 md:flex md:flex-row md:justify-center md:space-x-4 space-x-0 ">
                                  {/*           w-full flex flex-col space-y-4 md:space-y-0 md:flex md:flex-row md:justify-center md:space-x-8 space-x-0 */}
                                  <h1 className="flex items-center space-x-4 font-light w-full">
                                    <span className=" font-light w-1/3 py-2">
                                      Status
                                    </span>
                                    :
                                    {chp.status == "COMPLETED" ? (
                                      <span className="pl-2">
                                        <span className="pr-2">completed</span>

                                        <icons.CheckCircleOutlineIcon
                                          style={{ color: "green" }}
                                        />
                                      </span>
                                    ) : chp.status == "INPROGRESS" ? (
                                      <span className="pl-2">
                                        In Progress
                                        <span
                                          className="
                                    pr-2"
                                        ></span>
                                        <icons.HourglassBottomIcon
                                          style={{ color: "#2979ff" }}
                                        />
                                      </span>
                                    ) : (
                                      <span className="pl-2">
                                        Not Started
                                        <span>
                                          <icons.PendingIcon
                                            style={{ color: "#2979ff" }}
                                          />
                                        </span>
                                      </span>
                                    )}
                                  </h1>
                                  <h1 className=" flex items-center space-x-4 font-light w-full">
                                    <span className=" font-light w-1/3">
                                      Completed
                                    </span>
                                    :
                                    <span className="px-2">
                                      {chp.startTime
                                        ? dateFormat(chp.completedTime)
                                        : "NA"}
                                    </span>
                                  </h1>
                                </div>

                                <h1 className="flex items-center space-x-4 font-light w-full sm:hidden">
                                  <span className="w-1/3 ">
                                    <icons.FcClock
                                      style={{ width: "32px", height: "32px" }}
                                    />
                                  </span>
                                  :
                                  <span className="pl-2">
                                    {chp.timeRequired} min
                                  </span>
                                </h1>
                              </div>

                              <h1
                                onClick={() => {
                                  setView(!view)
                                  handleOpen(
                                    parseInt(
                                      (index + 1).toString() +
                                      (i + 1).toString()
                                    )
                                  )
                                }}
                                className="text-xs font-semibold text-center px-2 py-2 cursor-pointer hover:scale-110 transition hover:duration-150 "
                              >
                                {!open.includes(
                                  parseInt(
                                    (index + 1).toString() + (i + 1).toString()
                                  )
                                ) ? (
                                  <p>
                                    <icons.ExpandMoreIcon /> View More
                                  </p>
                                ) : (
                                  <p>
                                    {" "}
                                    <icons.ExpandLessIcon /> View Less
                                  </p>
                                )}
                              </h1>

                              <Fragment>
                                <Accordion
                                  className="bg-white p-0"
                                  open={open.includes(
                                    parseInt(
                                      (index + 1).toString() +
                                      (i + 1).toString()
                                    )
                                  )}
                                >
                                  <AccordionBody>
                                    <div className=" rounded-2xl flex flex-col space-y-4">
                                      {chp.completedContent.map(
                                        (cnt, cntIndex) => (
                                          <div
                                            key={cntIndex}
                                            className={`flex flex-col space-y-1 shadow-lg relative ${cnt.status == "COMPLETED"
                                                ? "bg-[#B3FFAE]"
                                                : cnt.status == "STARTED"
                                                  ? "bg-[#F8FFDB]"
                                                  : "bg-[#FF7D7D]"
                                              }`}
                                          >
                                            <h1 className=" text-sm text-gray-500 font-light absolute right-2 top-2 hidden md:flex">
                                              {/* <span className="pr-2 text-xs">
                                          Type
                                        </span> */}

                                              <span>
                                                {cnt.type == "VIDEO" ? (
                                                  <icons.OndemandVideoIcon
                                                    style={{ color: "blue" }}
                                                  />
                                                ) : cnt.type == "PDF" ? (
                                                  <icons.PictureAsPdfIcon
                                                    style={{ color: "red" }}
                                                  />
                                                ) : (
                                                  <icons.QuizIcon
                                                    style={{ color: "blue" }}
                                                  />
                                                )}
                                              </span>
                                            </h1>
                                            <div className="px-4 py-2 font-normal flex text-base md:text-lg  capitalize ">
                                              <span className="w-24 text-base">
                                                Content {cntIndex + 1}
                                              </span>
                                              :
                                              <span className="font-normal px-2 text-base">
                                                {cnt.name}
                                              </span>
                                            </div>
                                            <div className=" flex flex-col w-full mx-auto space-y-4 text-base px-4">
                                              <div className="w-full flex flex-col items-center justify-center  space-y-4 md:space-y-0 md:flex md:flex-row md:justify-center md:space-x-4 space-x-0 ">
                                                <div className="flex items-center w-full  ">
                                                  <span className=" font-light w-1/3 text-base">
                                                    Status
                                                  </span>
                                                  :
                                                  <span className="capitalize px-4">
                                                    {cnt.status ==
                                                      "COMPLETED" ? (
                                                      <span className="">
                                                        <span className="pr-2">
                                                          completed
                                                        </span>

                                                        <icons.CheckCircleOutlineIcon
                                                          style={{
                                                            color: "green",
                                                          }}
                                                        />
                                                      </span>
                                                    ) : cnt.status ==
                                                      "STARTED" ? (
                                                      <span className="">
                                                        <span
                                                          className="
                                    pr-2"
                                                        >
                                                          In Progress
                                                        </span>
                                                        <icons.HourglassBottomIcon
                                                          style={{
                                                            color: "#2979ff",
                                                          }}
                                                        />
                                                      </span>
                                                    ) : (
                                                      <span className="pr-2">
                                                        Not Started
                                                        <span>
                                                          <icons.PendingIcon
                                                            style={{
                                                              color: "#2979ff",
                                                            }}
                                                          />
                                                        </span>
                                                      </span>
                                                    )}
                                                  </span>
                                                </div>
                                                <div className="flex items-center space-x-4 font-light w-full">
                                                  <span className="w-1/3 ">
                                                    <icons.FcClock
                                                      style={{
                                                        width: "32px",
                                                        height: "32px",
                                                      }}
                                                    />
                                                  </span>
                                                  :
                                                  <span className="">
                                                    {cnt.timeRequired} min
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="w-full flex flex-col items-center justify-center  space-y-4 md:space-y-0 md:flex md:flex-row md:justify-center md:space-x-4 space-x-0 ">
                                                <div className="flex items-center w-full  ">
                                                  <span className="pb-2  font-light w-1/3">
                                                    Started
                                                  </span>
                                                  :
                                                  <span className=" px-4">
                                                    {cnt.startTime
                                                      ? dateFormat(
                                                        cnt.startTime
                                                      )
                                                      : "NA"}
                                                  </span>
                                                </div>
                                                <div className="flex items-center w-full  ">
                                                  <span className=" pb-2 font-light w-1/3">
                                                    Completed
                                                  </span>
                                                  :
                                                  <span className="px-4">
                                                    {cnt.completedTime
                                                      ? dateFormat(
                                                        cnt.completedTime
                                                      )
                                                      : "NA"}
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="w-full flex flex-col items-center justify-center  space-y-4 md:space-y-0 md:flex md:flex-row md:justify-center md:space-x-4 space-x-0">
                                                <div className="flex items-center w-full  ">
                                                  <span className="pb-2  font-light w-1/3 flex ">
                                                    Type
                                                  </span>
                                                  :
                                                  <span className=" px-4">
                                                    {cnt.type}
                                                  </span>
                                                </div>
                                                <div className="flex items-center w-full ">
                                                  <span className="pb-2  font-light w-1/3">
                                                    Mandatory
                                                  </span>
                                                  :
                                                  <span className="px-4">
                                                    {cnt.isMandatory
                                                      ? "Yes"
                                                      : "No"}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </AccordionBody>
                                </Accordion>
                              </Fragment>
                            </div>
                          ))}
                        </div>
                      </AccordionBody>
                    </div>
                  </Accordion>
                </Fragment>
                // *****************************
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentDetail
