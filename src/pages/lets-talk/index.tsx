import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { MailOutlineRounded, PhoneInTalkOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import Headings from "../../components/headings";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiInputBase-root": {
      backgroundColor: "#D4F7E8",
      color: "#4F9A0A",
      padding: "12px 24px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      width: "64ch",
    },
    "& .MuiInputBase-multiline": {
      height: "256px",
    },
  },
  buttonStyle: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    width: "62ch",
    padding: "8px 24px",
  },
}));

const LetsTalk = () => {
  const classes = useStyles();

  return (
    <Box pt={24} pb={{ xs: 6, md: 12 }}>
      <Stack mx={{ xs: 2, md: 4 }} spacing={6}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"center"}
          spacing={4}
        >
          <Card sx={{ maxWidth: { xs: "100%", md: 320 } }}>
            <CardContent
              component={Stack}
              alignItems={"flex-start"}
              color={"primary.main"}
              minWidth={"100%"}
              spacing={2}
            >
              <Box
                bgcolor={"primary.main"}
                color="white"
                sx={{ display: "flex", borderRadius: 2 }}
                p={1}
              >
                <MailOutlineRounded />
              </Box>
              <Typography fontWeight={"bold"}>To Email Us</Typography>
              <Typography variant="caption" color={"text.secondary"}>
                Send us an email, we will respond as soon as possible.
              </Typography>
              <Button>
                <Typography textTransform={"initial"} fontSize={12}>
                  Send us a direct mail
                </Typography>
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: { xs: "100%", md: 320 } }}>
            <CardContent
              component={Stack}
              alignItems={"flex-start"}
              color={"primary.main"}
              spacing={2}
            >
              <Box
                bgcolor={"primary.main"}
                color="white"
                sx={{ display: "flex", borderRadius: 2 }}
                p={1}
              >
                <PhoneInTalkOutlined />
              </Box>
              <Typography fontWeight={"bold"}>To Call Us</Typography>
              <Typography
                variant="caption"
                color={"text.secondary"}
                textAlign={"start"}
              >
                <Typography variant="caption" color={"text.secondary"}>
                  Call us if you require further information or an immediate
                  response
                </Typography>
              </Typography>
              <Stack spacing={1}>
                <Button>
                  <Typography textTransform={"initial"} fontSize={12}>
                    + 233 302 682709
                  </Typography>
                </Button>
                <Button>
                  <Typography textTransform={"initial"} fontSize={12}>
                    + 233 302 687821
                  </Typography>
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>

        <Stack
          spacing={1}
          color={"primary.main"}
          component={"form"}
          mx={{ xs: 2, md: 4 }}
          alignItems={{ xs: "initial", md: "center" }}
        >
          <Headings
            title="Let’s Hear From You!"
            subTitle="Send us a direct message here."
          />

          {[
            "What's your name",
            "What's your email",
            "Type your message here",
          ].map((placeholder: string) => (
            <TextField
              key={placeholder}
              placeholder={placeholder}
              variant="standard"
              classes={{ root: classes.root }}
              multiline={placeholder === "Type your message here"}
            />
          ))}
          <Button
            className={classes.buttonStyle}
            sx={{ fontSize: 16 }}
            variant="contained"
            color={"success"}
            type="submit"
          >
            Send message
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LetsTalk;
