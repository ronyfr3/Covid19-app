import React, { useState } from "react";
import { FaUserClock } from "react-icons/fa";
import "./User.css";

const User = () => {
  const [show, setShow] = useState(false);
  const getmailfromlocal =
    JSON.parse(localStorage.getItem("updatecoronabymail")) || [];

  return (
    <div
      className={show ? "usermail" : "radiusmail"}
      onClick={() => setShow(!show)}
    >
      <span className="menclock">
        <FaUserClock />
      </span>
      {show ? <p className="localmail">{getmailfromlocal}</p> : ""}
    </div>
  );
};

export default User;
