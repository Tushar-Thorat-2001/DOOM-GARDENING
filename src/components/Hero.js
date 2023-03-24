import { Box, Paper, Typography, Grid } from "@mui/material";
import React from "react";
import Doomdata from "../Data/Doom";
import Header from "./Header";
import BasicCard from "./Card0";
const Hero = () => {
  const bannerinfo = Doomdata.find((e) => e.id === 1);

  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${bannerinfo.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            height: 650,
            opacity: "0.8",
          }}
        >
          <Header />

          <Box
            sx={{
              alignItems: "center",
              paddingTop: "10%",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "white",
                textShadow: "2px 2px 4px #000000;",
                fontWeight: "bolder",
                fontSize: {
                  lg: "7rem",
                  md: "5rem",
                  sm: "5rem",

                  xs: "2rem",
                },
              }}
            >
              {bannerinfo.title}
            </Typography>

            <Typography
              sx={{
                color: "white",
                textShadow: "2px 2px 4px #000000;",
                paddingTop: 0.2,
                fontSize: {
                  lg: "4rem",
                  md: "2rem",
                  sm: "2rem",

                  xs: "1.2rem",
                },
              }}
            >
              {bannerinfo.info}
            </Typography>
            <Typography
              sx={{
                color: "white",
                textShadow: "2px 2px 4px #000000;",
                paddingTop: 1,
                textAlign: "center",
                width: {
                  lg: "40%",
                  md: "25%",
                  xs: "50%",
                },
                fontSize: {
                  lg: "1rem",
                  md: "1rem",

                  xs: "6px",
                },
              }}
            >
              {bannerinfo.dec}
            </Typography>
          </Box>
        </Box>
        <Box
          position={"relative"}
          bottom={45}
          width={{ md: "100%", xs: "50%" }}
        >
          <BasicCard />
        </Box>
      </Box>
    </>
  );
};

export default Hero;
