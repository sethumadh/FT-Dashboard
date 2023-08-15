import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useGetProductsQuery } from "../../redux/services/servicesApiSlice"
import { persistor, useAppSelector, useAppDispatch } from "../../redux/store"
import { logoutSuccess } from "../../helper/functions/functions"
import useAxiosInstance from "../../hooks/useAxiosInstance"
import { useNavigate } from "react-router-dom"

const Row2Scatter = () => {
  const { axiosInstance } = useAxiosInstance()
  const navigate = useNavigate()
  const { data: productData, isError } = useGetProductsQuery()
  const price = productData && productData.map(({ price }) => price)
  const expense = productData && productData.map(({ expense }) => expense)
  const options = {
    chart: {
      type: "scatter",
      height: 250,
      backgroundColor: "#2d2d34",
    },
    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      labels: {
        style: {
          color: "white", // Set the color of the x-axis labels to white
        },
      },
      title: {
        text: null,
        style: {
          color: "white", // Set the color of y-axis title to green
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: "white", // Set the color of the x-axis labels to white
        },
      },
      title: {
        text: null,
        style: {
          color: "white", // Set the color of y-axis title to green
        },
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Data",
        data: price?.map((value, index) => (expense && expense[index], value)),
        color: "white",
      },
    ],
  }
  const handleLogout = async () => {
    try {
      persistor.purge()
      logoutSuccess()
      navigate("/login")
      const response = await axiosInstance.post(`/api/users/logout`)
      console.log(response)
    } catch (err) {
      // console.log(err)
      navigate("/login")
    }
  }
  if (isError) {
    handleLogout()
  }
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Row2Scatter
