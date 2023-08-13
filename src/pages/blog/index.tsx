import { Box, Button, Grid, Stack } from "@mui/material";
import BlogBg1 from "../../assets/images/blog_bg1.png";
import BlogBg2 from "../../assets/images/blog_bg2.png";
import BlogBg3 from "../../assets/images/blog_bg3.png";
import BlogBg4 from "../../assets/images/blog_bg4.png";
import BlogBg5 from "../../assets/images/blog_bg5.png";
import BlogBg6 from "../../assets/images/blog_bg6.png";
import BlogCard from "./blogCard";
import Image from "../../components/image";
import SafetyNet from "../../assets/images/safety_net_only.png";

const data = [
  {
    id: 1,
    title: "How to Avoid Teenage Preganacy",
    category: "BLOG CATEGORY",
    updateDate: "2023-07-19",
    bgImage: BlogBg1,
  },
  {
    id: 2,
    title: "How to Counsel a Teenager",
    category: "BLOG CATEGORY",
    updateDate: "2023-07-20",
    bgImage: BlogBg2,
  },
  {
    id: 3,
    title: "How to Avoid Teenage Preganacy",
    category: "BLOG CATEGORY",
    updateDate: "2023-07-21",
    bgImage: BlogBg3,
  },
  {
    id: 4,
    title: "How to Counsel a Teenager",
    category: "BLOG CATEGORY",
    updateDate: "2023-07-22",
    bgImage: BlogBg4,
  },
  {
    id: 5,
    title: "How to Avoid Teenage Preganacy",
    category: "BLOG CATEGORY",
    updateDate: "2023-07-23",
    bgImage: BlogBg5,
  },
  {
    id: 6,
    title: "How to Counsel a Teenager",
    category: "BLOG CATEGORY",
    updateDate: "2023-07-24",
    bgImage: BlogBg6,
  },
];

const Blog = () => {
  return (
    <Box pt={24} pb={{ xs: 6, md: 12 }}>
      <Stack mx={{ xs: 2, md: 4 }}>
        <Grid container spacing={3}>
          {data.map((card) => (
            <Grid item key={card.id} md={6} xs={12}>
              <BlogCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Stack alignItems={"center"} mt={6}>
        <Image src={SafetyNet} width={128} height={64} />
        <Button>More Blogs</Button>
      </Stack>
    </Box>
  );
};

export default Blog;
