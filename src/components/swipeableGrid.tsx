import { motion } from "framer-motion";
import {
  Box,
  GridSpacing,
  IconButton,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
import * as React from "react";
import MissionCard from "../pages/about/missionCard";

type OverviewDataTypes = {
  region: string;
  population: string;
  adolescents: string;
};

type SwipeableGridProps = {
  items: OverviewDataTypes[];
  orientation: "vertical" | "horizontal";
  itemsPerSwipe: number;
  spacing?: GridSpacing;
};
export const Overview = (props: OverviewDataTypes) => {
  const { region, population, adolescents } = props;

  return (
    <Stack
      sx={{ height: "100%" }}
      justifyContent={"space-between"}
      spacing={3}
      alignItems={"center"}
    >
      <Typography fontWeight={"bold"}>{region}</Typography>
      <Stack alignItems={"center"}>
        <Typography variant="caption" color={"primary"}>
          Population
        </Typography>
        <Typography fontWeight={"bold"} variant={"h4"}>
          {population}
        </Typography>
      </Stack>
      <Divider sx={{ minWidth: "70%", backgroundColor: "#CECECE" }} />
      <Stack alignItems={"center"}>
        <Typography variant="caption" color={"primary"}>
          Adolescent
        </Typography>
        <Typography fontWeight={"bold"} variant={"h4"}>
          {adolescents}
        </Typography>
      </Stack>
    </Stack>
  );
};

const SwipeableGrid: React.FC<SwipeableGridProps> = ({
  items,
  orientation,
  itemsPerSwipe,
  spacing = 2,
}) => {
  const [activePage, setActivePage] = useState(0);
  const numPages = Math.ceil(items.length / itemsPerSwipe);

  const handlePrevPage = () => {
    setActivePage((prevPage) => Math.max(0, prevPage - 1));
  };

  const handleNextPage = () => {
    setActivePage((prevPage) => Math.min(numPages - 1, prevPage + 1));
  };

  const handleIndicatorClick = (pageIndex: number) => {
    setActivePage(pageIndex);
  };

  const itemWidth = `${100 / itemsPerSwipe}%`;

  return (
    <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton onClick={handlePrevPage} disabled={activePage === 0}>
          <ArrowBackRounded color={activePage === 0 ? "disabled" : "primary"} />
        </IconButton>
        <Box sx={{ flex: 1, overflow: "hidden" }}>
          <motion.div
            style={{
              display: "flex",
              flexDirection: orientation === "vertical" ? "column" : "row",
              transition: "transform 0.3s ease",
              transform:
                orientation === "vertical"
                  ? `translateY(-${activePage * 100}%)`
                  : `translateX(-${activePage * 100}%)`,
            }}
          >
            {items.map((overview, index) => (
              <Box
                key={index}
                sx={{
                  flex: `0 0 ${itemWidth}`,
                  padding: { xs: "0px 0px 24px", md: spacing },
                }}
              >
                <MissionCard
                  secondary={true}
                  element={<Overview {...overview} />}
                />
              </Box>
            ))}
          </motion.div>
        </Box>
        <IconButton
          onClick={handleNextPage}
          disabled={activePage === numPages - 1}
        >
          <ArrowForwardRounded
            color={activePage === numPages - 1 ? "disabled" : "primary"}
          />
        </IconButton>
      </Stack>

      {/* Indicators */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={{ xs: 1, md: 2 }}
      >
        {Array.from({ length: numPages }).map((_, index) => (
          <Box
            key={index}
            onClick={() => handleIndicatorClick(index)}
            sx={{
              width: "12px",
              height: "12px",
              backgroundClip: "padding-box",
              WebkitBackgroundClip: "padding-box",
              backgroundColor: `rgba(79, 154, 33, ${
                activePage === index ? 1 : 0.6
              })`,
              borderRadius: "50%",
              cursor: "pointer",
              border:
                activePage === index
                  ? "2px solid rgba(79, 154, 33, 0.6)"
                  : "none",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SwipeableGrid;
