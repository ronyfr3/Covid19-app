import React from "react";
import Search from './Search/Search';
import Country from './CountryCases/Country';
import CGlobal from './MoreaboutCountry/CGlobal'

const Home = () => {
  return (
    <div>
      <Search />
      <Country />
      <CGlobal />
    </div>
  );
};

export default Home;
