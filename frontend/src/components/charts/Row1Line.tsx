import { useGetKpisQuery } from "../../redux/services/servicesApiSlice"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"


import { useMemo } from "react"

const Row2Line = () => {
  const { data, isLoading, isError } = useGetKpisQuery()
  const month = useMemo(() => {
    return data && data[0].monthlyData.map(({ month }) => month.substring(0, 3))
  }, [data])
  const revenue = useMemo(() => {
    return data && data[0].monthlyData.map(({ revenue }) => revenue)
  }, [data])

  const profit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ revenue, expenses }) =>
        parseFloat((revenue - expenses).toFixed(2))
      )
    )
  }, [data])

  const options = {
    chart: {
      type: "line",
      height: 300,
      // width:4 00,
      backgroundColor: "#2d2d34",
      credits: {
        enabled: false,
      },
    },
    title: {
      text: null,
    },
    legend: {
      enabled: true,
      itemStyle: {
        color: "white", // Set the color of the legend text names to white
      },
    },
    xAxis: {
      categories: month,
      labels: {
        style: {
          color: "white", // Set the color of the x-axis labels to white
        },
      },
    },
    credits: {
      enabled: false,
    },
    yAxis: [
      {
        labels: {
          style: {
            color: "white", // Set the color of the labels on the primary y-axis to red
          },
        },
        title: {
          text: null,
          style: {
            color: "white", // Set the color of the y-axis labels to white
          },
        },
      },
      {
        labels: {
          style: {
            color: "white", // Set the color of the labels on the primary y-axis to red
          },
        },
        title: {
          text: null,
        },
        opposite: true,
      },
    ],

    series: [
      {
        name: "Revenue in $",
        data: revenue,
        yAxis: 0,
        color: "red",
      },
      {
        name: "Profit in $",
        data: profit,
        yAxis: 1,
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Row2Line
