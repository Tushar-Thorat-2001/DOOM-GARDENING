import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#A0D995",
          color: "white",
        }}
      >
        <Typography variant="h5">DOOM 2017CC</Typography>
      </Box>
    </>
  );
};

export default Footer;
