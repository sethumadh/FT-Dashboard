import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

import { ExpensesByCategory } from "../../redux/types"
import { useGetKpisQuery } from "../../redux/services/servicesApiSlice"
import { logoutSuccess } from "../../helper/functions/functions"
import useAxiosInstance from "../../hooks/useAxiosInstance"
import { useNavigate } from "react-router-dom"
import { persistor, useAppSelector, useAppDispatch } from "../../redux/store"

const TablePie = () => {
  const { axiosInstance } = useAxiosInstance()
  const navigate = useNavigate()
  const { data: kpiData , isError} = useGetKpisQuery()
  //   const totalExp = kpiData && kpiData[0].totalExpenses
  const categories = kpiData && Object.keys(kpiData[0].expensesByCategory)

  const chartData =
    kpiData &&
    categories?.map((cat: string) => {
      return {
        name: cat,
        y: kpiData[0].expensesByCategory[cat as keyof ExpensesByCategory],
      }
    })

  const options = {
    chart: {
      type: "pie",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: 200,
      //   width:300,
      backgroundColor: "#2d2d34",
    },
    title: {
      text: null,
      style: {
        color: "#ffffff",
      },
    },
    plotOptions: {
      pie: {
        innerSize: "80%",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Categories",
        colorByPoint: true,
        data: chartData,
      },
    ],
  }
  const handleLogout = async () => {
    try {
      persistor.purge()
      // logoutSuccess()
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
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default TablePie
