import {
  Stack,
  Box,
  Snackbar,
  Button,
  IconButton,
  Grid,
  Typography,
  MenuItem,
  TextField,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import RegionalHook, { RegionalProps, TableDataTypes } from "./regionalHook";
import EnhancedTable, { TableDataItem } from "../../components/enhancedTable";
import React, { useCallback, useMemo } from "react";
import { SharedStateType } from "../../context/sharedSlateContext";
import { CloseRounded } from "@mui/icons-material";
import ChartCard from "../data-views/chartCard.tsx";
import Doctor from "../../assets/images/doctor_woman.png";
import { useOutlet } from "react-router-dom";

const Regional: React.FC<RegionalProps> = ({
  regionalHook = RegionalHook(),
}) => {
  const {
    sharedState,
    tableData,
    handleLaunch,
    year,
  }: {
    sharedState: SharedStateType;
    tableData: TableDataTypes;
    handleLaunch: (item: TableDataItem | undefined) => void;
    year: number;
  } = regionalHook;
  const outlet = useOutlet();

  const [open, setOpen] = React.useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const action = useMemo(() => {
    return (
      <React.Fragment>
        <Button size="small" onClick={handleClose}>
          Retry Here
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseRounded fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  }, [handleClose]);

  return (
    outlet || (
      <Box pt={24} pb={{ xs: 6, md: 12 }}>
        <Stack mx={{ xs: 2, md: 5 }}>
          {sharedState[0] !== null || sharedState[1] !== null ? (
            <>
              {sharedState[0]?.toString() === "districts" ? (
                <EnhancedTable
                  data={tableData.districts}
                  onLaunch={(item: TableDataItem | undefined) =>
                    handleLaunch(item)
                  }
                />
              ) : null}
              {sharedState[0]?.toString() === "reports" ? (
                <Box>
                  <Stack
                    direction={"row"}
                    py={3}
                    justifyContent={"space-between"}
                  >
                    <Typography variant={"h5"} fontWeight={"bold"}>
                      {sharedState[1] !== null
                        ? sharedState[1]
                        : "Ashanti region"}
                    </Typography>
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
                  <Grid container spacing={4}>
                    {[1, 2, 3, 4].map((id) => {
                      return (
                        <Grid item xs={12} md={6} key={id}>
                          <ChartCard
                            title={"Number of Implementing Facilities"}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              ) : null}
            </>
          ) : (
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
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
                  <Typography color={"primary"}>
                    Dr. Alberta Mojo Fako
                  </Typography>
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
                    <Typography variant="subtitle2">
                      Regional Director
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          )}
        </Stack>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Download Started"
          action={action}
        />
      </Box>
    )
  );
};

export default Regional;
