import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio
} from "@mui/material";
import React, { useState } from "react";
Box;
function MuiRadioButton() {
	const [state, setState] = useState("")

	function handleRadioButton(e: React.ChangeEvent<HTMLInputElement>){
		setState(e.target.value)
	}

	console.log(state)

  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience">Years of Experience</FormLabel>

        <RadioGroup onChange={handleRadioButton}>
          <FormControlLabel control={<Radio />} label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="2-5"
            value="2-5"
          />
          <FormControlLabel control={<Radio />} label="6-10"
            value="6-10"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default MuiRadioButton;
