import { SearchOutlined } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";

const LearnBanner = () => (
  <Stack spacing={2} sx={{ width: "100%" }}>
    <TextField
      variant="standard"
      InputProps={{ startAdornment: <SearchOutlined color="primary" /> }}
      placeholder={"Search Item here"}
      sx={{ width: "100%" }}
    />
    <Stack
      direction={"row"}
      spacing={1}
      sx={{ width: "100%" }}
      justifyContent={"space-around"}
    >
      {["All", "Learn", "More", "Other"].map((label) => (
        <Button key={label}>{label}</Button>
      ))}
    </Stack>
  </Stack>
);
export default LearnBanner;
