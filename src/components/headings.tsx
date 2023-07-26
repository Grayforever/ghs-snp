import { Stack, Typography } from "@mui/material";

const Headings = ({
  title,
  subTitle,
  noMargin,
}: {
  title: string;
  subTitle?: string;
  noMargin?: boolean;
}) => (
  <Stack
    alignItems={"center"}
    my={noMargin ? 0 : 5}
    spacing={2}
    textAlign={"center"}
    px={{ xs: 2, md: 5 }}
  >
    <Typography color={"primary"} variant="h5">
      {title}
    </Typography>
    <Typography color={"primary"} variant={"subtitle2"}>
      {subTitle}
    </Typography>
  </Stack>
);

export default Headings;
