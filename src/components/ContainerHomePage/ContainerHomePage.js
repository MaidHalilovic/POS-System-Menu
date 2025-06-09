import axios from "axios";
import React, { useEffect, useState } from "react";
import "./containerHomePage.css";

const ContainerHomePage = () => {
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
    <div>
      <div className='menu'>
        <h2>Special Menu For You</h2>
      </div>
      <div className='containerHomePage'>
        {menu && menu.length > 0 ? (
          <>
            {menu.map((item, idx) => (
              <div className='meals' key={item.id || idx}>
                <img src={item.img} alt='img' />
                <h3>{item.name}</h3>
                <div className='price'>
                  <p>Price:</p>
                  <p style={{ color: "orange" }}>${item.price}</p>
                </div>
                <div className='addMoreFood'>
                  <button></button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>Učitavanje...</p>
        )}
      </div>
    </div>
  );
};

export default ContainerHomePage;
