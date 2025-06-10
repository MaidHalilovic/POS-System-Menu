import axios from "axios";
import React, { useEffect, useState } from "react";
import "./containerHomePage.css";
import CircularProgress from "@mui/material/CircularProgress";

const ContainerHomePage = () => {
  const [menu, setMenu] = useState([]);

  const fetchMenu = async () => {
    try {
      const { data } = await axios.get(
        `https://free-food-menus-api-two.vercel.app/burgers `
      );
      console.log("Menu data:", data);

      setMenu(data);
    } catch (error) {
      console.error("Error while fetching products", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div>
      <div className='menu'>
        <h2>Special Menu For You</h2>
      </div>
      <div className='containerHomePage'>
        {menu && menu.length > 0 ? (
          <>
            {menu.map((item, idx) => (
              <div className='meals' key={item.id || idx}>
                <img src={item.img} alt='img' />
                <div className='description'>
                  <h3>{item.name}</h3>
                  <p style={{ color: "orange" }}>${item.price}</p>
                </div>
                <div className='addMoreFood'>
                  <button>+ Add Product</button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <CircularProgress size={40} />
        )}
      </div>
    </div>
  );
};

export default ContainerHomePage;
