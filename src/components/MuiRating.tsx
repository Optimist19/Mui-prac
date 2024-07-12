import React, { useState } from "react";
import { Rating, Stack } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

function MuiRating() {
  const [ratings, setRatings] = useState<number | null>(3);

  console.log(ratings, "ratings");

  function onChangeRate(e: React.ChangeEvent<{}>, newValue: number | null) {
    setRatings(newValue);
  }
  return (
    <Stack>
      <Stack spacing={2}>
        <Rating onChange={onChangeRate} />
        {ratings}
      </Stack>

      <Stack spacing={2}>
        <Rating onChange={onChangeRate} precision={0.5}/>
        {ratings}
      </Stack>

      <Stack spacing={2}>
        <Rating onChange={onChangeRate} icon={<FavoriteBorder />} />
      </Stack>

      <Stack spacing={2}>
        <Rating onChange={onChangeRate} readOnly />
        {ratings}
      </Stack>
	  
      <Stack spacing={2}>
        <Rating onChange={onChangeRate} highlightSelectedOnly/>
        {ratings}
      </Stack>
    </Stack>
  );
}

export default MuiRating;
