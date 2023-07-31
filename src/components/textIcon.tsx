import { Typography, Stack, StackProps } from "@mui/material";
import { ReactElement } from "react";
type TextIconProps = {
  icon: ReactElement;
  label: string;
  variant?: string;
} & StackProps;

const TextIcon = (props: TextIconProps) => {
  return (
    <Stack
      direction={props.variant === "secondary" ? "column" : "row"}
      spacing={2}
      alignItems={props.alignItems}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          border: props.variant === "secondary" ? "none" : "2px solid #4F9A0A",
          borderRadius: 2,
          width: 32,
          height: 32,
          backgroundColor:
            props.variant === "secondary" ? "primary.main" : "initial",
          color: props.variant === "secondary" ? "white" : "initial",
        }}
      >
        {props.icon}
      </Stack>
      <Typography
        textAlign={props.textAlign}
        sx={{
          fontWeight: props.variant === "secondary" ? "bold" : "initial",
          fontSize: props.variant === "secondary" ? 24 : "initial",
        }}
      >
        {props.label}
      </Typography>
    </Stack>
  );
};

export default TextIcon;
