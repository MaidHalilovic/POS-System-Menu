import React, { useEffect, useState } from "react";
import "./orderList.css";
import axios from "axios";
import { MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const OrderList = ({ number, items }) => {
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
        <span>Table {number}</span>
      </div>
      <div className='orderItem'></div>
      <div className='orderPrice'>
        <p>SubTotal</p>

        <p>Total</p>
        <div className='payments'>
          {/* <button onClick={() => navigate("/Orders")}> */}
            <MdPayment /> Place Order
          </button>
          <div className='order-list-wrapper'>
            <OrderList number={number} items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
