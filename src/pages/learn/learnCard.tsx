import { useState } from "react";
import { motion } from "framer-motion";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Theme,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowForwardRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type CardPropTypes = {
  id: number;
  title: string;
  category: string;
  bgImage: string;
  updateDate: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      height: 340,
    },
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    cursor: "pointer",
    borderRadius: 0,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    width: "90%",
    padding: "24px 32px",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: 10,
  },
  innerContainerHovered: {
    width: "90%",
    padding: "24px 32px",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    display: "flex",
    justifyContent: "flex-start",
    gap: 32,
    alignItems: "flex-start",
    flexDirection: "column",
    margin: 10,
  },
  titleText: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  baseText: {
    fontSize: 12,
  },
  readBtn: {
    fontSize: 12,
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: 10,
    textShadow: "0.5px 0.5px 2px #000000",
  },
}));

const LearnCard: React.FC<CardPropTypes> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isHovered, setIsHovered] = useState(false);
  const childVariants = {
    initial: { height: isSmallScreen ? 200 : 64 },
    hovered: {
      height: 200,
    },
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    navigate(`/resources/${props.id}`);
  };

  return (
    <Card
      className={classes.root}
      sx={{ backgroundImage: `url(${props.bgImage})` }}
      elevation={0}
    >
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <motion.div
            className={classes.container}
            whileHover={{
              height: isSmallScreen ? 340 : 400,
              justifyContent: "center",
            }}
            initial={{ height: isSmallScreen ? 340 : 120 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              initial={"initial"}
              className={
                isHovered || isSmallScreen
                  ? classes.innerContainerHovered
                  : classes.innerContainer
              }
              animate={isHovered || isSmallScreen ? "hovered" : "initial"}
              variants={childVariants}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className={classes.titleText}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered || isSmallScreen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: isHovered || isSmallScreen ? "initial" : "none",
                }}
              >
                {props.category}
              </motion.span>
              <Typography variant={"h6"} fontWeight={"bold"}>
                {props.title}
              </Typography>
              <motion.span
                className={classes.baseText}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered || isSmallScreen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: isHovered || isSmallScreen ? "initial" : "none",
                }}
              >
                {`Last Updated: ${props.updateDate}`}
              </motion.span>
            </motion.div>
            <motion.div
              className={classes.readBtn}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered || isSmallScreen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Read More
              <Avatar sx={{ border: "none", width: 24, height: 24 }}>
                <ArrowForwardRounded color={"primary"} />
              </Avatar>
            </motion.div>
          </motion.div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LearnCard;
