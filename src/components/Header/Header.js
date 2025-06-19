import React from "react";
import "./header.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { HiMiniNewspaper } from "react-icons/hi2";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className='mainDiv'>
        <div className='pos'>
          <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <span style={{ color: "#7AC6D2" }}>P</span>
            <span style={{ color: "#E78B48" }}>O</span>
            <span style={{ color: "#67AE6E" }}>S</span>
          </h1>
        </div>
        <div className='search'>
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              id='free-solo-demo'
              freeSolo
              renderInput={(params) => (
                <TextField {...params} label='Search any product...' />
              )}
            />
          </Stack>
        </div>
        <button>
          <HiMiniNewspaper />
          Add Table
        </button>
      </div>
    </div>
  );
};

export default Header;
