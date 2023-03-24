import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography, Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
const Head = () => {
  return (
    <Box
      sx={{
        bgcolor: "#A0D995",
        display: { xs: "none", md: "flex" },
        justifyContent: "space-between",
        position: "sticky",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <PlaceIcon sx={{ paddingLeft: 2 }} />
        <Typography>42 Queens Road 0TE</Typography>

        <MailOutlineIcon sx={{ paddingLeft: 2 }} />
        <Typography> milothemes@gmail.com</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <FacebookIcon sx={{ px: 1 }} />
        <TwitterIcon sx={{ px: 1 }} />
        <InstagramIcon sx={{ px: 1 }} />
        <LinkedInIcon sx={{ px: 1 }} />
        <Typography bgcolor=" #8A2BE2" sx={{ px: 1 }}>
          <LocalPhoneIcon />
          +45 782412360
        </Typography>
      </Box>
    </Box>
  );
};

export default Head;
