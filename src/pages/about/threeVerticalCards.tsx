import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    width: "500px",
    height: "200px",
    borderRadius: "8px",
    boxShadow: "0px 3px 6px #00000029",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "white",
    marginBottom: "20px",
    position: "relative",
    zIndex: 1,
  },
  activeCard: {
    zIndex: 2,
  },
  cardTitle: {
    textAlign: "center",
  },
  hiddenCard: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 3px 6px #00000029",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
});

interface CardData {
  title: string;
  description: string;
}

const initialCards: CardData[] = [
  {
    title: "Card 1",
    description: "Description for Card 1",
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
  },
  {
    title: "Card 3",
    description: "Description for Card 3",
  },
];

const Card: React.FC<{
  data: CardData;
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}> = ({ data, isActive, onHoverStart, onHoverEnd }) => {
  const classes = useStyles();
  const controls = useAnimation();

  const handleHoverStart = () => {
    if (!isActive) {
      onHoverStart();
    }
  };

  return (
    <motion.div
      className={`${classes.card} ${isActive ? classes.activeCard : ""}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={handleHoverStart}
      animate={controls}
    >
      <Typography variant="h5" className={classes.cardTitle}>
        {data.title}
      </Typography>
      {isActive && (
        <motion.div
          className={classes.hiddenCard}
          onClick={onHoverEnd}
          animate={{ opacity: 1, height: "100%" }}
          initial={{ opacity: 0, height: "0%" }}
        >
          <Typography variant="h5" className={classes.cardTitle}>
            {data.title}
          </Typography>
          <Typography variant="body1">{data.description}</Typography>
        </motion.div>
      )}
    </motion.div>
  );
};

const ThreeStackedCards: React.FC = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardHoverStart = (index: number) => {
    setActiveIndex(index);
  };

  const handleCardHoverEnd = () => {
    setActiveIndex(null);
  };

  return (
    <div className={classes.container}>
      {initialCards.map((data, index) => (
        <Card
          key={index}
          data={data}
          isActive={activeIndex === index}
          onHoverStart={() => handleCardHoverStart(index)}
          onHoverEnd={handleCardHoverEnd}
        />
      ))}
    </div>
  );
};

export default ThreeStackedCards;
