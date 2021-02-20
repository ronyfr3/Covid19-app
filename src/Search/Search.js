import React, { useContext } from "react";
import {Covid19Context} from '../Context/Context'
import RecentSearch from "../Context/RecentSearch/RecentSearch";
import "./Search.css";

const Search = () => {
    const {handleSubmit,inputHandler}=useContext(Covid19Context)
  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input placeholder="search country..." onChange={inputHandler} className='search-input' />
        <button className='search-submit'>Search</button>
        <RecentSearch/>
      </form>
    </div>
  );
};

export default Search;
