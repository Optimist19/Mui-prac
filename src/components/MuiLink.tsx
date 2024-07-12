import { Stack, Link } from "@mui/material";
import React from "react";

function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Primary</Link>
      <Link variant="body1" href="#">
        Primary
      </Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>

      <Link href="#" color="secondary" underline="none">
        Secondary
      </Link>
      <Link href="#" color="secondary" underline="hover">
        Secondary
      </Link>
    </Stack>
  );
}

export default MuiLink;
