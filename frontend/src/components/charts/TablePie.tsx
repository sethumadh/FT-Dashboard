import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

import { ExpensesByCategory } from "../../redux/types"
import { useGetKpisQuery } from "../../redux/services/servicesApiSlice"

const TablePie = () => {
  const { data: kpiData } = useGetKpisQuery()
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

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default TablePie
