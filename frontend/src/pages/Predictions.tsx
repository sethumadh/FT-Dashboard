import DashboardBox from "../components/DashboardBox"
import FlexBetween from "../components/FlexBetween"
import { useGetKpisQuery } from "../redux/services/servicesApiSlice"

import { Box, Button, Typography, useTheme } from "@mui/material"
import { useMemo, useState } from "react"
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import regression, { DataPoint } from "regression"

const Predictions = () => {
  const { palette } = useTheme()
  const [isPredictions, setIsPredictions] = useState(false)
  const { data: kpiData } = useGetKpisQuery()

  const formattedData = useMemo(() => {
    if (!kpiData) return []
    const monthData = kpiData[0].monthlyData

    const formatted: Array<DataPoint> = monthData.map(
      ({ revenue }, i: number) => {
        return [i, revenue]
      }
    )
    const regressionLine = regression.linear(formatted)

    return monthData.map(({ month, revenue }, i: number) => {
      return {
        name: month,
        Revenue: parseInt(revenue.toFixed(0)),
        Regression: parseInt(regressionLine.points[i][1].toFixed(0)),
        "Predicted Revenue": parseInt(
          regressionLine.predict(i + 12)[1].toFixed(0)
        ),
      }
    })
  }, [kpiData])

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3" color={palette.grey[300]}>Revenue and Predictions</Typography>
          <Typography variant="h6" color={palette.grey[300]}>
            charted revenue and predicted revenue based on a simple linear
            regression model
          </Typography>
        </Box>
        <Button
          onClick={() => setIsPredictions(!isPredictions)}
          sx={{
            color: palette.grey[100],
            backgroundColor: palette.grey[700],
            boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
          }}
        >
          Show Predicted Revenue for Next Year
        </Button>
      </FlexBetween>
      {kpiData && (
        <ResponsiveContainer width="100%" height={800}>
          <LineChart
            data={formattedData}
            margin={{
              top: 20,
              right: 15,
              left: 15,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[700]} />
            <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
              <Label value="Month" offset={-5} position="insideBottom" />
            </XAxis>
            <ReferenceLine y={0} stroke="#000000" />
            <YAxis
              // scale="point"
              domain={[120, 260]}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            >
              <Label
                value="Revenue in USD"
                angle={-90}
                offset={-5}
                position="insideLeft"
              />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign="top" />
            <Line
              type="monotone"
              dataKey="Revenue"
              stroke={palette.primary.main}
              strokeWidth={0}
              dot={{ strokeWidth: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Regression"
              stroke="#8884d8"
              dot={false}
            />

            {isPredictions && (
              <Line
                strokeDasharray="5 5"
                dataKey="Predicted Revenue"
                stroke={palette.secondary[100]}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      )}
    </DashboardBox>
  )
}

export default Predictions
