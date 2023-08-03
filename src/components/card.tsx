import { motion } from "framer-motion";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactNode, useState } from "react";

const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    borderBottom: "8px solid #4F9A21",
    transition: "0.3s ease-out",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    boxShadow: "0px 3px 6px #00000029",
    padding: "48px 24px",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    "&.expanded": {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      transition: "0.3s ease-out",
      marginBottom: 10,
      gap: 10,
    },
  },
  icon: {
    width: "auto",
    height: "auto",
    "&.expanded": {
      width: "32px",
      height: "32px",
    },
  },
  description: {
    width: "100%",
    textAlign: "center",
    opacity: 0,
    transition: "0.3s ease-out",
    "&.expanded": {
      opacity: 1,
    },
    "&.collapsed": {
      display: "none",
    },
  },
}));

const Card: React.FC<{
  title: string;
  description: string;
  icon?: ReactNode;
}> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <Grid item md={4} xs={12}>
      <motion.div
        variants={{
          expanded: {
            height: "auto",
          },
          collapsed: {
            height: "auto",
          },
        }}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={classes.card}
      >
        <motion.div
          className={`${classes.innerContainer} ${
            isExpanded || isSmallScreen ? "expanded" : ""
          }`}
        >
          {props.icon}
          <Typography variant="h5" component="div" fontWeight={"bold"}>
            {props.title}
          </Typography>
        </motion.div>
        <motion.div
          className={`${classes.description} ${
            isExpanded || isSmallScreen ? "expanded" : "collapsed"
          }`}
        >
          <Typography variant="body2" textAlign={"start"}>
            {props.description}
          </Typography>
        </motion.div>
      </motion.div>
    </Grid>
  );
};

export default Card;
