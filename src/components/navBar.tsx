import * as React from "react";
import {
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  AppBar,
  Box,
  Toolbar,
  Button,
  Stack,
} from "@mui/material";
import routes from "../pages/routes";
import { useNavigate } from "react-router-dom";
import { MenuRounded } from "@mui/icons-material";
import Logo from "../assets/images/ghs_logo.png"
import Image from "./image";
import Banner from "./banner";
import FaqBanner from "../pages/faq/faqBanner";
import { LearnBanner } from "../pages/learn";
import { BlogBanner } from "../pages/blog";
import { LetsTalkBanner } from "../pages/lets-talk";
import RegionalBanner from "../pages/regional/regionBanner";
import usePathPattern from "../hooks/useCurrentPath";

function bannerByPath(path: string | undefined) {
  switch (path) {
    case "/regional":
      return <RegionalBanner />;
    case "/learn":
    case "/learn/:id":
      return <LearnBanner />;
    case "/blog":
    case "/blog/:id":
      return <BlogBanner />;
    case "/lets-talk":
      return <LetsTalkBanner />;
    case "/faq":
    case "/faq/:id":
      return <FaqBanner />;
    default:
      return null;
  }
}

const NavBar = () => {
  const [slide, setSlide] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const pattern = usePathPattern()

  const banner = bannerByPath(pattern);
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);


  const handleHomeClick = React.useCallback(() => {
    navigate("/")
  }, [navigate]);


  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setSlide(open);
      };

  return (
    <Box>
      <AppBar position="fixed" sx={{ bgcolor: "white" }} component={"nav"} elevation={0}>
        <Toolbar
          disableGutters
          sx={{
            padding: { md: "12px 32px", xs: "10px" },
            alignItems: "center",
          }}
        >
          <Button onClick={handleHomeClick}>
            <Image
              width={{ xs: 180, md: 256, }}
              height={{ xs: 32, md: 32 }}
              loading={"lazy"}
              src={Logo}
              noFlex
            />
          </Button>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "flex-end",
                overflow: "hidden",
              },
            }}
          >
            <IconButton size={"large"} onClick={() => setSlide((prev) => !prev)}>
              <MenuRounded color={"primary"} fontSize="large" />
            </IconButton>

            <SwipeableDrawer
              anchor={"right"}
              BackdropProps={{ invisible: true }}
              open={slide}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              disableBackdropTransition={!iOS}
              disableDiscovery={iOS}
              elevation={0}
              sx={{
                "& .MuiDrawer-paper": {
                  position: "absolute",
                  top: 75,
                },
              }}
            >
              <Box sx={{ width: 250 }}
                role="presentation">
                <List>
                  {routes.map((page) => {
                    return page.headernav ? <ListItemButton
                      key={page.name}
                      href={page.path}
                    >
                      <ListItemText primary={page.name} />
                    </ListItemButton> : null
                  })}
                  <Button variant="contained" color={"secondary"}
                    href={"/lets-talk"}
                    sx={{ ml: 2, mt: 4 }}
                  >
                    Let's Talk
                  </Button>
                </List>
              </Box>
            </SwipeableDrawer>
          </Box>

          <Stack direction={"row"}
          spacing={1}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {routes.map((page) => {
              return page.headernav ? <Button key={page.name} variant="text"
                href={page.path}
              >
                {page.name}
              </Button> : null
            })}
            <Button variant="contained"
              href={"/lets-talk"}
              sx={{ display: { xs: "none", md: "inherit", textTransform:"uppercase" } }}
            >
              Let's Talk
            </Button>
          </Stack>


        </Toolbar>
        {banner ? <Banner>{banner}</Banner> : null}
      </AppBar>
      <Toolbar />

    </Box>
  );
};

export default NavBar;
