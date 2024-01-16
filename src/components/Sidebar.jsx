import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import mushroom from "./../assets/img/mushroom.png";

const Sidebar = () => {
  const location = useLocation();

  const isNavActive = (path) => {
    return path === location.pathname;
  };

  return (
    <div className="flex list-none font-mario-hollow font-semibold sm:text-xl text-[0.8rem] sm:leading-[3.2rem] sm:pt-[17vh] pt-4 pl-[3vw] sm:w-1/3 sm:flex-col justify-around">
      <div className="flex sm:flex-row flex-col w-full items-center">
        <NavLink className={isNavActive("/") ? "text-red-500" : ""} to="/">
          Home
        </NavLink>
        {isNavActive("/") && (
          <img className="p-2 sm:w-[16rem] w-[2.5rem]" src={mushroom} alt="" />
        )}
      </div>
      <div className="flex sm:flex-row flex-col w-full items-center">
        <NavLink className={isNavActive("/skills") ? "text-red-500" : ""} to="/skills">
          Skills
        </NavLink>
        {isNavActive("/skills") && (
          <img className="p-2 sm:w-[15rem] w-[2.5rem]" src={mushroom} alt="" />
        )}
      </div>
      <div className="flex sm:flex-row flex-col w-full items-center">
        <NavLink className={isNavActive("/projects") ? "text-red-500" : ""} to="/projects">
          Projects
        </NavLink>
        {isNavActive("/projects") && (
          <img className="p-2 sm:w-[13rem] w-[2.5rem]" src={mushroom} alt="" />
        )}
      </div>
      <div className="flex sm:flex-row flex-col w-full items-center">
        <NavLink className={isNavActive("/about") ? "text-red-500" : ""} to="/about">
          About
        </NavLink>
        {isNavActive("/about") && (
          <img className="p-2 sm:w-[15rem] w-[2.5rem]" src={mushroom} alt="" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
