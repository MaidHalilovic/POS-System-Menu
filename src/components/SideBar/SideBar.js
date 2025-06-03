import React from "react";
import "./sideBar.css";
import { HiOutlineHome } from "react-icons/hi";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GoBellFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='item' onClick={() => navigate("/")}>
        <span className='icon'>
          <HiOutlineHome />
        </span>
        <span className='text'>HOME</span>
      </div>
      <div className='item' onClick={() => navigate("/Menu")}>
        <span className='icon'>
          <BiSolidFoodMenu />
        </span>
        <span className='text'>MENU</span>
      </div>
      <div className='item' onClick={() => navigate("/Orders")}>
        <span className='icon'>
          <GoBellFill />
        </span>
        <span className='text'>ORDERS</span>
      </div>
    </div>
  );
};

export default SideBar;
