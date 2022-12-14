import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const StyledElevator = styled("div")(({ floor, duration }) => ({
  height: "120px",
  background: "yellow",
  position: "absolute",
  top: `${600 - floor * 120}px`,
  transition: duration < 0 ? `${-duration}ms` : `${duration}ms`,
  width: "-webkit-fill-available",
}));

export default function Elevator({ floor, duration, currentFloor, open }) {
  return (
    <StyledElevator floor={floor} duration={duration}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            borderRight: "2px solid black",
            background: "#f1f1f1",
            width: open ? "0px" : "50%",
            transition: "1s ease",
            height: "120px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "5px",
          }}
        >
          <b>I</b>
        </Box>
        <Box
          sx={{
            background: "#f1f1f1",
            width: open ? "0px" : "50%",
            height: "120px",
            transition: "1s ease",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderLeft: "2px solid black",
            paddingLeft: "5px",
          }}
        >
          <b>I</b>
        </Box>
      </Box>
    </StyledElevator>
  );
}
