import React, { useEffect, useState } from "react";
import "./orderList.css";
import axios from "axios";

const OrderList = () => {
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
    <div className='orderList'>
      <div className='orderList-header'>
        <span>Table 01</span>
      </div>
      <div className='orderItem'></div>
    </div>
  );
};

export default OrderList;
