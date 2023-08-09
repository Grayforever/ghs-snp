import {
  Typography,
  Stack,
  Card,
  CardContent,
  Grid,
  TextField,
  IconButton,
  Collapse,
  MenuItem,
  useMediaQuery,
  useTheme,
  Box,
  Fab,
  CircularProgress,
  Theme,
} from "@mui/material";
import { Done, FilterList, TuneOutlined } from "@mui/icons-material";
import ChartCard from "./chartCard";
import { useCallback, useState, useEffect, useRef } from "react";
import BubbleChart from "./bubbleChart";
import RegionalHook from "../regional/regionalHook";

const DataViews = ({ regionalHook = RegionalHook() }) => {
  const {
    regions,
    defaultDistricts,
    getDistrictByRegion,
  }: {
    regions: string[];
    defaultDistricts: string[];
    getDistrictByRegion: (region: string) => string[];
  } = regionalHook;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [districts, setDistricts] = useState<string[]>(defaultDistricts);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef<number>();
  const year = new Date().getFullYear();

  const buttonSx = {
    boxShadow: "none",
    ...(success
      ? {
          bgcolor: (theme: Theme) => theme.palette.primary.main,
          "&:hover": {
            bgcolor: (theme: Theme) => theme.palette.primary.dark,
          },
        }
      : null),
  };

  function handleClick() {
    setShowFilter((prev) => !prev);
  }

  const handleRegionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const _districts = getDistrictByRegion(e.target.value);
      setDistricts(_districts);
    },
    [getDistrictByRegion]
  );

  const handleFilter = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const current = timer.current;
    return () => {
      clearTimeout(current);
    };
  }, []);

  return (
    <Box px={{ xs: 2, md: 5 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{ minHeight: 400 }}
        my={5}
      >
        <ChartCard
          hideBorder
          hideRecommendation
          title={"Number Of Pregnant Adolescents Registered"}
          subTitle={"Results based on Ages (10-19) Form A per region"}
        />
        <Card
          component={Stack}
          flex={0.3}
          sx={{ borderRadius: 5, display: { xs: "none", md: "inherit" } }}
        >
          <CardContent>
            <Stack sx={{ alignItems: "flex-start" }}>
              <Typography fontWeight={"bold"}>
                Top Performing District
              </Typography>
              <Typography variant="caption">
                Results based on indicator
              </Typography>
            </Stack>
            <BubbleChart />
          </CardContent>
        </Card>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        my={3}
      >
        <Typography fontWeight={"bold"}>Performance Indicators</Typography>

        {matches ? (
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            component={"form"}
            sx={{
              "& .MuiTextField-root": { m: 1, minWidth: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              variant="outlined"
              label="Select Region"
              select
              defaultValue={regions[0]}
              onChange={handleRegionChange}
            >
              {regions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              variant="outlined"
              label="View By District"
              select
              defaultValue={districts[0]}
              disabled={defaultDistricts.length === 0}
            >
              {districts?.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField variant="outlined" label="Year" select>
              {Array.from(new Array(50), (_, index) => (
                <MenuItem key={index} value={year - index}>
                  {year - index}
                </MenuItem>
              ))}
            </TextField>
            <Box sx={{ m: 1, position: "relative" }}>
              <Fab
                aria-label="filter"
                color="secondary"
                sx={buttonSx}
                onClick={handleFilter}
              >
                {success ? <Done /> : <FilterList />}
              </Fab>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={{
                    position: "absolute",
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
          </Stack>
        ) : (
          <IconButton onClick={handleClick}>
            <TuneOutlined />
          </IconButton>
        )}
      </Stack>
      <Collapse in={showFilter}>
        <Stack
          spacing={2}
          component={"form"}
          sx={{
            "& .MuiTextField-root": { m: 1, minWidth: "20ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            variant="outlined"
            label="Select Region"
            select
            defaultValue={regions[0]}
            onChange={handleRegionChange}
          >
            {regions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            variant="outlined"
            label="View By District"
            select
            defaultValue={districts[0]}
            disabled={defaultDistricts.length === 0}
          >
            {districts?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Stack direction="row" justifyContent={"space-between"}>
            <TextField variant="outlined" label="Year" select fullWidth>
              {Array.from(new Array(50), (_, index) => (
                <MenuItem key={index} value={year - index}>
                  {year - index}
                </MenuItem>
              ))}
            </TextField>
            <Box sx={{ m: 1, position: "relative" }}>
              <Fab
                aria-label="filter"
                color="secondary"
                sx={buttonSx}
                onClick={handleFilter}
              >
                {success ? <Done /> : <FilterList />}
              </Fab>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={{
                    position: "absolute",
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
          </Stack>
        </Stack>
      </Collapse>

      {loading ? null : (
        <Card sx={{ borderRadius: 5 }}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <ChartCard title={"Number of Implementing Facilities"} />
              </Grid>
              <Grid item xs={12} md={6}>
                <ChartCard
                  error
                  title={
                    "Number of Pregnant Adolescents Enrolled To Safety Net"
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <ChartCard title={"Average Number of Home Visits"} />
              </Grid>
              <Grid item xs={12} md={6}>
                <ChartCard error title={"Number with Adequate Support"} />
              </Grid>
              <Grid item xs={12} md={6}>
                <ChartCard
                  error
                  title={"Number who have Delivered (skilled delivery)"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <ChartCard
                  error
                  title={"Number Referred to Girls Officer (GES)"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <ChartCard title={"Number Referred to DoVVSU"} />
              </Grid>
              <Grid item xs={12} md={6}>
                <ChartCard
                  title={"Number who have Accepted Postpartum Family Planning"}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default DataViews;
