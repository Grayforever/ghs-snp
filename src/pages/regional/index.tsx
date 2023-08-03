import {
  Stack,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  CardHeader,
} from "@mui/material";
import RegionalHook, { RegionalProps, TableDataTypes } from "./regionalHook";
import EnhancedTable from "../../components/enhancedTable";
import React from "react";
import { SharedStateType } from "../../context/sharedSlateContext";

const Regional: React.FC<RegionalProps> = ({
  regionalHook = RegionalHook(),
}) => {
  const {
    sharedState,
    tableData,
  }: { sharedState: SharedStateType; tableData: TableDataTypes } = regionalHook;

  function getTable(): React.ReactNode {
    switch (sharedState) {
      case "facilities":
        return <EnhancedTable data={tableData[sharedState]} />;
      case "reports":
        return <EnhancedTable data={tableData[sharedState]} />;
      case "districts":
        return <EnhancedTable data={tableData[sharedState]} />;
      default:
        return <EnhancedTable data={tableData.districts} />;
    }
  }

  return (
    <Box pt={24} pb={{ xs: 6, md: 12 }}>
      <Stack mx={{ xs: 2, md: 5 }}>
        {/* {sharedState !== undefined ? (
          <EnhancedTable data={data} />
        ) : (
          <Card
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
            elevation={0}
          >
            <CardHeader
              sx={{ display: { md: "none" } }}
              title="Regional Overview"
            />
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", md: 360, lg: 400, xl: 500 },
                height: { xs: "auto", md: "auto" },
              }}
              src={Doctor}
              alt="Image of the president"
            />
            <CardContent>
              <Stack alignItems={"center"} sx={{ display: { md: "none" } }}>
                <Typography color={"primary"}>Dr. Alberta Mojo Fako</Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Regional Director
                </Typography>
              </Stack>
              <Stack
                justifyContent={"space-between"}
                flexGrow={1}
                sx={{ textAlign: "start", minHeight: "100%" }}
                spacing={2}
              >
                <Typography
                  variant={"h6"}
                  fontWeight={"bold"}
                  sx={{ display: { xs: "none", md: "inherit" } }}
                >
                  Regional overview
                </Typography>
                <Typography color={"text.secondary"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed.
                </Typography>
                <Box sx={{ display: { xs: "none", md: "initial" } }}>
                  <Typography color={"primary"}>
                    Dr. Alberta Mojo Fako
                  </Typography>
                  <Typography variant="subtitle2">Regional Director</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        )} */}
        {getTable()}
      </Stack>
    </Box>
  );
};

export default Regional;
