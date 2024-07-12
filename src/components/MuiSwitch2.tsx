import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,

} from "@mui/material";

function MuiSwitch2() {
  const [checked, setChecked] = useState(false);



  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }
console.log(checked, "checked")

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={<Switch checked={checked} onChange={handleChange} />}
        />
      </Box>
    </Box>
  );
}

export default MuiSwitch2;
