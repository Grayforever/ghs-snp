import {
  Typography,
  Stack,
  Divider,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SafetyNetOnly from "../../assets/images/safety_net_only.png";
import HighlightBg from "../../assets/images/highlight_bg.png";
import Image from "../../components/image";
import Partner from "../../components/partner";
import { makeStyles } from "@mui/styles";
import Headings from "../../components/headings";
import Card from "../../components/card";
import FairTreatmentIcon from "../../assets/svg/fairTreatmentIcon";
import JusticeIcon from "../../assets/svg/justiceIcon";
import EqualityIcon from "../../assets/svg/equalityIcon";
import SwipeableGrid from "../../components/swipeableGrid";

const useStyles = makeStyles({
  innerIndicator: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#4F9A21",
    cursor: "pointer",
    display: "none",
    alignSelf: "center",
  },
  indicator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "rgba(79, 154, 33, 0.4)",
    cursor: "pointer",
  },
  activeIndicator: {
    display: "flex",
    alignSelf: "center",
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundImage: `url(${HighlightBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: 600,
    width: "100%",
  },
  captionBox: {
    fontSize: 10,
    textAlign: "center",
    px: 16,
  },
});

const overviewData = [
  { region: "Ashanti Region", population: "1,193,393", adolescents: "29,3933" },
  { region: "Eastern Region", population: "1,193,393", adolescents: "29,3933" },
  { region: "Volta Region", population: "1,193,393", adolescents: "29,3933" },
  {
    region: "Greater Accra Region",
    population: "1,193,393",
    adolescents: "29,3933",
  },
  { region: "Central Region", population: "1,193,393", adolescents: "29,3933" },
  { region: "Bono Region", population: "1,193,393", adolescents: "29,3933" },
  {
    region: "Upper East Region",
    population: "1,193,393",
    adolescents: "29,3933",
  },
  {
    region: "Upper West Region",
    population: "1,193,393",
    adolescents: "29,3933",
  },
  {
    region: "Western North Region",
    population: "1,193,393",
    adolescents: "29,3933",
  },
  { region: "Savanah Region", population: "1,193,393", adolescents: "29,3933" },
  { region: "Nothern Region", population: "1,193,393", adolescents: "29,3933" },
  {
    region: "Bono East Region",
    population: "1,193,393",
    adolescents: "29,3933",
  },
  { region: "Oti Region", population: "1,193,393", adolescents: "29,3933" },
  { region: "Ahafo Region", population: "1,193,393", adolescents: "29,3933" },
  { region: "Western Region", population: "1,193,393", adolescents: "29,3933" },
  {
    region: "North East Region",
    population: "1,193,393",
    adolescents: "29,3933",
  },
];

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Stack
        alignItems={"center"}
        py={{ xs: 6, md: 12 }}
        spacing={{ xs: 1, md: 2 }}
      >
        <Typography variant="h3" fontWeight={"bold"}>
          Get To Know
        </Typography>
        <Image src={SafetyNetOnly} width={300} height={168} />
      </Stack>

      <Stack className={classes.centerContainer} spacing={2}>
        <Typography variant={"h5"}>Why Safety Net</Typography>
        <Box px={{ xs: 2, md: 16 }}>
          <Typography fontSize={10} textAlign={"center"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed
          </Typography>
        </Box>
        <Divider
          sx={{ backgroundColor: "primary.main", minWidth: "60%", height: 3 }}
        />
      </Stack>

      <Headings
        title="What We Hope To Achieve"
        subTitle="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,"
      />

      <Grid container spacing={6} px={{ xs: 2, md: 5 }}>
        <Card
          title="Fair Treatment"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
          icon={<FairTreatmentIcon fontSize="large" />}
        />
        <Card
          title="Justice"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
          icon={<JusticeIcon fontSize="large" />}
        />
        <Card
          title="Equality"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
          icon={<EqualityIcon fontSize="large" />}
        />
      </Grid>

      <Headings title="We Aspire To Be" />
      {/* <ThreeVerticalCards /> */}

      <Stack alignItems={"center"} py={5} px={{ xs: 2, md: 5 }} spacing={2}>
        <Headings title="Regional Adolescent Overview" noMargin />
        <SwipeableGrid
          items={overviewData}
          orientation="horizontal"
          itemsPerSwipe={isSmallDevice ? 1 : 4}
        />
      </Stack>

      <Partner />
    </Box>
  );
};

export default About;
