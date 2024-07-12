//The idea for checkbox is used for Switch. You just have to change the Checkbox component to Switch component

import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormLabel,
  FormGroup
} from "@mui/material";

function MuiSwitch1() {
  const [acceptTnc, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log(acceptTnc, "acceptTnc")
  console.log(skills, "skills")

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAcceptTnC(event.target.checked);
  }
  function handleSkillChange(event: React.ChangeEvent<HTMLInputElement>) {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={<Switch checked={acceptTnc} onChange={handleChange} />}
        />
      </Box>
      <Box>
		<FormControl>
			<FormLabel>Skills</FormLabel>
			<FormGroup>
				<FormControlLabel label="HTML" control={<Switch value="html" checked={skills.includes("html")} onChange={handleSkillChange}/>}>

				</FormControlLabel>
				<FormControlLabel label="CSS" control={<Switch value="css" checked={skills.includes("css")} onChange={handleSkillChange}/>}>

				</FormControlLabel>
				<FormControlLabel label="JAVASCRIPT" control={<Switch value="javascript" checked={skills.includes("javascript")} onChange={handleSkillChange}/>}>

				</FormControlLabel>
			</FormGroup>
		</FormControl>
	  </Box>
    </Box>
  );
}

export default MuiSwitch1;
