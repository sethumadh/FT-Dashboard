import CloseIcon from "@mui/icons-material/Close"
import { useModal } from "../hooks/useModal"
import Modal from "./Modal"
import { StudentsDataProps } from "mockData/studentData"
import ProgressCircleChart from "./ProgressCircleChart"

type StudentDetailModalProps = {
  modal: ReturnType<typeof useModal>
  student: StudentsDataProps
}

const StudentDetailModal = ({ modal, student }: StudentDetailModalProps) => {
  return (
    <div>
      <Modal
        modal={modal}
        showBackdrop={true}
        maxWidth={"lg"}
        className="leading-7 h-[900px] top-[5%] rounded-xl border border-red-400 bg-white p-6 "
      >
        <button onClick={modal.closeModal} className="flex justify-end">
          <CloseIcon className="h-4 w-4 " />
        </button>

        <Modal.Title
          className={` w-full 
             py-8 px-10 text-xl font-semibold leading-7 shadow mb-4`}
        >
          <div className="flex justify-around">
            <div className="max-w-sm">
              <h1 className="leadin-7 text-lg">
                This is the student account for
                <span className="px-2 text-xl italic text-blue-400 leading-7">
                  {student.name}!
                </span>
              </h1>
              <p className="text-xs mt-8 font-normal">
                You can find the contact details and course progress for{" "}
                {student.name}
              </p>
            </div>
            <div className="w-20 h-20">
              <img
                className="w-full rounded-full"
                src="https://janus-qa2-dev-new.s3.amazonaws.com/assets/1597214458unnamed.png"
                alt={student.name}
              />
            </div>
          </div>
        </Modal.Title>
        <Modal.Description className={`flex justify-around shadow mb-4`}>
          <div className="w-2/3 py-4">
            <h1 className="text-xl font-semibold px-10">Personal Details</h1>
            <h2 className=" flex justify-around items-center font-semibold pt-3">
              <p className="w-20 text-left text-base">Email </p>{" "}
              <span className=" text-black rounded px-4 py-2  text-center">
                {student.name}@gmail.com
              </span>
            </h2>
            <h2 className=" flex justify-around items-center font-semibold pt-3">
              <p className="w-20 text-left">Contact </p>{" "}
              <span className=" text-black rounded px-4 py-2  text-center">
                {student.name}@gmail.com
              </span>
            </h2>
            <h2 className=" flex justify-around items-center font-semibold pt-3">
              <p className="w-20 text-left">City </p>{" "}
              <span className=" text-black rounded px-4 py-2  text-center">
                {student.name}@gmail.com
              </span>
            </h2>
            <h2 className=" flex justify-around items-center font-semibold pt-3">
              <p className="w-20 text-left">Gender </p>{" "}
              <span className=" text-black rounded px-4 py-2  text-center">
                {student.name}@gmail.com
              </span>
            </h2>
          </div>
          <div className="pt-12">
            <ProgressCircleChart progress={40} />
          </div>
        </Modal.Description>
        <Modal.Description className={`shadow`}>
          <div className=" py-4">
            <h1 className=" font-semibold text-xl px-12">Course Details</h1>
            <div className="w-full flex items-center justify-around pt-4">
              <h2 className=" flex justify-center space-x-48 items-center font-semibold">
                <p className="w-20 text-left">Course 1 </p>{" "}
                <span className=" text-black rounded px-4 py-2  text-center">
                  Course 1
                </span>
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <h1 className="text-xs">45%</h1>
              </div>
            </div>
            <div className="w-full flex items-center justify-around pt-4">
              <h2 className=" flex justify-center space-x-48 items-center font-semibold">
                <p className="w-20 text-left">Course 2 </p>{" "}
                <span className=" text-black rounded px-4 py-2  text-center">
                  Course 2
                </span>
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <h1 className="text-xs">45%</h1>
              </div>
            </div>
            <div className="w-full flex items-center justify-around pt-4">
              <h2 className=" flex justify-center space-x-48 items-center font-semibold">
                <p className="w-20 text-left">Course 3 </p>{" "}
                <span className=" text-black rounded px-4 py-2  text-center">
                  Course 3
                </span>
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <h1 className="text-xs">45%</h1>
              </div>
            </div>
          </div>
        </Modal.Description>
      </Modal>
    </div>
  )
}

export default StudentDetailModal
