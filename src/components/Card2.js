import React from "react";
import Doomdata from "../Data/Doom";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,
} from "@mui/material";

const Card2 = () => {
  const data = Doomdata.map((e) => e);
  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${data[3].img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            height: 650,
            opacity: "0.8",
            overflow: { xs: "auto", md: "visible" },
          }}
        >
          <Box
            sx={{
              mx: { xs: "5%", md: "10%" },
              my: { xs: "2%", md: "6%" },
              paddingTop: "12%",
            }}
          >
            <Grid container direction={"row"} spacing={2}>
              <Grid item md={4} xs={12}>
                <Card sx={{ boxShadow: "none" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={data[4].img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {data[4].title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data[4].dec}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      backgroundColor: "grey",
                      opacity: 0.7,
                    }}
                  >
                    <Typography>UNCATEFORIZED</Typography>
                    <Button variant="contained">
                      <MarkUnreadChatAltIcon />
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
                    image={data[5].img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {data[5].title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data[5].dec}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      backgroundColor: "grey",
                      opacity: 0.7,
                    }}
                  >
                    <Typography>PHOTOGRAPHY</Typography>
                    <Button variant="contained">
                      <MarkUnreadChatAltIcon />
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
                    image={data[6].img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {data[6].title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data[6].dec}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      backgroundColor: "grey",
                      opacity: 0.7,
                    }}
                  >
                    <Typography>DESIGN</Typography>
                    <Button variant="contained">
                      <MarkUnreadChatAltIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Card2;
