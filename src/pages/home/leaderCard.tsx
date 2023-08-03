import { Card, CardContent, Typography, Stack } from "@mui/material";

const positionMe = {
  position: "relative",
  maxHeight: 320,
  bottom: -20,
};

type LeaderCardTypes = {
  first?: boolean;
  position?: string;
  sup?: string;
};
const LeaderCard = (props: LeaderCardTypes) => {
  return (
    <Card
      sx={{
        borderRadius: 5,
        border: "5px solid #488E21",
        maxWidth: { xs: 184, md: 264 },
        minWidth: { xs: 184, md: 264 },
        height: 360,
        ...(props.first ? null : positionMe),
      }}
    >
      <CardContent>
        <Stack alignItems={"center"}>
          <Typography fontWeight={"bold"}>Western North</Typography>
          <Stack
            sx={{ height: props.first ? 220 : 160 }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              variant={"h1"}
              color={"primary"}
              fontWeight={"bold"}
              component={"div"}
            >
              {props.position ?? "1"}
              <Typography component={"sup"} variant={"overline"}>
                {props.sup ?? "st"}
              </Typography>
            </Typography>
          </Stack>
          <Typography
            fontWeight={"bold"}
            fontSize={props.first ? 24 : "inherit"}
          >
            345
          </Typography>
          <Typography>Tracked Safety Net Team</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LeaderCard;
