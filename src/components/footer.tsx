import {
  Typography,
  Stack,
  Button,
  TextField,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import {
  MailOutline,
  PhoneInTalkOutlined,
  RoofingRounded,
} from "@mui/icons-material";
import SendIcon from "../assets/svg/sendIcon";
import FacebookIcon from "../assets/svg/facebookIcon";
import TwitterIcon from "../assets/svg/twitterIcon";
import InstagramIcon from "../assets/svg/instagramIcon";
import YoutubeIcon from "../assets/svg/youtubeIcon";
import TextIcon from "./textIcon";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box component={"footer"} mt={5} px={{ xs: 2, md: 5 }}>
      <Divider
        orientation={"horizontal"}
        sx={{ height: 3, bgcolor: "secondary.main" }}
      />
      <Stack
        flex={1}
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        my={3}
      >
        <Stack flex={0.5} spacing={2}>
          <Typography fontWeight={"bold"} variant="h6" textAlign={"start"}>
            GET IN TOUCH
          </Typography>
          <TextIcon
            icon={<PhoneInTalkOutlined color={"primary"} />}
            label={"+233 302 682709 | +233 302 687821"}
          />
          <TextIcon
            icon={<RoofingRounded color={"primary"} />}
            label={
              "Head Office: Dodoo Lane, Osu, Accra; Behind Accra High Court Complex or Opposite Tema Station, Osu, Accra"
            }
          />
          <TextIcon
            icon={<MailOutline color={"primary"} />}
            label={"info@ghs.gov.gh"}
          />

          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography color={"primary"} fontWeight={"bold"} variant="caption">
              Connect with us
            </Typography>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <YoutubeIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Stack flex={0.5} spacing={2}>
          <Typography fontWeight={"bold"} variant="h6" textAlign={"start"}>
            HELPFUL LINKS
          </Typography>
          <Button
            variant={"text"}
            color={"secondary"}
            component={NavLink}
            to="/fund"
          >
            Fund
          </Button>
          <Button
            variant={"text"}
            color={"secondary"}
            component={NavLink}
            to="/faq"
          >
            FAQ
          </Button>
          <Button
            variant={"text"}
            color={"secondary"}
            href="https://moh.gov.gh"
            target="_"
          >
            Ministry of Health
          </Button>
          <Button
            variant={"text"}
            color={"secondary"}
            href="https://ghs.gov.gh"
            target="_"
          >
            Ghana Health Service
          </Button>
        </Stack>

        <Stack flex={0.5} spacing={2}>
          <Typography fontWeight={"bold"} variant="h6" textAlign={"start"}>
            OUR NEWSLETTES
          </Typography>
          <Typography fontWeight={"bold"} variant="h6" textAlign={"start"}>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
          </Typography>
          <Stack
            direction={"row"}
            bgcolor={"#E5E5E5"}
            sx={{ borderRadius: 3, p: "0px 0px 0px 12px" }}
            alignItems={"center"}
          >
            <TextField
              type="email"
              placeholder="Your Email Address"
              fullWidth
              InputProps={{ disableUnderline: true }}
              variant="standard"
            />
            <IconButton
              sx={{
                bgcolor: "primary.main",
                borderRadius: 3,
                width: 64,
                "&:hover": { bgcolor: "primary.main" },
              }}
            >
              <SendIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Divider
        orientation={"horizontal"}
        sx={{ height: 3, bgcolor: "secondary.main" }}
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        py={1}
      >
        <Typography variant={"overline"} fontWeight={"bold"}>
          Copyright © 2023. Ghana Health Service
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Button variant={"text"} color={"secondary"}>
            Terms
          </Button>
          <Button variant={"text"} color={"secondary"}>
            Privacy
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
