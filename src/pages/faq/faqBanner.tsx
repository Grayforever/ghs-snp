import { Stack, Typography } from "@mui/material";

const FaqBanner = () => (
  <>
    <Stack alignItems={"center"} flex={1} justifyContent={"space-evenly"}>
      <Typography color={"primary"} fontWeight={"bold"} variant="h6">
        Frequently Asked Questions
      </Typography>
      <Typography
        variant="caption"
        color={"text.secondary"}
        textAlign={"center"}
      >
        Contact us if you have any questions or require additional information
        about the Safety Net Programme
      </Typography>
    </Stack>
  </>
);

export default FaqBanner;
