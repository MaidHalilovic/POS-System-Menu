import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://free-food-menus-api-two.vercel.app/burgers `
      );
      setMenu(data);
    } catch (error) {
      console.error("Error while fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <MenuContext.Provider value={{ menu, fetchMenu, loading }}>
      {children}
    </MenuContext.Provider>
  );
};