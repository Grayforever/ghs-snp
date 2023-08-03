import { Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import CustomSelect from "../../components/customSelect";
import RegionalHook, { ButtonTypes, RegionalProps } from "./regionalHook";
import { useSharedState } from "../../context/sharedSlateContext";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiToggleButtonGroup-grouped": {
      margin: 10,
      border: 0,
      "&.Mui-disabled": {
        border: 0,
      },
      "&:not(:first-of-type)": {
        borderRadius: 0,
      },
      "&:first-of-type": {
        borderRadius: 0,
      },
    },
    "& .MuiButtonBase-root.MuiToggleButton-root": {
      backgroundColor: "#D4F7E8",
      color: "#4F9A0A",
      fontSize: 10,
      textTransform: "capitalize",
      whiteSpace: "nowrap",
      "&.Mui-selected": {
        backgroundColor: "#4F9A0A",
        color: "#FFFFFF",
      },
    },
  },
}));

const RegionalBanner: React.FC<RegionalProps> = ({
  regionalHook = RegionalHook(),
}) => {
  const classes = useStyles();
  const {
    toggleButtons,
    regions,
  }: {
    toggleButtons: ButtonTypes[];
    regions: string[];
  } = regionalHook;

  const { sharedState, setSharedState } = useSharedState();

  const handleChange = (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string
  ): void => {
    setSharedState(value);
  };

  const handleSelect = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  return (
    <Stack sx={{ width: "100%" }}>
      <CustomSelect
        items={regions}
        onSelect={handleSelect}
        defaultValue={regions[0]}
      />

      <ToggleButtonGroup
        color="primary"
        className={classes.root}
        value={sharedState}
        exclusive
        sx={{ overflowX: "auto" }}
        onChange={handleChange}
        aria-label="Headers"
        size="small"
      >
        {toggleButtons.map((item) => (
          <ToggleButton key={item.value} value={item.value}>
            {item.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default RegionalBanner;
