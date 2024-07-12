import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const skills = ["HTML", "CSS", "JAVASCRIPT", " TYPESCRIPT", "REACT"];

function AutoComplete() {
  const [skill, setSkill] = useState<string | null>(null);

  console.log(skill, "skill");

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills"/>}
        onChange={(e, newValue) => setSkill(newValue)}
        value={skill}
        // freeSolo
      />
    </Stack>
  );
}

export default AutoComplete;
