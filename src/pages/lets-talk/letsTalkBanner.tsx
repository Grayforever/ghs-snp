import { Stack, Typography } from "@mui/material";

const LetsTalkBanner = () => (
  <>
    <Stack alignItems={"center"} justifyContent={"space-evenly"}>
      <Typography color={"primary"} fontWeight={"bold"} variant="h6">
        We're here to talk
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
export default LetsTalkBanner;
