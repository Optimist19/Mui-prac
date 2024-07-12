import React, { useState } from "react";
import FaceItem from "@mui/icons-material/Face";
import { Avatar, Chip, Stack } from "@mui/material";
import { FaceOutlined } from "@mui/icons-material";

function MuiChip() {
  const [chips, setChips] = useState(["Chip1", "Chip2", "Chip3"]);

  function handleDelete(chipDelete: string) {
    setChips((chips) => chips.filter((chip) => chip !== chipDelete));
  }
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceOutlined />} />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete handler called")}
      />

      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
}

export default MuiChip;
