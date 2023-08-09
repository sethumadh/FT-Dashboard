import { useGetKpisQuery, useGetProductsQuery } from "../../redux/services/servicesApiSlice"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"


import { useMemo } from "react"

const Row2Line = () => {
  const { data: operationalData } = useGetKpisQuery()
  const { data: productData } = useGetProductsQuery()
  const month = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(({ month }) => month.substring(0, 3))
    )
  }, [operationalData])

  const opData = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ operationalExpenses }) => operationalExpenses
      )
    )
  }, [operationalData])

  const nonOpData = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ nonOperationalExpenses }) => nonOperationalExpenses
      )
    )
  }, [operationalData])

  const options = {
    chart: {
      type: "line",
      height: 220,
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
        name: "Operational Expenses in $",
        data: opData,
        yAxis: 0,
        color: "red",
      },
      {
        name: "Non Operational Expenses in $",
        data: nonOpData,
        yAxis: 1,
      },
    ],
  }

  return (
    <div style={{ padding: "8px" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Row2Line
