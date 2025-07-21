import React, { createContext, useContext, useState } from "react";
import "./orderList.css";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [placedOrders, setPlacedOrders] = useState([]);

  const addToOrder = (item) => {
    setOrder((prev) => {
      const found = prev.find((o) => o.id === item.id);
      if (found) {
        return prev.map((o) =>
          o.id === item.id ? { ...o, quantity: o.quantity + 1 } : o
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const placeOrder = () => {
    if (order.length > 0) {
      setPlacedOrders((prev) => [...prev, order]);
      setOrder([]); // Clear current order after placing
    }
  };

  const deletePlacedOrder = (index) => {
    setPlacedOrders((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        addToOrder,
        placeOrder,
        placedOrders,
        deletePlacedOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const OrderList = () => {
  const { order } = useOrder();

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
            <div
              key={item.id}
              className='order-row'
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <span>{item.name}</span>
              <span>x{item.quantity}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderList;
