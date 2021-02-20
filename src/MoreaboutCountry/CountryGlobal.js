import React, { useContext } from "react";
import { Covid19Context } from "../Context/Context";
import "./CountryGlobal.css";

const CountryGlobal = () => {
  const { world,region,capital,population } = useContext(Covid19Context);
  return (
    <div className="cglobal">
      <div className="more-country">
        <p className='regcappop1'><span className='morespan'>Region:</span> {region}</p>
        <p className='regcappop2'><span className='morespan'>Capital:</span> {capital}</p>
        <p className='regcappop3'><span className='morespan'>Population:</span> {population}</p>
      </div>
      <div className="global-cases">
        <div className="confirm">
          <p className='cgcount'>Confirmed</p>
          <p className='worldcasdere'>{world.cases}</p>
        </div>
        <div className="death">
          <p className='cgcount'>Deaths</p>
          <p className='worldcasdere'>{world.deaths}</p>
        </div>
        <div className="recover">
          <p className='cgcount'>Recovered</p>
          <p className='worldcasdere'>{world.recovered}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryGlobal;
