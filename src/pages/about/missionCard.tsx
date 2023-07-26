import { Card, CardContent } from "@mui/material";
import { ReactElement } from "react";

type MissionCardProps = {
  secondary?: boolean;
  icon?: ReactElement;
  element?: ReactElement;
};

const MissionCard = (props: MissionCardProps) => {
  const { secondary, element } = props;
  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", md: 360 },
        borderBottom: "8px solid #4F9A21",
        borderRadius: 0,
        bgcolor: secondary ? "primary.light" : "initial",
      }}
    >
      <CardContent>{element}</CardContent>
    </Card>
  );
};

export default MissionCard;
