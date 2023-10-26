import { Typography, useTheme } from "@mui/material";
import React from "react";

const NotFound = () => {
  const theme = useTheme();

  return (
    <Typography variant="h1" color={theme.palette.error.main}>
      404 FOund
    </Typography>
  );
};

export default NotFound;
