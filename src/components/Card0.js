import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import carddata from "../Data/Card0";

export default function BasicCard() {
  return (
    <>
      <Box sx={{ display: "flex", mx: "15%" }}>
        <Card
          sx={{
            width: 400,

            bgcolor: "#A0D995",
          }}
        >
          <CardContent>
            <Typography component="div">{carddata[0].icon}</Typography>

            <Typography variant="h5">{carddata[0].title}</Typography>
            <Typography variant="body1" sx={{ py: 2 }}>
              {carddata[0].dec}
            </Typography>
          </CardContent>
        </Card>
        <Box
          sx={{
            boxShadow: 15,
          }}
        >
          <Card
            sx={{
              width: 420,

              bgcolor: " #8A2BE2",
              borderRadius: "0",
              position: "relative",
              zIndex: 30,
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {carddata[1].icon}
              </Typography>
              <Typography variant="h5">{carddata[1].title}</Typography>
              <Typography variant="body1" sx={{ py: 4 }}>
                {carddata[1].dec}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Card
          sx={{
            width: 400,

            bgcolor: "#A0D995",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {carddata[2].icon}
            </Typography>
            <Typography variant="h5">{carddata[2].title}</Typography>
            <Typography variant="body1" sx={{ py: 2 }}>
              {carddata[2].dec}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
