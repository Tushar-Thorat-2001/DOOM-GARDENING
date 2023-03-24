import React from "react";

import { Box, Typography, Avatar, Grid } from "@mui/material";

const Testimonials = () => {
  return (
    <>
      <Box sx={{ mx: "10%", my: "5%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" alignItems={"center"}>
            See What satisfied customers are saying about us
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Box sx={{ display: "flex", my: 5 }}>
            <Grid item xs={12} md={6}>
              <Box display={"flex"}>
                <Avatar alt="Remy Sharp" src="/img/women.jpg" />
                <Box mx={2}>
                  <Typography variant="h5" fontWeight="bold">
                    5' Desgin & Functionality
                  </Typography>
                  <Box my={1}>
                    <Typography>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nemo natus dolore autem quibusdam aspernatur quis quam,
                      dolorum iste, veritatis molestias porro eius quisquam
                      voluptates consequuntur dicta quae voluptate fuga. Maxime.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display={"flex"}>
                <Avatar alt="Remy Sharp" src="/img/men.jpg" />
                <Box mx={2}>
                  <Typography variant="h5" fontWeight="bold">
                    Easy and user friendly item
                  </Typography>
                  <Box my={1}>
                    <Typography>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nemo natus dolore autem quibusdam aspernatur quis quam,
                      dolorum iste.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Testimonials;
