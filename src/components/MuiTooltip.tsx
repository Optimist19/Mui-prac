import React from "react";
import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
function MuiTooltip() {
  return (
    <>
      <Tooltip
        title="Delete"
        placement="right"
        arrow
        enterDelay={500}
        leaveDelay={200}>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Delete">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default MuiTooltip;
