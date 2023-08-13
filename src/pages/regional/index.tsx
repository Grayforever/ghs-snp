import { Stack, Box, Snackbar, Button, IconButton } from "@mui/material";
import RegionalHook, { RegionalProps, TableDataTypes } from "./regionalHook";
import EnhancedTable from "../../components/enhancedTable";
import React, { useCallback, useMemo } from "react";
import { SharedStateType } from "../../context/sharedSlateContext";
import { CloseRounded } from "@mui/icons-material";

const Regional: React.FC<RegionalProps> = ({
  regionalHook = RegionalHook(),
}) => {
  const {
    sharedState,
    tableData,
  }: { sharedState: SharedStateType; tableData: TableDataTypes } = regionalHook;
  const [open, setOpen] = React.useState(false);

  const handleDownload = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const action = useMemo(() => {
    return (
      <React.Fragment>
        <Button size="small" onClick={handleClose}>
          Retry Here
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseRounded fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  }, [handleClose]);

  return (
    <Box pt={24} pb={{ xs: 6, md: 12 }}>
      <Stack mx={{ xs: 2, md: 5 }}>
        {sharedState?.toString() === "districts" ? (
          <EnhancedTable
            data={tableData.districts}
            onDownload={handleDownload}
          />
        ) : null}
        {sharedState?.toString() === "innovations" ? (
          <EnhancedTable
            data={tableData.innovations}
            onDownload={handleDownload}
          />
        ) : null}
        {sharedState?.toString() === "facilities" ? (
          <EnhancedTable
            data={tableData.facilities}
            onDownload={handleDownload}
          />
        ) : null}
        {sharedState?.toString() === "reports" ? (
          <EnhancedTable data={tableData.reports} onDownload={handleDownload} />
        ) : null}
      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Download Started"
        action={action}
      />
    </Box>
  );
};

export default Regional;
