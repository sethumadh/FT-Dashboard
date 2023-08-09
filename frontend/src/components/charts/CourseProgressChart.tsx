import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import HighchartsMore from "highcharts/highcharts-more"

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts)
}

const options = {
  chart: {
    type: "gauge",
    height: 397,
    // width: 500,
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false,
  },
  title: {
    text: "Average Course Progress",
    align: "left",
    x: 20,
    // style: {
    //   color: "#4B5563",
    //   fontSize: "12px",
    //   fontWeight: "bold",
    // },
  },
  exporting: {
    enabled: false, // disable the export button
  },
  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [
      {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#FFF"],
            [1, "#333"],
          ],
        },
        borderWidth: 0,
        outerRadius: "109%",
      },
      {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#333"],
            [1, "#FFF"],
          ],
        },
        borderWidth: 0,
        outerRadius: "107%",
      },
      {
        // default background
      },
      {
        backgroundColor: "white",
        borderWidth: 0,
        outerRadius: "105%",
        innerRadius: "103%",
      },
    ],
  },
  yAxis: {
    min: 0,
    max: 100,
    tickPositions: [0, 20, 40, 60, 80, 90, 100],
    labels: {
      distance: 15,
      rotation: "auto",
    },
    plotBands: [
      {
        from: 0,
        to: 40,
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#6600CC"],
            [1, "#CC33FF"],
          ],
        },
      },
      {
        from: 40,
        to: 80,
        color: "#6600CC",
      },
      {
        from: 80,
        to: 100,
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#CC33FF"],
            [1, "#6600CC"],
          ],
        },
      },
    ],
    pane: 0,
    lineWidth: 0,
    tickInterval: 100,
    tickWidth: 0,
  },
  series: [
    {
      name: "Avg. Progress",
      data: [20],
      tooltip: {
        valueSuffix: "%",
      },
      dataLabels: {
        format:
          '<div style="text-align:center"><span style="font-size:25px;color:' +
          (Highcharts.theme || "black") +
          '">{y}</span><br/>' +
          '<span style="font-size:12px;color:silver">%</span></div>',
        y: -50,
      },
      pivot: {
        radius: 5,
        borderWidth: 1,
        borderColor: "#AAA",
        backgroundColor: "#FFF",
      },
    },
  ],
  credits: {
    enabled: false,
  },
}

const CourseProgressChart = () => (
  <div className="rounded-md bg-white  pb-8 shadow-md -z-100">
    <HighchartsReact highcharts={Highcharts} options={options} />
    <h1 className=" text-center text-xs font-semibold">
      80% course progress from 200 enrolled students
    </h1>
  </div>
)

export default CourseProgressChart
