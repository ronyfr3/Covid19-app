import React, { createContext, useEffect, useState } from "react";
//https://restcountries.eu/#api-endpoints-all
/* <img src={`https://www.countryflags.io/${flag[0].alpha2Code}/flat/64.png`}></img> */

export const Covid19Context = createContext();

const Context = (props) => {
  // start of main.js component value
  let localstogaeData =JSON.parse(localStorage.getItem("Recent Search")) || [];
  const [country, setCountry] = useState("");
  const [world, setWorld] = useState("");
  const [inputval, setInputval] = useState("");
  const [countrydata, setCountrydata] = useState("");
  const [localData, setLocalData] = useState(localstogaeData);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const data = async () => {
      setLoading(true);
      try {
        const fetchingCountry = await fetch(
          `https://coronavirus-19-api.herokuapp.com/countries/${country}`
        );
        const res = await fetchingCountry.json();
        setLoading(false);
        setCountrydata(res);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, [country]);
  useEffect(() => {
    const data2 = async () => {
      setLoading(true);
      try {
        const fetchingCountry = await fetch(
          "https://coronavirus-19-api.herokuapp.com/countries"
        );
        const res = await fetchingCountry.json();
        setLoading(false);
        setWorld(res[0]);
      } catch (error) {
        console.log(error);
      }
    };
    data2();
  }, []);
  const inputHandler = (event) => {
    setInputval(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCountry(inputval);
    setLocalData(inputval);
    localStorage.setItem("Recent Search", JSON.stringify(inputval));
  };
  console.log(countrydata[0]);
  console.log(localData);
  //   end of main.js component value

  // start of flag.js component value
  const [flag, setFlag] = useState([]);
  const [region, setRegion] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://restcountries.eu/rest/v2/name/${country}`
        );
        const res = await data.json();
        setFlag(res[0].flag);
        setRegion(res[0].region);
        setCapital(res[0].capital);
        setPopulation(res[0].population);
        console.log(res);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [country]);
  console.log(flag);
  //   end of flag context values

  // for header
  const [isOpen, setIsOpen] = useState(false);
  const barOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Covid19Context.Provider
      value={{
        handleSubmit,
        inputHandler,
        country,
        flag,
        region,
        countrydata,
        world,
        region,
        capital,
        population,
        localData,
        isOpen,
        barOpen
      }}
    >
      {props.children}
    </Covid19Context.Provider>
  );
};

export default Context;
