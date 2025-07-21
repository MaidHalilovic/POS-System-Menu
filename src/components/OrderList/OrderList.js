import React from "react";
import "./orderList.css";
import { MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../OrderContext/OrderContext";

const OrderList = () => {
  const { order, placeOrder } = useOrder();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    placeOrder();
    navigate("/orders");
  };

  const subtotal = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
              <img
                src={item.img}
                alt={item.name}
                className='order-row-img'
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
              />
              <span>{item.name}</span>
              <span>x{item.quantity}</span>
              <span
                style={{
                  marginLeft: "auto",
                  color: "#ff5a00",
                  fontWeight: "bold",
                }}
              >
                ${item.price * item.quantity}
              </span>
            </div>
          ))
        )}
      </div>
      <div className='orderPrice'>
        <p>
          SubTotal:{" "}
          <span style={{ color: "#ff5a00", fontWeight: "bold" }}>
            ${subtotal}
          </span>
        </p>
        <p>
          Total:{" "}
          <span style={{ color: "#ff5a00", fontWeight: "bold" }}>
            ${subtotal}
          </span>
        </p>
        <div className='payments'>
          <button onClick={handlePlaceOrder}>
            <MdPayment /> Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
