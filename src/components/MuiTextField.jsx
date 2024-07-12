import { InputAdornment, Stack, TextField } from "@mui/material";

function MuiTextField() {
  return (
    <Stack spacing={4}>
      <statusbar direction="row" spacing={2}>
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
        <TextField label="Name" variant="outlined" />
      </statusbar>

      <Stack>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required color="secondary" />
        <TextField
          label="Form Input"
          required
          color="secondary"
          helperText="Must be 4 characters"
        />
        <TextField
          label="Form Input Read Only"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Form Input"
          required
          color="secondary"
          helperText="Must be 4 characters"
          disabled
        />
      </Stack>

      <Stack>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
          color="secondary"
        />

        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }}
          color="secondary"
          size="small"
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
