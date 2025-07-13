import React from "react";
import "./homePage.css";
import ContainerHomePage from "../../components/ContainerHomePage/ContainerHomePage";
import OrderList from "../../components/OrderList/OrderList";

const HomePage = () => {
  return (
    <div className='homePage' style={{ display: "flex" }}>
      <ContainerHomePage />
      <OrderList />
    </div>
  );
};

export default HomePage;
