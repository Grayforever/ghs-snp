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
} from "@mui/material";
import { TuneOutlined } from "@mui/icons-material";
import ChartCard from "./chartCard";
import { useState } from "react";
import BubbleChart from "./bubbleChart";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const DataViews = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [showFilter, setShowFilter] = useState<boolean>(false);

  function handleClick() {
    setShowFilter((prev) => !prev);
  }
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
            spacing={2}
            component={"form"}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              variant="outlined"
              label="View By Region/District"
              select
              defaultValue={"EUR"}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              label="Select Region"
              select
              defaultValue={"EUR"}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              label="Year"
              select
              defaultValue={"EUR"}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        ) : (
          <IconButton onClick={handleClick}>
            <TuneOutlined />
          </IconButton>
        )}
      </Stack>
      <Collapse in={showFilter}>
        <Stack
          direction={"row"}
          spacing={2}
          component={"form"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            variant="outlined"
            label="View By Region/District"
            select
            defaultValue={"EUR"}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            label="Select Region"
            select
            defaultValue={"EUR"}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            label="Year"
            select
            defaultValue={"EUR"}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </Collapse>

      <Card sx={{ borderRadius: 5 }}>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ChartCard
                error
                title={"Number of Pregnant Adolescents Enrolled To Safety Net"}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ChartCard title={"Number of Home Visits Done"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ChartCard
                error
                title={"Number of Support Group Meetings Carried Out"}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ChartCard
                error
                title={"Number of Girls Attending Support Group Meetings"}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ChartCard error title={"Number Referred to GES"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ChartCard title={"Number Educated on MCH Services"} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DataViews;
