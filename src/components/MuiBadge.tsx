import { MailLock } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

function MuiBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailLock />
      </Badge>

      <Badge badgeContent={0} color="secondary" showZero>
        <MailLock />
      </Badge>
      <Badge badgeContent={100} max={999} color="primary">
        <MailLock />
      </Badge>
      <Badge invisible={false} variant="dot" color="primary">
        <MailLock />
      </Badge>
      <Badge invisible={true} variant="dot" color="primary">
        <MailLock />
      </Badge>
    </Stack>
  );
}

export default MuiBadge;
