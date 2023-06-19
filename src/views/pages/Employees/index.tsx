import { Grid } from "@mui/material";

export const Employee = () => {
  return (
    <Grid
      container
      item
      xs={12}>
      <Grid container>
        <Grid xs={6}>Nome</Grid>
        <Grid xs={6}>Email</Grid>
      </Grid>
    </Grid>
  );
};
