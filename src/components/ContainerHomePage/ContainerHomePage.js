import axios from "axios";
import React, { useEffect, useState } from "react";
import "./containerHomePage.css";
import CircularProgress from "@mui/material/CircularProgress";
import OrderList from "../OrderList/OrderList";

const ContainerHomePage = () => {
  const [menu, setMenu] = useState([]);

  const fetchMenu = async () => {
    try {
      const { data } = await axios.get(
        `https://free-food-menus-api-two.vercel.app/burgers `
      );
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
      <div className='main-content-flex'>
        <div className='containerHomePage'>
          {menu && menu.length > 0 ? (
            <>
              {menu.slice(0, 6).map((item, idx) => (
                <div className='meals' key={item.id || idx}>
                  <img src={item.img} alt='img' />
                  <div className='description'>
                    <div className='priceAndName'>
                      <h3>{item.name}</h3>
                      <p style={{ color: "orange" }}>${item.price}</p>
                    </div>
                    <p style={{ color: "gray" }}>{item.dsc}</p>
                  </div>
                  <div className='addMoreFood'>
                    <button>+ Add on Table</button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <CircularProgress size={40} />
          )}
        </div>
        <div className='order-list-wrapper'>
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default ContainerHomePage;
