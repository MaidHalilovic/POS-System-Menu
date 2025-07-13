import React from "react";
import "./orderList.css";
import { MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../OrderContext/OrderContext";

const OrderList = () => {
  const { order } = useOrder();
  const navigate = useNavigate();

  return (
    <div className='orderList'>
      <div className='orderList-header'>
        <span>Table</span>
      </div>
      <div className='orderItem'>
        {order.length === 0 ? (
          <p>No products added.</p>
        ) : (
          order.map((item) => (
            <div key={item.id} className='order-row'>
              <span>{item.name}</span>
              <span>x{item.quantity}</span>
            </div>
          ))
        )}
      </div>
      <div className='orderPrice'>
        <p>SubTotal:</p>
        <p>Total:</p>
        <div className='payments'>
          <button onClick={() => navigate("/Orders")}>
            <MdPayment /> Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
