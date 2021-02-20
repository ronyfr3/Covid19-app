import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import DarkMood from "../Darkmood/DarkMood";
import {Covid19Context} from '../Context/Context'
import "./Header.css";

const Header = () => {
  const {barOpen} = useContext(Covid19Context)
  return (
    <div className="header">
      <Link to="/" className="coronavirus">
        <span className="corona">CORONA</span>
        <span className="virus">VIRUS</span>
      </Link>
      <DarkMood />
      <div className="articles">
        <Link to="/articles">Article</Link>
        <Link to="/vaccine">vaccine</Link>
        <Link to="/prevention">prevention</Link>
        <Link to="/why">why?</Link>
        <span className="header-span" onClick={barOpen}>
          <FaBars />
        </span>
      </div>
    </div>
  );
};

export default Header;
