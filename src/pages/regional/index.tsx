import { Stack, Box } from "@mui/material";
import RegionalHook, { RegionalProps, TableDataTypes } from "./regionalHook";
import EnhancedTable from "../../components/enhancedTable";
import React from "react";
import { SharedStateType } from "../../context/sharedSlateContext";

const Regional: React.FC<RegionalProps> = ({
  regionalHook = RegionalHook(),
}) => {
  const {
    sharedState,
    tableData,
  }: { sharedState: SharedStateType; tableData: TableDataTypes } = regionalHook;

  function getTable(): React.ReactNode {
    switch (sharedState) {
      case "facilities":
        return <EnhancedTable data={tableData[sharedState]} />;
      case "reports":
        return <EnhancedTable data={tableData[sharedState]} />;
      case "districts":
        return <EnhancedTable data={tableData[sharedState]} />;
      default:
        return <EnhancedTable data={tableData.districts} />;
    }
  }

  return (
    <Box pt={24} pb={{ xs: 6, md: 12 }}>
      <Stack mx={{ xs: 2, md: 5 }}>{getTable()}</Stack>
    </Box>
  );
};

export default Regional;
