import { Box, Paper } from "@mui/material";
import BannerBg from "../assets/images/banner_img.png"
import { ReactElement } from "react";
const bannerStyle = {
    backgroundImage: `url(${BannerBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: 120,
    position: "relative",
}

const headerStyle = {
    display: "flex",
    backgroundColor: "white",
    position: "absolute",
    left: { xs: 20, md: 32, },
    right: { xs: 20, md: 32, },
    bottom: { xs: -50, md: -50, },
    height: 100,
    alignItems: "center",
    padding: "0% 24%"
}


export const Banner = ({ children }: { children: ReactElement | undefined }) => {
    return (
        <Box sx={bannerStyle}>
            <Box component={Paper} sx={headerStyle}>
                {children}
            </Box>
        </Box>
    );
};

export default Banner;
