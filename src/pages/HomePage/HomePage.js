import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [menu, setMenu] = useState(null);

  const fetchMenu = async () => {
    try {
      const { data } = await axios.get(`https://api.sampleapis.com/coffee/hot`);

      console.log(data);
      setMenu(data);
    } catch (error) {
      console.error("Error while fetching products", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
