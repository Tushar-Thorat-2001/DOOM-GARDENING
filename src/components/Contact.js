import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Doomdata from "../Data/Doom";
import PlaceIcon from "@mui/icons-material/Place";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Footer from "./Footer";
const Contact = () => {
  const data = Doomdata.map((e) => e);
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundImage: `url(${data[4].img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              opacity: "0.8",
              height: 350,
            }}
          >
            <Box
              position={"absolute"}
              sx={{
                mx: 30,
                my: 5,
              }}
            >
              <Card sx={{ bgcolor: " #8A2BE2", color: "white" }}>
                <CardContent>
                  <Typography variant="h3" component="div" py={1}>
                    DOOM
                  </Typography>
                  <Typography variant="h6" py={1}>
                    <PlaceIcon />
                    42 Queens Road 0TE
                  </Typography>
                  <Typography variant="h6" py={1}>
                    <MailOutlineIcon />
                    milothemes@gmail.com
                  </Typography>
                  <Typography variant="h6" py={1}>
                    <LocalPhoneIcon />
                    +45 782412360
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundImage: `url(${data[7].img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              opacity: "0.8",
            }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
