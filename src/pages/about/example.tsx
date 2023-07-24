import { Variants, motion } from "framer-motion";
import { Card, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccountCircle } from "@mui/icons-material"
import { useState } from "react";

const useStyles = makeStyles(() => ({
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
    },
    rowStack: {
        flexDirection: "row",
    },
}));

const MyComponent = () => {
    const classes = useStyles();
    const [isHovered, setIsHovered] = useState(false);

    const variants: Variants = {
        initial: { flexDirection: "column" },
        active: { flexDirection: "row" },
    };

    const initialVariant = "initial";
    const activeVariant = "active";

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={initialVariant}
            animate={isHovered ? activeVariant : initialVariant}
            variants={variants}
            transition={{ duration: 0.3 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Card className={classes.card}>
                <Stack direction="column" spacing={2}>
                    <motion.div
                        variants={variants}
                        className={classes.rowStack}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={isHovered ? classes.iconHovered : classes.icon}>
                            <AccountCircle />
                        </div>
                        <Typography variant="subtitle1">Text</Typography>
                    </motion.div>
                </Stack>
            </Card>
        </motion.div>
    );
};


export default MyComponent

