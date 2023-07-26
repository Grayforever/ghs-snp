import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

type FaqCardPropTypes = {
  title: string;
  subTitle: string;
  onClick: () => void;
};

const FaqCard = (props: FaqCardPropTypes) => {
  return (
    <Card
      sx={{
        "&:hover": {
          boxShadow: "0px 1px 4px #4F9A0AE3",
        },
      }}
    >
      <CardActionArea onClick={props.onClick}>
        <CardContent
          component={Stack}
          justifyContent={"space-between"}
          textAlign={"start"}
          color={"text.secondary"}
          spacing={3}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            {props.title}
          </Typography>
          <Typography variant={"body2"}>{props.subTitle}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FaqCard;
