import React, { useState } from "react";
import "./header.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../../MenuContext/MenuContext";

const Header = () => {
  const navigate = useNavigate();
  const { menu } = useMenu();
  const [selectedMeal, setSelectedMeal] = useState(null);

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
              id='meal-search'
              freeSolo
              options={menu}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <li
                  {...props}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src={option.img}
                    alt={option.name}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      objectFit: "cover",
                    }}
                  />
                  <span>{option.name}</span>
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label='Search any product...' />
              )}
              onChange={(event, value) => {
                setSelectedMeal(value);
              }}
            />
          </Stack>
        </div>
        {selectedMeal && (
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src={selectedMeal.img}
              alt={selectedMeal.name}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              {selectedMeal.name}
            </span>
          </div>
        )}
        {/* <button>
          <HiMiniNewspaper />
          Add Table
        </button> */}
      </div>
    </div>
  );
};

export default Header;
