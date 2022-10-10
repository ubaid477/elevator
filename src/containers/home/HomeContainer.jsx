import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Paper } from "@mui/material";

import Building from "../../components/building/Building";
import Numberpad from "../../components/numberPad/Numberpad";

export default function HomeContainer() {
  const [currentFloor, setCurrentFloor] = React.useState(0);
  const [floor, setFloor] = React.useState(currentFloor);
  const [duration, setDuration] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const onClick = (index) => {
    let duration = Math.abs(currentFloor - index) * 1000 + 1000;
    setOpen(false);
    setTimeout(() => {
      setFloor(index);
      setDuration((index - currentFloor) * 700);
    }, [1500]);
    setTimeout(() => {
      setOpen(true);
    }, [duration]);
    setTimeout(() => {
      setOpen(false);
    }, [duration + 1500]);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFloor(floor);
    }, duration);
    return () => clearInterval(interval);
  }, [floor]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ margin: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Building
              floor={floor}
              duration={duration}
              currentFloor={currentFloor}
              open={open}
            />
          </Grid>
          <Grid item xs={5}>
            <Paper elevation={0} sx={{display: 'flex', flexDirection: 'column-reverse', alignItems:'center'}}>
            <Numberpad onClick={onClick} current={floor} />
            </Paper>
           
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
