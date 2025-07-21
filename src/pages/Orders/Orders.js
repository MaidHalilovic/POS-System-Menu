import React from "react";
import "./orders.css";
import { useOrder } from "../../OrderContext/OrderContext";

const Orders = () => {
  const { placedOrders, deletePlacedOrder } = useOrder();

  return (
    <div className='orders-container'>
      <h2>Placed Orders</h2>
      {placedOrders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        placedOrders.map((order, idx) => (
          <div key={idx} className='placed-order'>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3>Order #{idx + 1}</h3>
              <button
                onClick={() => deletePlacedOrder(idx)}
                style={{
                  background: "#ff5a00",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "6px 12px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Delete
              </button>
            </div>
            {order.map((item) => (
              <div key={item.id} className='order-item-row'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='order-item-img'
                />
                <span style={{ fontWeight: "bold" }}>{item.name}</span>
                <span style={{ color: "#1ec773" }}>x{item.quantity}</span>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
