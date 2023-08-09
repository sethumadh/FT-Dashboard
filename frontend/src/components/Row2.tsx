import React from "react"

import DashboardBox from "./DashboardBox"
import BoxHeader from "../components/BoxHeader"
import { Box, Typography, useTheme } from "@mui/material"
import Row2Line from "./charts/Row2Line"
import Row2Pie from "./charts/Row2Pie"
import Row2Scatter from "./charts/Row2Scatter"
function Row2() {
  const { palette } = useTheme()
  const theme = useTheme()

  // Define font sizes for different screen sizes
  const titleFontSize = theme.breakpoints.down("md") ? "18px" : "24px"
  const subtitleFontSize = theme.breakpoints.down("md") ? "10px" : "18px"

  return (
    <>
      <DashboardBox gridArea={`d`}>
        <Box marginBottom={"15px"}>
          <BoxHeader
            title="Operational vs Non-Operational Expenses"
            sideText="+4%"
            titleFontSize={titleFontSize}
          />
        </Box>
        <Row2Line />
      </DashboardBox>

      <DashboardBox
        gridArea={`e`}
        display={`flex`}
        flexDirection={`column`}
        alignItems={`center`}
        // justifyContent={`space-`}
      >
        <Row2Pie />
        <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
          <Typography
            variant="h5"
            color={palette.grey[300]}
            fontSize={titleFontSize}
          >
            Target Sales - 83
          </Typography>
          {/* <Typography m="0.3rem 0" variant="h3" color={palette.grey[300]} fontSize={titleFontSize}>
            83
          </Typography> */}
          <Typography
            variant="h6"
            color={palette.grey[300]}
            fontSize={subtitleFontSize}
          >
            Finance goals of the campaign that is desired
          </Typography>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea={`f`}>
        <Box>
          <BoxHeader
            title="Product Prices vs Expenses"
            sideText="+4%"
            titleFontSize={titleFontSize}
          />
        </Box>
        <Row2Scatter />
      </DashboardBox>
    </>
  )
}

export default Row2
