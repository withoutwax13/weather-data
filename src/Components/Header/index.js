import React from 'react'

// styles
import { Wrapper } from './style'

// child components
import LocationDrop from './LocationDrop'

const Header = () => {
    return (
        <Wrapper>
            <h1 style={{fontFamily: 'Courier New', fontSize: '35px', fontStyle: 'bold', color: '#111B1E', marginLeft: '40px'}}>weather-data</h1>
            <LocationDrop/>
        </Wrapper>
    )
}

export default Header