import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

type ItemType = {
    imageSrc: string
    alt: string
}

const Carousel = ({ items }: { items: [] }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <IconButton onClick={handlePrev}>
                <ArrowBack />
            </IconButton>
            <motion.div
                style={{
                    display: 'flex',
                    overflowX: 'hidden',
                }}
                drag={isSmallScreen ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
            >
                {items.map((item: ItemType, index) => (
                    <motion.div
                        key={index}
                        style={{
                            flex: '0 0 25%',
                            padding: theme.spacing(1),
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
                    >

                        <img src={item.imageSrc} alt={item.alt} width={50} />
                    </motion.div>
                ))}
            </motion.div>
            <IconButton onClick={handleNext}>
                <ArrowForward />
            </IconButton>
        </Box>
    );
};

export default Carousel;
