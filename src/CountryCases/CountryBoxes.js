import React, { useContext } from "react";
import { Covid19Context } from "../Context/Context";
import "./CountryBoxes.css";

const CountryBoxes = () => {
  const { countrydata,flag } = useContext(Covid19Context);
  return (
    <div className="country-boxes">
      <div className="country-wrapper">
        <div className="boxes1">
          <div className="box1">
            <div>
              <p className='ptag'>Active</p>
              <p>{countrydata.active}</p>
            </div>
            <div>
              <p className='ptag'>Total Cases</p>
              <p>{countrydata.cases}</p>
            </div>
          </div>
          <div className="box2">
            <div>
              <p className='ptag'>Critical</p>
              <p>{countrydata.critical}</p>
            </div>
            <div>
              <p className='ptag'>Total Deaths</p>
              <p>{countrydata.deaths}</p>
            </div>
          </div>
        </div>
        <div className="boxes2">
          <div className="box3">
            <div>
              <p className='ptag'>Recovered</p>
              <p>{countrydata.recovered}</p>
            </div>
            <div>
              <p className='ptag'>Today Cases</p>
              <p>{countrydata.todayCases}</p>
            </div>
          </div>
          <div className="box4">
            <div>
              <p className='ptag'>Today Deaths</p>
              <p>{countrydata.todayDeaths}</p>
            </div>
            <div>
              <p className='ptag'>Total Tests</p>
              <p>{countrydata.totalTests}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="countryflag">
      {flag.length !== 0 && (
        <div className="flags">
          <img src={flag} alt={flag} />
        </div>
      )}
      </div>
    </div>
  );
};

export default CountryBoxes;
