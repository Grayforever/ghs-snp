import {
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Theme,
} from "@mui/material";
import FundHeader from "../../assets/images/fund_merged.png";
import FundHeaderXs from "../../assets/images/fund_header_xs.png";
import Image from "../../components/image";
import SafetyNetWhite from "../../assets/images/safety_net_white.png";
import Unicef from "../../assets/images/unicef_logo.png";
import ScrollDownFab from "../../components/scrollDownFab";
import TextIcon from "../../components/textIcon";
import { MailOutline, PhoneInTalkOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme: Theme) => ({
  heroContainer: {
    height: window.innerHeight - 55,
    minHeight: "500px",
    [theme.breakpoints.up("xs")]: {
      backgroundImage: `url(${FundHeaderXs})`,
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${FundHeader})`,
      textAlign: "start",
    },
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
  bottomStack: {
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    py: 5,
    fontWeight: "bold",
    gap: 3,
    height: 128,
  },
}));

const Fund = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container className={classes.heroContainer}>
        <Grid item md={12} xs={12}>
          <Stack className={classes.innerContainer}>
            <Stack
              sx={{
                fontSize: 12,
                p: "5% 15%",
                justifyContent: { xs: "space-evenly", md: "space-between" },
                flex: 1,
              }}
            >
              <Image
                src={SafetyNetWhite}
                noFlex
                width={300}
                pl={{ xs: 0, md: 5 }}
              />
              <Typography
                variant="h4"
                fontWeight={"bold"}
                sx={{ display: { xs: "none", md: "inherit" } }}
              >
                Your funds may make millions of Pregnant teenage Girls secure a
                Better future
              </Typography>
              <Typography
                variant="h5"
                sx={{ display: { xs: "inherit", md: "none" } }}
              >
                Your funds may make millions of Pregnant teenage Girls secure a{" "}
                <br />
                Better future
              </Typography>
              <Stack alignItems={"center"}>
                <Link
                  to={"target"}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  delay={100}
                >
                  <ScrollDownFab />
                </Link>
                <Typography alignSelf={"center"}>Donate now</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} className={classes.bottomStack}>
              Our Partner <Image src={Unicef} height={40} width={200} noFlex />
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Stack
        my={12}
        spacing={3}
        alignItems={"center"}
        id={"target"}
        px={{ xs: 2, md: 0 }}
      >
        <Box textAlign={"center"}>
          <Typography variant="h6" fontWeight={"bold"} color={"primary"}>
            To Donate
          </Typography>
          <Typography>Contact us through the mediums below</Typography>
        </Box>

        <Card sx={{ minWidth: "50%" }}>
          <CardContent>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <TextIcon
                variant="secondary"
                alignItems={"center"}
                textAlign={"center"}
                icon={<PhoneInTalkOutlined />}
                label={"+233 302 682709 | +233 302 687821"}
              />
              <TextIcon
                variant="secondary"
                alignItems={"center"}
                textAlign={"center"}
                icon={<MailOutline />}
                label={"info@ghs.gov.gh"}
              />
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default Fund;
