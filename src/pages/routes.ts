import { lazy } from "react";

const About = lazy(() => import("./about"));
const Blog = lazy(() => import("./blog"));
const BlogDetails = lazy(() => import("./blog/blogDetails"));
const DataViews = lazy(() => import("./data-views"));
const Faq = lazy(() => import("./faq"));
const FaqDetails = lazy(() => import("./faq/faqDetails"));
const Fund = lazy(() => import("./fund"));
const Home = lazy(() => import("./home"));
const Learn = lazy(() => import("./learn"));
const LearnDetails = lazy(() => import("./learn/leardDetails"));
const LetsTalk = lazy(() => import("./lets-talk"));
const Regional = lazy(() => import("./regional"));
const ReportDetails = lazy(() => import("./regional/reportDetails.tsx"));

const routes = [
  { path: "/", exact: true, name: "Home", index: true, element: Home },
  {
    path: "/about",
    exact: false,
    name: "About",
    index: false,
    element: About,
    headernav: true,
  },
  {
    path: "/data-view",
    false: true,
    name: "Data View",
    index: false,
    element: DataViews,
    headernav: true,
  },
  {
    path: "/reports",
    exact: false,
    name: "Reports",
    index: false,
    element: Regional,
    headernav: true,
  },
  {
    path: "/reports/:id",
    exact: false,
    name: "Report Details",
    index: false,
    element: ReportDetails,
  },
  {
    path: "/resources",
    exact: false,
    name: "Resources",
    index: false,
    element: Learn,
    headernav: true,
  },
  {
    path: "/resources/:id",
    exact: false,
    name: "Resource Details",
    index: false,
    element: LearnDetails,
  },
  {
    path: "/blog",
    exact: false,
    name: "Blog",
    index: false,
    element: Blog,
    headernav: true,
  },
  {
    path: "/blog/:id",
    exact: false,
    name: "Blog Details",
    index: false,
    element: BlogDetails,
  },
  {
    path: "/lets-talk",
    exact: false,
    name: "Lets Talk",
    index: false,
    element: LetsTalk,
  },
  { path: "/faq", exact: false, name: "FAQ", index: false, element: Faq },
  {
    path: "/faq/:id",
    exact: false,
    name: "FAQ Details",
    index: false,
    element: FaqDetails,
  },
  { path: "/fund", exact: false, name: "Fund", index: false, element: Fund },
];
export default routes;
