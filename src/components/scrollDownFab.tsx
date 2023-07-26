import { ArrowDownwardRounded } from "@mui/icons-material";
import { Fab } from "@mui/material";

const ScrollDownFab = () => {
  return (
    <Fab
      sx={{
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(30)",
        WebkitBackdropFilter: "blur(30)",
        color: "white",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(30)",
          WebkitBackdropFilter: "blur(30)",
        },
      }}
    >
      <ArrowDownwardRounded />
    </Fab>
  );
};

export default ScrollDownFab;
