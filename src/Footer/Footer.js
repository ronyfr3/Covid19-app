import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foo-img">
        <img
          src="https://avatars.githubusercontent.com/u/65207907?s=460&u=372eb1296b50f0645ddf2d78c8dae3ebecf77e33&v=4"
          alt=""
        />
      </div>
      <div className='foos'>
          <p className='rony'>abdur rakib rony</p>
        <p className='foop'>
          Github: <span className="foo">https://github.com/ronyfr3</span>
        </p>
        <p className='foop'>
          Gmail: <span className="foo1">babamarony@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
