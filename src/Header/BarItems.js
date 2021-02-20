import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./BarItems.css";
import { Covid19Context } from "../Context/Context";

const BarItems = () => {
  const { isOpen } = useContext(Covid19Context);
  return (
    <>
      {isOpen && (
        <div className="baritems">
          <Link to="/articles">Article</Link>
          <Link to="/vaccine">vaccine</Link>
          <Link to="/prevention">prevention</Link>
          <Link to="/why">why?</Link>
        </div>
      )}
    </>
  );
};

export default BarItems;
