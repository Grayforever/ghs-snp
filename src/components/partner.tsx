import { Stack, Typography } from "@mui/material";
import UnicefLogo from "../assets/images/unicef_logo.png";
import Image from "./image";

const Partner = () => (
  <Stack alignItems={"center"} spacing={2} my={4}>
    <Typography textAlign={"start"} color={"primary"} variant="h5">
      Partner
    </Typography>
    <Image src={UnicefLogo} width={256} height={60} noFlex />
  </Stack>
);

export default Partner;
