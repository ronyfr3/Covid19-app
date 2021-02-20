import React, { useContext } from "react";
import { Covid19Context } from "../Context/Context";
import './CountryHeader.css'

const CountryHeader = () => {
  const { countrydata } = useContext(Covid19Context);
  function formatted_date() {
    var result = "";
    var d = new Date();
    result +=
      d.getFullYear() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getDate() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds();
    return result;
  }

  // console.log(formatted_date());

  return (
    <div className='country-header'>
      {/*country covid19 cases */}
      <p className='country-case'>{countrydata.country} Covid19 Cases</p>
      {/* update date */}
      <div className='date-formated'>
        <span className='update-date'>Update Date:- </span>
        <span className='date-time'>{formatted_date()}</span>
      </div>
    </div>
  );
};

export default CountryHeader;
