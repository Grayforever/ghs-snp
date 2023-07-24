import { Stack, Typography, Box, Divider, Button, Grid } from "@mui/material";
import HeroImg from "../../assets/images/hero_bg.png"
import SafetyNet from "../../assets/images/safety_net.png";
import Image from "../../components/image";
import HighlightBg from "../../assets/images/highlight_bg.png";
import YmkLogo from "../../assets/images/ymk_logo.png";
import Partner from "../../components/partner";
import LeaderCard from "./leaderCard";
import ScrollDownFab from "../../components/scrollDownFab";
import { Link } from "react-scroll";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    heroContainer: {
        height: window.innerHeight - 64,
        minHeight: '500px',
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
}));

const Home = () => {
    const classes = useStyles();

    return <Box>
        <Grid container className={classes.heroContainer}>
            <Grid item md={12} xs={12}>
                <Stack className={classes.innerContainer} >
                    <Stack flex={1} alignItems={"center"} justifyContent={"flex-end"}>
                        <Typography variant={"h3"} color={"secondary.light"} component={"div"} textAlign={"start"}>
                            Creating Opportunity <br />For  All
                            <Typography component={"span"} fontWeight={"bold"}>
                                {"   The Safty Net Program Story"}
                            </Typography>
                            <Divider sx={{ backgroundColor: "white", width: "20%", height: 3, position: "relative", right: -270 }} />
                        </Typography>
                    </Stack>

                    <Stack flex={0.7} alignItems={"center"} justifyContent={"center"}>
                        <Link to={"target"} smooth={true} offset={-50} duration={500} delay={100}>
                            <ScrollDownFab />
                        </Link>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>

        <Stack id={"target"} direction={"row"} flex={1} spacing={5} justifyContent={"space-between"} sx={{ display: { xs: "none", md: "flex" } }} py={5} px={3}>
            <Image src={SafetyNet} width={"40%"} />
            <Box flex={1}>
                <Typography textAlign={"start"} color={"primary"}>WHAT WE HAVE BEEN DOING</Typography>
            </Box>
        </Stack>

        <Stack bgcolor={"primary.light"} my={3} spacing={3} pt={3}>
            <Typography color={"primary"}>Based On Performance</Typography>
            <Typography fontWeight={"bold"} variant="h5">We Celebrate And Reward Our Regions</Typography>
            <Stack direction={"row"} spacing={5} justifyContent={"center"}>
                <LeaderCard position={"2"} sup={"nd"} />
                <LeaderCard first />
                <LeaderCard position={"3"} sup={"rd"} />
            </Stack>
            <Stack flex={1} direction={"row"} spacing={3} divider={<Divider flexItem orientation="vertical" />} sx={{ minHeight: 500 }}>
                <Stack flex={0.7} sx={{
                    backgroundImage: `url(${HighlightBg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>
                    <Typography color={"white"}>Story Highlights</Typography>
                </Stack>
                <Stack flex={0.3}>
                    <Typography textAlign={"start"} color={"primary"}>Whats Happening…</Typography>
                </Stack>
            </Stack>
        </Stack>

        <Stack bgcolor={"primary.main"} alignItems={"center"} spacing={2} direction={"row"} justifyContent={"center"}>
            <Image src={YmkLogo} width={60} height={60} noFlex />
            <Typography color={"white"}>Download the YMK App</Typography>
            <Button variant="contained">Download now</Button>
        </Stack>

        <Partner />


    </Box >
};

export default Home;