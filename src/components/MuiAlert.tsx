import React from "react";
import { Stack, Alert, AlertTitle } from "@mui/material";

function MuiAlert() {
  return (
    <>
      <Stack>
        <Alert severity="error">This is an error alert</Alert>
        <Alert severity="warning">This is an warning alert</Alert>
        <Alert severity="info">This is an info alert</Alert>
        <Alert severity="success">This is an success alert</Alert>
      </Stack>

      <br />
      <br />

      <Stack>
        <Alert variant="outlined" severity="error">
          This is an error alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is an warning alert
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an info alert
        </Alert>
        <Alert variant="outlined" severity="success">
          This is an success alert
        </Alert>
      </Stack>
      <br />
      <br />
      <Stack>
        <Alert variant="filled" severity="error" onClose={()=> alert("Close alert")}>
			<AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>
        
        <Alert variant="filled" severity="warning">
		<AlertTitle>warning</AlertTitle>

          This is an warning alert
        </Alert>
        <Alert variant="filled" severity="info">
		<AlertTitle>info</AlertTitle>
          This is an info alert
        </Alert>
        <Alert variant="filled" severity="success">
		<AlertTitle>success</AlertTitle>
          This is an success alert
        </Alert>
      </Stack>
    </>
  );
}

export default MuiAlert;
