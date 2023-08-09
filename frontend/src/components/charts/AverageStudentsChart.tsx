import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useAppSelector } from "../../redux/store"

const AverageStudentsChart = () => {
  const listOfStudents = useAppSelector(
    (state) => state.studentList.studentsList
  )
  const options = {
    chart: {
      type: "column",
      height: 400,
      // width:900
    },
    title: {
      text: null,
      // text: "Monthly Margins",
      // align: "left",
      // x: 10,
      // style: {
      //   color: "#4B5563",
      //   fontSize: "14px",
      //   fontWeight: "bold",
      // },
    },
    // subtitle: {
    //   text: `${selectedOption?.label}`,
    //   useHTML: true,
    //   style: {
    //     color: "#6B7280",
    //     fontSize: "14px",
    //   },
    // },
    xAxis: {
      title: {
        text: "Category",
        style: {
          color: "#4B5563",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: "Students",
        style: {
          color: "#4B5563",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      //   min: 0,
      //   max: 10,
    },
    series: [
      {
        name: "Students",
        data: [2, 0, 1, 1, 0, 1, 2, 0, 0, 0, 1, 3],
      },
    ],
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        pointPadding: 0.1, // set the padding between each column
        groupPadding: 0.1, // set the padding between each group of columns
      },
    },
  }

  return (
    <div className="rounded-md bg-white shadow-md -z-100">
      <div className="flex items-center justify-between px-2">
        <h1 className="text-xl font-semibold mb-4">
          Number of Students enrolled
        </h1>
      </div>
      <div className="">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          updateArgs={[true]}
        />
      </div>
    </div>
  )
}

export default AverageStudentsChart
