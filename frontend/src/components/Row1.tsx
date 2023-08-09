import DashboardBox from "../components/DashboardBox";
import { Box, useTheme } from "@mui/material";

import BoxHeader from "../components/BoxHeader";
import Row1Area from "../components/charts/Row1Area";
import Row1Line from "./charts/Row1Line";
import Row1Column from "./charts/Row1Column";

const Row1 = () => {
  const theme = useTheme();

  // Define font sizes for different screen sizes
  const titleFontSize = theme.breakpoints.down("md") ? "18px" : "24px";
  const subtitleFontSize = theme.breakpoints.down("md") ? "10px" : "18px";

  return (
    <>
      <DashboardBox gridArea={`a`} style={{ padding: "5px" }}>
        <Box marginBottom={"15px"}>
          <BoxHeader
            title="Revenue and Expenses"
            subtitle="top line - revenue, bottom line - expenses"
            sideText="+4%"
            titleFontSize={titleFontSize} // Pass the font size as a prop
            subtitleFontSize={subtitleFontSize} // Pass the font size as a prop
          />
        </Box>
        <Row1Area />
      </DashboardBox>
      <DashboardBox gridArea={`b`}>
        <Box marginBottom={"15px"}>
          <BoxHeader
            title="Profit and Revenue"
            sideText="+4%"
            titleFontSize={titleFontSize} // Pass the font size as a prop
          />
        </Box>
        <Row1Line />
      </DashboardBox>
      <DashboardBox gridArea={`c`}>
        <Box marginBottom={"15px"}>
          <BoxHeader
            title="Revenue month on month"
            subtitle="Revenue on Y axis"
            sideText="+4%"
            titleFontSize={titleFontSize} // Pass the font size as a prop
            subtitleFontSize={subtitleFontSize} // Pass the font size as a prop
          />
        </Box>
        <Row1Column />
      </DashboardBox>
    </>
  );
};

export default Row1;
