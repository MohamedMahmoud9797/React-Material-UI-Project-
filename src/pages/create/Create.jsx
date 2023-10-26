import { Button, InputAdornment, TextField, Box, styled } from "@mui/material";
import "./Create.css";
import React from "react";
import { lightBlue, purple } from "@mui/material/colors";
import { useState } from "react";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[200]),
  backgroundColor: lightBlue[50],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);

  return (
    <>
      <Box
        sx={{
          width: "380px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
      >
        {" "}
        <TextField
          onChange={(e) => {
            settitle(e.target.value);
          }}
          fullWidth
          label="Transaction Title"
          sx={{ mb: 1, mt: 3, display: "block" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
          variant="filled"
        />
        <TextField
          onChange={(e) => {
            Number(setprice(e.target.value));
          }}
          fullWidth
          label="Transaction Amount"
          sx={{ mb: 1, mt: 3 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />
        <ColorButton
          variant="contained"
          onClick={(params) => {
            fetch("http://localhost:3100/mydata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ price, title }),
            });
          }}
        >
          Custom CSS
        </ColorButton>
      </Box>
    </>
  );
};

export default Create;
