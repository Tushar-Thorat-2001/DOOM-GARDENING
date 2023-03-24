import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
export default function Banner() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#A0D995",
          color: "white",
          textShadow: "1px 2px 1px #000000;",
          fontWeight: "bold",
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mx: { xs: "5%", md: "10%" },
          my: "5%",
        }}
      >
        <Box>
          <Typography variant="h4">Purchase Doom now!</Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut,
          </Typography>
        </Box>
        <Box>
          <Button variant="contained" sx={{ backgroundColor: "#4169E1" }}>
            Discover Doom <PlayArrowOutlinedIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
    </>
  );
}
