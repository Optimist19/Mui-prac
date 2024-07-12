import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

function Layout() {
  return (
    <Paper sx={{padding: "32px"}}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light"
            }
          }}>
          Codevolution
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          sx={{
            bgcolor: "success.light", 
            color: "white",
            padding: "16px"
          }}>
          Codevolution
        </Box>
      </Stack>

      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box  p={2} bgcolor="primary.light">Item 1</Box>
        </Grid>
        <Grid item xs={6}>
          <Box  p={2} bgcolor="primary.light">Item 2</Box>
        </Grid>
        <Grid item xs={6}>
          <Box  p={2} bgcolor="primary.light">Item 3</Box>
        </Grid>
        <Grid item xs={6}>
          <Box  p={2} bgcolor="primary.light">Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Layout;
