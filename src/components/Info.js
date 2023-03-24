import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import Infodata from "../Data/Infodata";

const Information = () => {
  return (
    <>
      <Box
        sx={{
          w: "100%",
          mx: 18,
          my: 5,
        }}
      >
        <Grid container spacing={2}>
          {Infodata.map((value, index) => (
            <Grid item md={4} xs={6} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "none",
                }}
              >
                <Box padding={1} sx={{ fontSize: "large" }}>
                  {value.icon}
                </Box>
                <Box>
                  <Typography variant="h6" color="text.secondary">
                    {value.title}
                  </Typography>
                  <Typography fontWeight="bold">{value.dec}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Information;
