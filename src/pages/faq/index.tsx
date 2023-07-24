import { Box, Grid, Stack, } from "@mui/material";
import FaqCard from "./faqCard";
import { useNavigate } from "react-router-dom";


const Faq = () => {
    const navigate = useNavigate()
    function handleClick(index: number) {
        navigate(`/faq/:${index}`)
    }
    return <Box pt={24} pb={12}>
        <Stack mx={5} spacing={6}>
            <Grid container spacing={4}>
                {Array.from({ length: 6 }, (_, index) => `Item ${index + 1}`).map((item, index) =>
                (<Grid item md={4} key={item}>
                    <FaqCard title="Question Category" subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
                        onClick={() => handleClick(index + 1)} />
                </Grid>))}
            </Grid>
        </Stack>
    </Box>
};

export default Faq;