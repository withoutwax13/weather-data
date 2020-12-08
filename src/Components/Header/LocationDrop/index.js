import React from 'react'
import {connect} from 'react-redux'

// actions
import {changeCachedLocation, resetLocationData} from '../../../Redux/actions'

// countries
import countries from '../../../Utils/countries'

// styles
import {SelectBox} from './style'

const LocationDrop = ({changeCachedLocation, resetLocationData}) => {
    // Drops the list of available locations with weather data
    return (
        <>
        <SelectBox id='location' onChange={(e)=>{
            const selected = countries.filter(d=>d.country === e.target.value)
            resetLocationData()
            changeCachedLocation(selected[0].latitude, selected[0].longitude)
        }}>
            <option value='NONE'>SELECT OTHER LOCATION</option>
            {countries.map((d, i)=>{
                return <option key={i} value={d.country}>{d.country}</option>
            })}
        </SelectBox>
        </>
    )
}

export default connect(null, {changeCachedLocation, resetLocationData})(LocationDrop)