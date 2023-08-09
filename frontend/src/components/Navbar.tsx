/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { Link } from "react-router-dom"
import PixIcon from "@mui/icons-material/Pix"
import { Box, Typography, useTheme } from "@mui/material"

import FlexBetween from "./FlexBetween"

const Navbar = () => {
  const { palette } = useTheme()
  const [selected, setSelected] = useState("")

  return (
    <FlexBetween mb={`0.25rem`} p={`0.5rem 0rem`} bgcolor={'whitesmoke'}>
      {/* left side icon */}
      <FlexBetween gap={`0.75rem`}>
        <PixIcon sx={{ fontSize: "28px", color: "whitesmoke" }} />
        <Typography variant="h4" fontSize={`16px`} marginRight={`20px`}>
          FinApp
        </Typography>
      </FlexBetween>
      {/* right side */}
      <FlexBetween
        gap={`.5rem`}
        sx={{ xs: { gap: ".5rem" }, md: { gap: `2rem` } }}
      >
        <Box sx={{ "&:hover": { color: palette.grey[100] } }}>
          <Link
            onClick={() => setSelected("home")}
            to={"/"}
            style={{
              color: selected == "home" ? "inherit" : palette.grey[100],
              textDecoration: "inherit",
            }}
          >
            Home
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.grey[100] } }}>
          <Link
            onClick={() => setSelected("dashboard")}
            to={"/dashboard"}
            style={{
              color: selected == "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.grey[100] } }}>
          <Link
            onClick={() => setSelected("predictions")}
            to={"/predictions"}
            style={{
              color: selected == "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar
