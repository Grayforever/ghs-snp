import { Box, Stack, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme: Theme) => ({
  circle: {
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.main}`,
    minWidth: 80,
    minHeight: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
}));

const AchievementCard = ({
  count,
  year,
}: {
  count: number | string;
  year: string;
}) => {
  const classes = useStyles();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      p={{ xs: "8px 16px", md: "16px 32px" }}
    >
      <Stack alignItems={"center"}>
        <Typography variant="h2" fontWeight={"bold"}>
          {count}
        </Typography>
        <Typography variant="h6">Girls</Typography>
      </Stack>
      <Box className={classes.circle}>
        <Typography variant="h5" fontWeight={"bold"}>
          {year}
        </Typography>
      </Box>
    </Stack>
  );
};

export default AchievementCard;
