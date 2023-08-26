import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RegionalHook, { RegionalProps, TableDataTypes } from "./regionalHook.ts";
import React, { useMemo } from "react";
import { SharedStateType } from "../../context/sharedSlateContext.tsx";
import ChartCard from "../data-views/chartCard.tsx";
import DetailsPageHoc from "../../components/detailsPageHoc.tsx";
import { useParams } from "react-router-dom";
import EnhancedTable from "../../components/enhancedTable.tsx";

const ReportDetails: React.FC<RegionalProps> = ({
  regionalHook = RegionalHook(),
}) => {
  const {
    sharedState,
    tableData,
    year,
  }: {
    sharedState: SharedStateType;
    tableData: TableDataTypes;
    year: number;
  } = regionalHook;
  const [showFacilites, setShowFacilities] = React.useState<boolean>(false);
  const { id } = useParams();

  const data = id
    ? tableData.districts.find((x) => x.sn.toString() === id)
    : undefined;
  let district = "";

  if (data) {
    if ("district" in data) {
      district = data.district;
    }
  }
  const getTitle = (): string => {
    return sharedState[1] ?? "Ashanti region";
  };

  const renderGrid = useMemo(() => {
    return (
      <Box>
        <Stack direction={"row"} py={3} justifyContent={"space-between"}>
          <Typography variant={"h5"} fontWeight={"bold"}>
            {sharedState[0] === "reports" ? getTitle() : district}
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button
              sx={{
                display: sharedState[0] === "reports" ? "none" : "initial",
              }}
              onClick={() => setShowFacilities(true)}
            >
              Health Facilities Report
            </Button>
            <TextField
              variant="outlined"
              label="Year"
              select
              sx={{ width: { xs: "10ch", md: "20ch" } }}
              defaultValue={year.toString()}
            >
              {Array.from(new Array(50), (_, index) => (
                <MenuItem key={index} value={year - index}>
                  {year - index}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
        <Grid container spacing={4}>
          {[1, 2, 3, 4].map((id) => {
            return (
              <Grid item xs={12} md={6} key={id}>
                <ChartCard title={"Number of Implementing Facilities"} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  }, [sharedState[1], sharedState[0]]);

  return (
    <Stack mx={{ xs: 2, md: 5 }}>
      {sharedState[0]?.toString() === "reports" ? (
        <Box pt={24} pb={{ xs: 6, md: 12 }}>
          {renderGrid}
        </Box>
      ) : (
        <DetailsPageHoc primaryText={district}>
          {showFacilites ? (
            <EnhancedTable data={tableData.districts} />
          ) : (
            renderGrid
          )}
        </DetailsPageHoc>
      )}
    </Stack>
  );
};
export default ReportDetails;
