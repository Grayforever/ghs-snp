import { Stack, Typography, Box, Divider, Button, Grid } from "@mui/material";
import HeroImg from "../../assets/images/hero_bg.png";
import SafetyNet from "../../assets/images/safety_net.png";
import Image from "../../components/image";
import HighlightBg from "../../assets/images/highlight_bg.png";
import YmkLogo from "../../assets/images/ymk_logo.png";
import Partner from "../../components/partner";
import LeaderCard from "./leaderCard";
import ScrollDownFab from "../../components/scrollDownFab";
import { Link } from "react-scroll";
import { makeStyles } from "@mui/styles";
import AchievementCard from "./achievementCard";
import StoryCard from "./storyCard";
import Carousel from "react-material-ui-carousel";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import * as React from "react";

const achievements = [
  { count: 105, year: "2023" },
  { count: "4,056", year: "2022" },
  { count: "3,990", year: "2021" },
];

const stories = [
  {
    name: "Mary Lee",
    region: "Brong Ahafo Region",
    story:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
  },
  {
    name: "Jane Doe",
    region: "Greater Accra Region",
    story:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
  },
  {
    name: "Araba Lawson",
    region: "Central Region",
    story:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
  },
];

const useStyles = makeStyles(() => ({
  heroContainer: {
    height: window.innerHeight - 55,
    minHeight: "500px",
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "start",
  },
  innerContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  divider: {
    height: 4,
    backgroundColor: "white",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container className={classes.heroContainer}>
        <Grid item md={12} xs={12}>
          <Stack
            className={classes.innerContainer}
            alignItems={{ xs: "center", md: "inherit" }}
          >
            <Stack
              flex={1}
              alignItems={"center"}
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <Typography
                variant={"h3"}
                color={"secondary.light"}
                component={"div"}
                textAlign={{ xs: "center", md: "start" }}
              >
                Creating Opportunity <br />
                For All
                <Typography
                  component={"span"}
                  fontWeight={"bold"}
                  sx={{ display: { xs: "none", md: "initial" } }}
                >
                  {"   The Safety Net Program Story"}
                </Typography>
                <Divider
                  sx={{
                    display: { xs: "none", md: "inherit" },
                    backgroundColor: "white",
                    width: "20%",
                    height: 3,
                    position: "relative",
                    right: -270,
                  }}
                />
              </Typography>
              <Typography
                component={"span"}
                fontWeight={"bold"}
                sx={{ display: { xs: "initial", md: "none" } }}
                mb={2}
              >
                The Safety Net Program Story
              </Typography>
              <Divider
                sx={{
                  display: { xs: "initial", md: "none" },
                  backgroundColor: "white",
                  width: "30%",
                  height: 2,
                }}
              />
            </Stack>

            <Stack flex={0.7} alignItems={"center"} justifyContent={"center"}>
              <Link
                to={"target"}
                smooth={true}
                offset={-50}
                duration={500}
                delay={100}
              >
                <ScrollDownFab />
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Stack
        id={"target"}
        direction={{ xs: "column", md: "row" }}
        flex={1}
        spacing={5}
        justifyContent={"space-between"}
        py={{ xs: 1, md: 5 }}
        px={{ xs: 2, md: 5 }}
      >
        <Image
          src={SafetyNet}
          width={"40%"}
          sx={{ display: { xs: "none", md: "initial" } }}
        />
        <Box flex={1}>
          <Typography textAlign={"center"} color={"primary"}>
            WHAT WE HAVE BEEN DOING
          </Typography>

          <Carousel
            sx={{ width: "100%" }}
            autoPlay={false}
            animation="slide"
            IndicatorIcon={<HorizontalRuleRoundedIcon fontSize={"large"} />}
            activeIndicatorIconButtonProps={{
              style: {
                color: "#4F9A0A",
              },
            }}
          >
            {achievements.map(({ count, year }) => (
              <React.Fragment key={year}>
                <AchievementCard year={year} count={count} />
              </React.Fragment>
            ))}
          </Carousel>
        </Box>
      </Stack>

      <Stack
        bgcolor={"primary.light"}
        my={1}
        spacing={3}
        pt={3}
        sx={{ overflowX: "hidden" }}
      >
        <Stack alignItems={"center"} textAlign={"center"} px={{ xs: 2, md: 5 }}>
          <Typography color={"primary"}>Based On Performance</Typography>
          <Typography fontWeight={"bold"} variant="h5">
            We Celebrate And Reward Our Regions
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          spacing={5}
          justifyContent={"center"}
          sx={{ overflowX: "auto", maxWidth: "100%" }}
        >
          <LeaderCard position={"2"} sup={"nd"} />
          <LeaderCard first />
          <LeaderCard position={"3"} sup={"rd"} />
        </Stack>

        <Stack
          flex={1}
          direction={{ xs: "column", md: "row" }}
          sx={{ minHeight: 500, borderTop: "8px solid #FFF" }}
        >
          <Stack
            flex={{ xs: 1, md: 0.7 }}
            sx={{
              backgroundImage: `url(${HighlightBg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRight: { xs: "none", md: "8px solid #FFF" },
            }}
            alignItems={"center"}
            p={{ xs: 2, md: 5 }}
            justifyContent={"space-between"}
          >
            <Typography color={"white"}>Story Highlights</Typography>
            <Carousel
              sx={{ width: "100%" }}
              autoPlay={false}
              animation="slide"
              activeIndicatorIconButtonProps={{
                style: {
                  opacity: 1,
                },
              }}
              indicatorIconButtonProps={{
                style: {
                  color: "#4F9A0A",
                  opacity: 0.4,
                },
              }}
            >
              {stories.map(({ name, region, story }) => (
                <React.Fragment key={name}>
                  <StoryCard name={name} region={region} story={story} />
                </React.Fragment>
              ))}
            </Carousel>
          </Stack>
          <Stack
            flex={{ xs: 0, md: 0.3 }}
            display={{ xs: "none", md: "initial" }}
            p={"16px 32px"}
          >
            <Typography textAlign={"center"} color={"primary"}>
              Whats Happening…
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        bgcolor={"primary.main"}
        alignItems={"center"}
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        px={{ xs: 2, md: 5 }}
        py={1}
      >
        <Image src={YmkLogo} width={60} height={60} noFlex />
        <Typography color={"white"}>Download the YMK App</Typography>
        <Button
          variant="contained"
          href="https://play.google.com/store/apps/details?id=org.ghs.ymk&hl=en&gl=US&pli=1"
          target="_"
        >
          Download now
        </Button>
      </Stack>

      <Partner />
    </Box>
  );
};

export default Home;
