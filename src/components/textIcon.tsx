import { Typography, Stack } from "@mui/material"
import { ReactElement } from "react"
type TextIconProps = {
    icon: ReactElement;
    label: string;
    variant?: string;
}

const TextIcon = (props: TextIconProps) => {
    return <Stack direction={props.variant === "secondary" ? "column" : "row"} spacing={2}>
        <Stack alignItems={"center"} justifyContent={"center"} sx={{
            border: props.variant === "secondary" ? "none" : "2px solid #4F9A0A",
            borderRadius: 2,
            width: 32,
            height: 32,
            backgroundColor: props.variant === "secondary" && "primary.main",
            color: props.variant === "secondary" && "white",
        }} >
            {props.icon}
        </Stack>
        <Typography textAlign={"start"} sx={{ fontWeight: props.variant === "secondary" && "bold", fontSize: props.variant === "secondary" && 24 }}>{props.label}</Typography>
    </Stack>
}

export default TextIcon