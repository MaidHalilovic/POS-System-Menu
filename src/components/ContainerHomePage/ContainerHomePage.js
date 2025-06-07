import axios from "axios";
import React, { useEffect, useState } from "react";
import "./containerHomePage.css";

const ContainerHomePage = () => {
  const [menu, setMenu] = useState([]);
  const [number, setNumber] = useState(0);

  const fetchMenu = async () => {
    try {
      const { data } = await axios.get(
        `https://free-food-menus-api-two.vercel.app/burgers `
      );

      console.log(data);
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

      {menu && menu.length > 0 ? (
        <>
          <div className='meals'>
            <img
              src={menu[0].img}
              alt='img'
              style={{ width: 100, height: 100 }}
            />
            <h3>{menu[0].name}</h3>
            <div className='addFood'>
              <div className='price'>
                <p>Price:</p>
                <p style={{ color: "orange" }}>${menu[0].price}</p>
              </div>
              <div className='addMoreFood'>
                <button onClick={() => setNumber(number + 1)}>+</button>
                {number}
                <button onClick={() => setNumber(number - 1 ? 0 : 0)}>-</button>
              </div>
            </div>
          </div>
          <div className='meals'>
            <img
              src={menu[1].img}
              alt='img'
              style={{ width: 100, height: 100 }}
            />
            <h3>{menu[1].name}</h3>
            <div className='price'>
              <p>Price:</p>
              <p style={{ color: "orange" }}>${menu[1].price}</p>
            </div>
            <div className='addMoreFood'>
              <button onClick={() => setNumber(number + 1)}>+</button>
              {number}
              <button onClick={() => setNumber(number - 1 ? 0 : 0)}>-</button>
            </div>
          </div>
        </>
      ) : (
        <p>Učitavanje...</p>
      )}
    </div>
  );
};

export default ContainerHomePage;
