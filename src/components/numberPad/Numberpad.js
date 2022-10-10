import * as React from "react";
import Button from "@mui/material/Button";

export default function Numberpad({ onClick, current, ...props }) {
  const floorNumbers = [0, 1, 2, 3, 4, 5];
  const floors = floorNumbers.map((floor, index) => (
    <Button
      {...props}
      disabled={current == floor}
      variant="contained"
      color="success"
      size="large"
      sx={{
        borderRadius: "50%",
        height: "4rem",
        width: "4rem",
        margin: "1rem",
      }}
      onClick={() => onClick(floor)}
    >
      {floor}
    </Button>
  ));

  return <>{floors}</>;
}
