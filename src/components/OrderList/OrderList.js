import React, { useEffect, useState } from "react";
import "./orderList.css";
import axios from "axios";
import { MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();

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
        <span>Table</span>
        <span style={{ color: "black" }}>Go to menu to order </span>
      </div>
      <div className='orderItem'></div>
      <div className='orderPrice'>
        <p>SubTotal:</p>

        <p>Total:</p>
        <div className='payments'>
          <button onClick={() => navigate("/Orders")}>
            <MdPayment /> Place Order
          </button>
          {/* <div className='order-list-wrapper'>
            <OrderList />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
