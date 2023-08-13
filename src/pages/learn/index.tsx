import { Box, Grid, Stack } from "@mui/material";
import LearnCard from "./learnCard";
import LearnBg1 from "../../assets/images/learn_bg1.png";
import LearnBg2 from "../../assets/images/learn_bg2.png";
import LearnBg3 from "../../assets/images/learn_bg3.png";
import LearnBg4 from "../../assets/images/learn_bg4.png";
import LearnBg5 from "../../assets/images/learn_bg5.png";
import LearnBg6 from "../../assets/images/learn_bg6.png";

const data = [
  {
    id: 1,
    title: "How to Avoid Teenage Preganacy",
    category: "LEARN CATEGORY",
    updateDate: "2023-07-19",
    bgImage: LearnBg1,
  },
  {
    id: 2,
    title: "How to Counsel a Teenager",
    category: "LEARN CATEGORY",
    updateDate: "2023-07-20",
    bgImage: LearnBg2,
  },
  {
    id: 3,
    title: "How to Avoid Teenage Preganacy",
    category: "LEARN CATEGORY",
    updateDate: "2023-07-21",
    bgImage: LearnBg3,
  },
  {
    id: 4,
    title: "How to Counsel a Teenager",
    category: "LEARN CATEGORY",
    updateDate: "2023-07-22",
    bgImage: LearnBg4,
  },
  {
    id: 5,
    title: "How to Avoid Teenage Preganacy",
    category: "LEARN CATEGORY",
    updateDate: "2023-07-23",
    bgImage: LearnBg5,
  },
  {
    id: 6,
    title: "How to Counsel a Teenager",
    category: "LEARN CATEGORY",
    updateDate: "2023-07-24",
    bgImage: LearnBg6,
  },
];

const Learn = () => {
  return (
    <Box pt={24} pb={{ xs: 6, md: 12 }}>
      <Stack mx={{ xs: 2, md: 5 }}>
        <Grid container spacing={3}>
          {data.map((card) => (
            <Grid item key={card.id} md={6} xs={12}>
              <LearnCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Learn;
