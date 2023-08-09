import React, { useMemo } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"


import { useTheme } from "@mui/material"
import { useGetKpisQuery } from "../../redux/services/servicesApiSlice"

const Row1Column = () => {
  const { data, isLoading, isError } = useGetKpisQuery()
  const { palette } = useTheme()
  const month = useMemo(() => {
    return data && data[0].monthlyData.map(({ month }) => month.substring(0, 3))
  }, [data])
  const revenue = useMemo(() => {
    return data && data[0].monthlyData.map(({ revenue }) => revenue)
  }, [data])
  const options = {
    chart: {
      type: "column",
      height: 180,
      //   width:350,
      backgroundColor: "#2d2d34",
      credits: {
        enabled: false,
      },
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: month,
      labels: {
        style: {
          color: "white", // Set the color of the x-axis labels to white
        },
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },

    yAxis: {
      labels: {
        style: {
          color: "white", // Set the color of the x-axis labels to white
        },
      },
      title: {
        text: null,
      },
    },
    series: [
      {
        name: "Revenue in $",
        data: revenue,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#00FF00"],
            [1, "rgba(0, 68, 0, 0)"],
          ],
        },
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Row1Column
