import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

// import img1 from "../assets/image.png";

function MuiCard() {
  return (
    <Box my="3vh" px={"4vw"}>
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt="unsplash-image"
        />
        {/* <CardMedia
          component="img"
          height="140px"
          image={img1}
          alt="unsplash-image"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a javascript library for building of single-page or mobile
            applications
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">SHARE</Button>
          <Button size="small">LEARN MORE</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
