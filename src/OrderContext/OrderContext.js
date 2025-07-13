import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

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

  return (
    <OrderContext.Provider value={{ order, addToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
