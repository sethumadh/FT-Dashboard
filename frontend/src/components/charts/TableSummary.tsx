import React, { useEffect, useRef } from "react"
import Highcharts from "highcharts"
import { useGetKpisQuery } from "../../redux/services/servicesApiSlice"


const TableSummary = () => {
  const { data: kpiData } = useGetKpisQuery()
  const chartContainerRef = useRef(null)

  useEffect(() => {
    if (chartContainerRef.current && kpiData) {
      const totalExp = kpiData[0].totalExpenses
      const profit = kpiData[0].totalProfit
      const revenue = kpiData[0].totalRevenue
      const chartData = [revenue, totalExp, profit]

      Highcharts.chart(chartContainerRef.current, {
        chart: {
          type: "bar",
          height: 250,
          backgroundColor: "#2d2d34",
        },
        title: {
          text: "",
        },
        xAxis: {
          categories: ["Revenue", "Expenses", "Profit"],
          labels: {
            style: {
              color: "white",
            },
          },
        },
        yAxis: {
          title: {
            text: "Amount",
            style: {
              color: "white",
            },
          },
          labels: {
            style: {
              color: "white",
            },
          },
        },
        legend: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        series: [{ type: "bar", name: "Fruit", data: chartData }],
      })
    }
  }, [kpiData])

  return (
    <div style={{ padding: "10px" }}>
      <div ref={chartContainerRef} />
    </div>
  )
}

export default TableSummary
