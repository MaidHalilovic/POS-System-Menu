import React from "react";
import "./menu.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useMenu } from "../../MenuContext/MenuContext";
import { useOrder } from "../../OrderContext/OrderContext";
import OrderList from "../../components/OrderList/OrderList";

const Menu = () => {
  const { menu, loading } = useMenu();
  const { addToOrder } = useOrder();

  return (
    <div style={{ display: "flex" }}>
      <div className='menu'>
        {!loading && menu.length > 0 ? (
          <>
            {menu.map((item, idx) => (
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
                  <button onClick={() => addToOrder(item)}>
                    + Add on Table
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <CircularProgress size={40} />
        )}
      </div>
      <OrderList />
    </div>
  );
};

export default Menu;
