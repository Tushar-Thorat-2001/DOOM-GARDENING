import React from "react";
import Doomdata from "../Data/Doom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function Card1() {
  const data = Doomdata.map((e) => e);
  return (
    <>
      <Box sx={{ mx: { xs: "5%", md: "10%" }, my: { xs: "2%", md: "6%" } }}>
        <Typography variant="body2" color="text.secondary" mx={2}>
          Feature
        </Typography>
        <Grid container direction={"row"} spacing={2}>
          <Grid item md={4} xs={12}>
            <Card sx={{ boxShadow: "none" }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {data[1].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data[1].dec}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  Discover Doom
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={data[2].img}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {data[2].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data[2].dec}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={data[3].img}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {data[3].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data[3].dec}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Card1;
