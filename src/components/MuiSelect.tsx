import { TextField, Box, MenuItem } from "@mui/material";
import React, { useState } from "react";

function MuiSelect() {
  const [countries, setCountries] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
	const value = e.target.value
    setCountries(typeof value === "string" ? value.split(",") : value);
  }
  console.log(countries)
  return (
    <Box width="250px">
      {/* <TextField label="Select country" value={country} onChange={handleChange} select fullWidth>
        <MenuItem value="A">A</MenuItem>
        <MenuItem value="B">B</MenuItem>
        <MenuItem value="C">C</MenuItem>
      </TextField> */}
      <TextField label="Select country" value={countries} onChange={handleChange} select fullWidth SelectProps={{multiple:true}}>
        <MenuItem value="A">A</MenuItem>
        <MenuItem value="B">B</MenuItem>
        <MenuItem value="C">C</MenuItem>
      </TextField>
    </Box>
  );
}

export default MuiSelect;
