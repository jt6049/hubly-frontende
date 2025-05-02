import React, { use, useEffect } from "react";
import { useState } from "react";
import cnnctlogo from "../assets/Vector.png";
import "../styles/sidebar.css";
import { GoHome } from "react-icons/go";
import { MdOutlineMessage } from "react-icons/md";
import { BiBarChart } from "react-icons/bi";
import { RiRobot3Line } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";



const Sidebar = () => {
  
  

  

  
  

  

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div className="sidebar">
        <div className="allsection">
          <img
            src={cnnctlogo}
            style={{
              width: "70%",
              height: "80%",
              margin: "20px",
            }}
          />
          <div className="buttons">
          <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? 'buttontopic': 'button'
        }
      >
         <GoHome size="25px" />
         
        <p style={{lineHeight:"00px", margin:"0px"}}> Dashboard</p>
      </NavLink>
      <NavLink
        to="/contactcenter"
        className={({ isActive }) =>
          isActive ?'buttontopic': 'button'
        }
      >
        <MdOutlineMessage size="25px"/>
        <p style={{lineHeight:"00px", margin:"0px"}}> Contact Center</p>
      </NavLink>
      <NavLink
        to="/analytics"
        className={({ isActive }) =>
          isActive ?'buttontopic': 'button'
        }
      >
        <BiBarChart size="25px" />
        <p style={{lineHeight:"00px", margin:"0px"}}> Analytics</p>
      </NavLink>
      <NavLink
        to="/chatbot"
        className={({ isActive }) =>
          isActive ? 'buttontopic': 'button'
        }
      >
        <RiRobot3Line size="25px"/>
        <p style={{lineHeight:"00px", margin:"0px"}}> Chat Bot</p>
      </NavLink>
      <NavLink
        to="/team"
        className={({ isActive }) =>
          isActive ?'buttontopic': 'button'
        }
      >
        <RiTeamFill size="25px"/>
        <p style={{lineHeight:"00px", margin:"0px"}}> Team</p>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ?'buttontopic': 'button'
        }
      >
        <CiSettings size="25px"/>
        <p style={{lineHeight:"00px", margin:"0px"}}> Settings</p>
      </NavLink>
          </div>

         
            
        </div>
      </div>

    
    </div>
  );
};

export default Sidebar;
