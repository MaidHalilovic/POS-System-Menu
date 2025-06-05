import axios from "axios";
import React, { useEffect, useState } from "react";
import "./homePage.css";

const HomePage = () => {
  const [menu, setMenu] = useState(null);

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
    <div className='homePage'>
      <div className='menu'>
        <h2>Special Menu For You</h2>
      </div>
      <div className='cards'>
        {menu.map((index, el) => (
          <div className='card' key={index}>
            <h1>{el[0].id}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
