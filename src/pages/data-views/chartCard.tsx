import { Card, CardContent, Stack, Typography, Box, Chip } from "@mui/material";
import {
  InfoOutlined,
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
} from "@mui/icons-material";
import Chart from "./chart";
import React from "react";
import ReactCardFlip from "react-card-flip";

type ChartCardTypes = {
  hideBorder?: boolean;
  flex?: number;
  hideRecommendation?: boolean;
  error?: boolean;
  title?: string;
  subTitle?: string;
};

const ChartCard = (props: ChartCardTypes) => {
  const componentRef = React.useRef<HTMLDivElement | null>(null);
  const [isFlipped, setIsFlipped] = React.useState<boolean>(false);
  const [height, setHeight] = React.useState<number>(0);
  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsFlipped(true);
    }, 1000);
  };

  React.useEffect(() => {
    if (componentRef.current) {
      setHeight(componentRef.current.clientHeight);
    }
  }, [isFlipped]);

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection={"vertical"}
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}
    >
      <Card
        ref={componentRef}
        component={Stack}
        elevation={props.hideBorder ? 1 : 0}
        flex={props.flex ?? 0.7}
        sx={{
          borderRadius: 5,
          border: props.hideBorder ? "none" : "1px solid #000",
        }}
      >
        <CardContent
          sx={{ textAlign: "start" }}
          component={Stack}
          spacing={{ xs: 2, md: 4 }}
          onMouseEnter={handleMouseEnter}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            spacing={{ xs: 1, md: 2 }}
          >
            <Box color={props.hideBorder ? "text.secondary" : "initial"}>
              <Typography
                fontWeight={"bold"}
                sx={{ fontSize: { xs: 12, md: 16 } }}
              >
                {props.title}
              </Typography>
              <Typography variant="caption">{props.subTitle}</Typography>
            </Box>

            {props.hideRecommendation ? null : (
              <Chip
                color={props.error ? "error" : "primary"}
                label={"Recommendations"}
                sx={{ borderRadius: 2 }}
                icon={<InfoOutlined />}
                size={"small"}
              />
            )}
          </Stack>

          <Stack
            direction={"row"}
            spacing={2}
            sx={{ display: props.hideBorder ? "none" : "flex" }}
          >
            <Typography fontWeight={"bold"} variant="h3">
              100
            </Typography>
            <Box color={"text.secondary"}>
              <Typography
                fontWeight={"bold"}
                color={props.error ? "error" : "primary"}
                component={Stack}
                direction={"row"}
              >
                -23%
                {props.error ? (
                  <ArrowDownwardOutlined />
                ) : (
                  <ArrowUpwardOutlined />
                )}
              </Typography>
              <Typography variant="caption">
                Based on previous month's performance
              </Typography>
            </Box>
          </Stack>

          <Chart />
        </CardContent>
      </Card>

      <Card
        component={Stack}
        elevation={props.hideBorder ? 1 : 0}
        flex={props.flex ?? 0.7}
        sx={{
          borderRadius: 5,
          border: props.hideBorder ? "none" : "1px solid #000",
          height: height,
          bgcolor: "#F8F8F8",
        }}
      >
        <CardContent
          sx={{ textAlign: "start" }}
          component={Stack}
          spacing={{ xs: 2, md: 4 }}
          onMouseLeave={handleMouseLeave}
        >
          <Typography
            fontWeight={"bold"}
            variant={"h5"}
            color={props.error ? "error" : "primary"}
          >
            Recommendation
          </Typography>

          <Typography variant={"caption"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            <br />
            <br />
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed.
          </Typography>
        </CardContent>
      </Card>
    </ReactCardFlip>
  );
};

export default ChartCard;
