import React, { useContext } from "react";
import { Covid19Context } from "../Context";
import './Localdata.css'

const RecentSearch = () => {
  const { localData } = useContext(Covid19Context);
  return (
    <div className='recent'>
        <p className='recentsearches'>Last Search Update</p>
         <p className='localdata'>{localData.slice(0,12)}</p>
    </div>
  );
};

export default RecentSearch;
