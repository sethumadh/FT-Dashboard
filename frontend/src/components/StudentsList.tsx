import { Fragment, useCallback, useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { Link } from "react-router-dom"
import useMeasure from "react-use-measure"
import { z } from "zod"

import { ShimmerTable } from "react-shimmer-effects-18"

import { Card } from "@material-tailwind/react"
import { Searchbar } from "../components"
import { icons } from "../constant"
import { dateFormat } from "../helper/functions/functions"
import { StudentListSchema } from "../helper/zodSchema"
import { useAppSelector } from "../redux/store"
// import Searchbar from "./Searchbar"
// import Skeleton from "./Skeleton"

const StudentsList = () => {
  const [ref] = useMeasure()
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("")
  const listOfStudents = useAppSelector(
    (state) => state.studentList.studentsList
  )

  const [searchData, setSearchData] = useState<
    z.infer<typeof StudentListSchema>
  >([])

  // client side pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(10)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const nPages = Math.ceil(searchData?.length / recordsPerPage)
  const studentsPerPage = searchData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  )
  // console.log(bounds.height, "<<width")
  const handleLoading = useCallback(
    (bool: boolean) => {
      setIsLoading(bool)
    },
    [isLoading]
  )

  const handleSearch = useCallback(
    (term: string) => {
      setQuery(term)
    },
    [setQuery]
  )

  useEffect(() => {
    const data = listOfStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query)
    )
    setSearchData(data)
    setCurrentPage(1)
  }, [query, listOfStudents])

  //  search students and update

  const handlePageChange = (page: { selected: number }) => {
    const currentPage = page.selected
    setCurrentPage(currentPage + 1)
  }

  return (
    <Card className="p-5 m-5 relative overflow-x-auto">
      <div className="mt-4">
        <div className="flex flex-col space-y-2 md:space-y-0 items-start md:flex md:flex-row md:space-x-5 space-x-0 md:justify-start md:items-end">
          <h1 className="text-xl md:text-3xl font-semibold mb-4 md:mb-0 uppercase">
            Students List
          </h1>
          <div className="w-full md:w-1/3 ">
            <Searchbar
              handleSearch={handleSearch}
              handleLoading={handleLoading}
              isLoading={isLoading}
            />
          </div>
        </div>
        {isLoading ? (
          <ShimmerTable row={4} col={4} />
        ) : (
          // <Skeleton />
          <>
            <table className="mt-10 md:w-full table-auto" ref={ref}>
              <thead className="shadow-sm h-8">
                <tr>
                  <th className=" uppercase px-4 py-2 text-left text-sm md:text-lg font-normal md:font-semibold text-white bg-[#2E8CFF]">
                    Name
                  </th>
                  <th className="uppercase md:flex px-4 py-2 text-left text-sm md:text-lg font-normal md:font-semibold  text-white bg-[#2E8CFF]">
                    Email
                  </th>

                  <th className="uppercase px-4 py-2 text-left text-sm md:text-lg font-normal md:font-semibold  text-white bg-[#2E8CFF]">
                    Enrolled On
                  </th>
                  <th className="uppercase px-4 py-2 text-center text-sm md:text-lg font-normal md:font-semibold  text-white bg-[#2E8CFF]">
                    Action
                  </th>
                </tr>
              </thead>
              {/*  FIx the api call here. The vendor/ partner ID is required to get the details of the students.  */}

              {studentsPerPage.length === 0 && (
                <div className="w-full ">No records found</div>
              )}
              <tbody className="border-collapse">
                {studentsPerPage?.map((student, index) => (
                  <Fragment key={index}>
                    <tr
                      key={index}
                      className="shadow-sm even:bg-[#F8F6F4] odd:bg-white-100"
                    >
                      <td className=" truncate px-4 py-4 text-left text-sm font-normal md:font-semibold">
                        {student.name}
                      </td>
                      <td className=" md:flex  truncate px-4 py-4 text-left text-sm font-normal md:font-semibold">
                        {student.email}
                      </td>
                      <td className=" truncate px-4 py-4 text-left text-sm font-normal md:font-semibold">
                        {`${dateFormat(student.createdAt)}`}
                      </td>

                      <td className=" truncate px-4 py-4 text-center text-sm font-normal md:font-semibold hover:text-blue-500">
                        {student.isActive && (
                          <Link
                            className="text-blue-400 px-3 py-3 rounded cursor-pointer text-sm font-normal"
                            to={`/student_detail/${student._id}`}
                          >
                            View More{" "}
                            <icons.ArrowCircleRightIcon
                            // style={{ width: "10px", height: "100%" }}
                            />
                          </Link>
                        )}
                        {!student.isActive && (
                          <button
                            className="text-red-400 px-3 py-3 rounded cursor-not-allowed text-sm font-normal"
                            disabled
                          >
                            Inactive
                          </button>
                        )}
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </>
        )}

        <div className="flex justify-center text-xs mt-4">
          <ReactPaginate
            breakLabel={<span className="mr-4">...</span>}
            previousLabel={
              <span className="text-andisor-blue">
                <icons.ChevronLeftIcon style={{ width: "30px" }} />
              </span>
            }
            nextLabel={
              <span className="text-andisor-blue">
                <icons.ChevronRightIcon style={{ width: "30px" }} />
              </span>
            }
            pageCount={nPages}
            forcePage={currentPage - 1}
            marginPagesDisplayed={3}
            pageRangeDisplayed={3}
            activeClassName="bg-slate-300 "
            containerClassName="flex items-center justify-center"
            pageClassName="border border-[1px] mr-3 rounded-full px-3 py-2 text-sm bg-blue-400 hover:bg-[#2E8CFF] text-white  cursor-pointer"
            onPageChange={handlePageChange}
          />
          {/* <div>{JSON.stringify(pageNumber, null, 2)}</div> */}
        </div>
      </div>
    </Card>
  )
}

export default StudentsList
