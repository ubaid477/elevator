import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Elevator from "../elevator/Elevator";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import SensorWindowIcon from '@mui/icons-material/SensorWindow';

export default function Building({ floor, duration, currentFloor, open }) {
  const floorNumbers = [0, 1, 2, 3, 4, 5];
  const floors = floorNumbers.map((floor, index) => (
    <Box
      sx={{
        height: "118px",
        background: "#C4A484",
        borderBottom: "2px solid white",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <DoorSlidingIcon
            sx={{ fontSize: "100px", color: "#5C4033", marginTop: "28px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <SensorWindowIcon
            sx={{ fontSize: "60px", color: "#954535", marginTop: "30px" }}
          />
        </Grid>
        
      </Grid>
    </Box>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{ height: "75px", background: "grey", marginBottom: "0px" }}
          ></Box>
        </Grid>
        <Grid item xs={5}>
          {floors}
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              position: "relative",
              height: "600px",
              marginLeft: "0.75rem",
              marginRight: "0.75rem",
            }}
          >
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
