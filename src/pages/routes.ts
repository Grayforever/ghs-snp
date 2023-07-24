import About from "./about";
import Blog from "./blog";
import BlogDetails from "./blog/blogDetails";
import DataViews from "./data-views";
import Faq from "./faq";
import FaqDetails from "./faq/faqDetails";
import Fund from "./fund";
import Home from "./home";
import Learn from "./learn";
import LearnDetails from "./learn/leardDetails";
import LetsTalk from "./lets-talk";
import Regional from "./regional";

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
    path: "/regional",
    exact: false,
    name: "Regional",
    index: false,
    element: Regional,
    headernav: true,
  },
  {
    path: "/learn",
    exact: false,
    name: "Learn",
    index: false,
    element: Learn,
    headernav: true,
  },
  {
    path: "/learn/:id",
    exact: false,
    name: "Learn Details",
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
