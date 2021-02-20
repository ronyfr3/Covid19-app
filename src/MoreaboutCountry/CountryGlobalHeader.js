import React, { useContext } from 'react'
import './CountryGlobalHeader.css'
import {Covid19Context} from '../Context/Context'

const CountryGlobalHeader = () => {
    const {countrydata,world} = useContext(Covid19Context)
    return (
        <div className='more-aboutcountry'>
            <p className='countrymoreabout'>More About {countrydata.country}</p>
            <p className='worldmoreabout'>{world.country} Covid19 Cases</p>
        </div>
    )
}

export default CountryGlobalHeader
