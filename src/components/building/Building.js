import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Elevator from "../elevator/Elevator";

export default function Building({ floor, duration, currentFloor, open }) {
  const floorNumbers = [0, 1, 2, 3, 4, 5];
  const floors = floorNumbers.map((floor, index) => (
    <Box
      sx={{ height: "94px", background: "green", border: "3px solid" }}
    ></Box>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          {floors}
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ position: "relative", height: "600px" }}>
            <Elevator
              floor={floor}
              duration={duration}
              currentFloor={currentFloor}
              open={open}
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          {floors}
        </Grid>
      </Grid>
    </Box>
  );
}
