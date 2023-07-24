import { useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, Card, CardActionArea, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowForwardRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

type CardPropTypes = {
    id: number;
    title: string;
    category?: string;
    bgImage: string;
    updateDate?: string;
    noAnimation?: boolean
}

const useStyles = makeStyles(() => ({
    root: {
        height: 500,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: "column",
        cursor: "pointer",
        borderRadius: 0
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    innerContainer: {
        width: '90%',
        padding: "0px 32px",
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: "blur(30)",
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "flex-start",
        flexDirection: 'column',
        margin: 10
    },
    innerContainerHovered: {
        width: '90%',
        padding: "24px 32px",
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: "blur(30)",
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: "flex-start",
        flexDirection: 'column',
        margin: 10
    },
    titleText: {
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    baseText: {
        fontSize: 12,
        textAlign: "start"
    },
    readBtn: {
        fontSize: 12,
        color: "white",
        display: 'flex',
        alignItems: "center",
        gap: 10,
        textShadow: "0.5px 0.5px 2px #000000"
    },
    headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    }
}));

const BlogCard: React.FC<CardPropTypes> = (props: CardPropTypes) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const childVariants = {
        initial: { height: 100 },
        hovered: {
            height: 250
        },
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCardClick = () => {
        navigate(`/blog/:${props.id}`)
    };

    return (
        <Card className={classes.root} sx={{ backgroundImage: `url(${props.bgImage})` }} elevation={0}>
            <CardActionArea onClick={props.noAnimation ? undefined : handleCardClick}>
                <CardContent>
                    <motion.div
                        className={classes.container}
                        whileHover={props.noAnimation ? undefined : { height: 500, justifyContent: "center" }}
                        initial={{ height: 120 }}
                        onMouseEnter={props.noAnimation ? undefined : handleMouseEnter}
                        onMouseLeave={props.noAnimation ? undefined : handleMouseLeave}
                    >
                        <motion.div initial={"initial"}
                            className={isHovered ? classes.innerContainerHovered : classes.innerContainer}
                            animate={isHovered ? "hovered" : "initial"}
                            variants={childVariants}
                            transition={{ duration: 0.3 }}>

                            <motion.div className={classes.headerContainer} initial={{ opacity: 0 }}
                                animate={{ opacity: isHovered ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ display: isHovered ? "flex" : "none" }}>

                                <motion.span className={classes.titleText}
                                >
                                    {props.category}
                                </motion.span>

                                <motion.span className={classes.baseText}>
                                    {props.updateDate}
                                </motion.span>
                            </motion.div>

                            <motion.h2>{props.title}</motion.h2>

                            <motion.span className={classes.baseText} initial={{ opacity: 0 }}
                                animate={{ opacity: isHovered ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ display: isHovered ? "initial" : "none" }}
                            >
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </motion.span>

                        </motion.div>
                        <motion.div className={classes.readBtn} initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}>Read More
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

export default BlogCard;
