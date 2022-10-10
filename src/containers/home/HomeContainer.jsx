import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Building from "../../componets/building/Building";
import { Container } from "@mui/material";
import Numberpad from "../../componets/numberPad/Numberpad";



export default function HomeContainer() {
    const [currentFloor, setCurrentFloor]= React.useState(0)
    const [floor, setFloor] = React.useState(currentFloor)
    const [duration, setDuration] = React.useState(0)
    const [open , setOpen] = React.useState(true)
    const onClick = (index) => {
      let duration = Math.abs(currentFloor-index)*1000+3000;
      setOpen(false)
      setTimeout(()=>{
        setFloor(index)
        setDuration((index-currentFloor)*1000)
      },[3000])
      setTimeout(()=>{
        setOpen(true)
      },[duration])
    }



    React.useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentFloor((floor));
          }, duration);
          return () => clearInterval(interval);

    }, [floor])




  return (
    <Container maxWidth="xl">
      <Box sx={{ margin: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Building floor={floor} duration = {duration} currentFloor={currentFloor} open={open}/>
          </Grid>
          <Grid item xs={4}>
            <Numberpad onClick={onClick} current={floor} disabled={!open}/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
