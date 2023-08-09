//  Date Formatter

import { toast } from "react-hot-toast"

export const dateFormat = (dateString: any) => {
  const date = new Date(dateString)

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return formattedDate
}

// *******************************************************//

//  To calculate Progress of an entire course

export const progressFun = (course: any) => {
  let completedContent = 0
  let totalContent = 0
  course?.completedChapters?.forEach((ce: { completedContent: any[] }) => {
    totalContent += ((ce && ce?.completedContent) || []).length
    completedContent += (
      (ce &&
        ce?.completedContent.filter(
          (idx: { isCompleted: any }) => idx.isCompleted
        )) ||
      []
    ).length
  })
  const progress = Math.ceil((completedContent / totalContent) * 100 || 0)

  return progress
}

// *******************************************************//

//  calculate course progress for a single student

export const progressStudent = (courses: any) => {
  let completedContent = 0
  let totalContent = 0
  courses?.forEach((course: any) =>
    course?.completedChapters?.forEach((ce: { completedContent: any[] }) => {
      totalContent += ((ce && ce?.completedContent) || []).length
      completedContent += (
        (ce &&
          ce?.completedContent.filter(
            (idx: { isCompleted: any }) => idx.isCompleted
          )) ||
        []
      ).length
    })
  )
  const progress = Math.ceil((completedContent / totalContent) * 100 || 0)
  // console.log(progress, "totals")

  return progress
}
// *******************************************************//
// calculte total , completed , in progress

export const ProgressCard = (courses: any) => {
  let completedContent = 0
  let totalContent = 0
  courses?.forEach((course: any) =>
    course?.completedChapters?.forEach((ce: { completedContent: any[] }) => {
      totalContent += ((ce && ce?.completedContent) || []).length
      completedContent += (
        (ce &&
          ce?.completedContent.filter(
            (idx: { isCompleted: any }) => idx.isCompleted
          )) ||
        []
      ).length
    })
  )
  const remaining = totalContent - completedContent

  // console.log(progress, "totals")

  return { progressCard: { totalContent, completedContent, remaining } }
}
// *******************************************************//

//  To calculate progress of each chapter

export const progressChp = (cmpCnt: any) => {
  // console.log(cmpCnt, "<<passes")

  const completedContent = (
    (cmpCnt && cmpCnt?.filter((idx: any) => idx.isCompleted)) ||
    []
  ).length
  const totalContent = cmpCnt?.length

  // console.log(completedContent, "<<--")

  const progress = Math.ceil((completedContent / totalContent) * 100 || 0)

  return progress
}

// *******************************************************//
// Logout function



export const logoutSuccess = () =>
  toast.success("Succesfully logged out !")
// *******************************************************//
// login logout success

export const loginError = () =>
  toast.error("Email or Password is incorrect")
export const loginSucess = () =>
  toast.success("Succesfully Logged in")
// *******************************************************//
// *******************Signup ************************************//
export const signupSucess = () =>
  toast.success("Succesfully Signed up in. You are logged in!")
export const signupError = () =>
  toast.error("Something went wrong. Please try again!")
// *******************Signup ************************************//
  