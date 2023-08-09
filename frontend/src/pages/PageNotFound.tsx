import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <main className="pb-16 overflow-y-auto border h-screen flex justify-center items-center">
      <div className="container flex flex-col items-center px-6 mx-auto pb-72">
        <svg
          className="w-12 h-12 mt-8 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
          404
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Page not found. Check the address or
          <Link
            className="text-blue-500 hover:underline dark:text-yellow-300 px-2"
            to={"/"}
          >
            go back
          </Link>.
        </p>
      </div>
    </main>
  )
}

export default PageNotFound
