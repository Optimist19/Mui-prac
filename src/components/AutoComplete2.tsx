import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type Skills = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "JAVASCRIPT", " TYPESCRIPT", "REACT"];

const skillOption = skills.map((skill, i) => {
  return {
    id: i + 1,
    label: skill
  };
});

function AutoComplete2() {
  const [value, setValue] = useState<Skills | null>(null);

  console.log(value, "skill");

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        renderInput={(params) => <TextField {...params} label="Skills" />}
        options={skillOption}
        onChange={(e, newValue) => setValue(newValue)}
		value={value}
		
      />
    </Stack>
  );
}

export default AutoComplete2;
