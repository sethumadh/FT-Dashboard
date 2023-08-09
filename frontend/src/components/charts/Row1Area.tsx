import React, { useMemo } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useGetKpisQuery } from "../../redux/services/servicesApiSlice"


const AreaChart = () => {
  const { data, isLoading, isError } = useGetKpisQuery()
  console.log(data)

  const month = useMemo(() => {
    return data && data[0].monthlyData.map(({ month }) => month.substring(0, 3))
  }, [data])
  //   const plotLines = useMemo(() => {
  //     let value = -0.5
  //     return (
  //       data &&
  //       data[0].monthlyData.map(({ month }) => {
  //         value += 1
  //         return {
  //           color: "gray",
  //           width: 1,
  //           value: value, // January
  //           zIndex: 5,
  //         }
  //       })
  //     )
  //   }, [data])
  const revenue = useMemo(() => {
    return data && data[0].monthlyData.map(({ revenue }) => revenue)
  }, [data])
  const expenses = useMemo(() => {
    return data && data[0].monthlyData.map(({ expenses }) => expenses)
  }, [data])

  const options = {
    chart: {
      type: "area",
      height: 300,
      //   width:900,
      backgroundColor: "#2d2d34", // Set the background color to black
    },
    title: {
      text: null,
      style: {
        color: "white", // Set the title text color to white
      },
    },
    subtitle: {
      text: null,
      style: {
        color: "white",
      },
    },
    xAxis: {
      categories: month,

      labels: {
        style: {
          color: "white", // Set the x-axis labels text color to white
        },
      },
    },
    yAxis: {
      title: {
        text: null,
        style: {
          color: "white", // Set the y-axis title text color to white
        },
      },
      labels: {
        style: {
          color: "white", // Set the y-axis labels text color to white
        },
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      area: {
        lineWidth: 0,
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, // Apply a linear gradient
          stops: [
            [0, "#00FF00"], // Start color (top) - dark green
            [1, "rgba(0, 68, 0, 0)"], // End color (bottom) - transparent
          ],
        },
        marker: {
          enabled: true, // Disable the markers on the area chart
        },
      },
    },
    series: [
      {
        name: "amount in $",
        data: revenue,
        pointPlacement: "on",
      },
      {
        name: "amount in $",
        data: expenses,
        pointPlacement: "on",
      },
    ],
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default AreaChart
