import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox
} from "@mui/material";

function MuiCheckBox() {
  const [acceptTnc, setAcceptTnC] = useState(false);


  console.log(acceptTnc, "acceptTnc")

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAcceptTnC(event.target.checked);
  }


  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
        />
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
