import React from 'react'
import { connect } from 'react-redux'

// store actions
import {selectWeatherCard} from '../../Redux/actions'

// styles
import { Wrapper, CardCollection, CardGroup } from './style'

// children components
import DataCard from './DataCard'
import WeatherCard from './WeatherCard'

const Main = ({CACHED_LOCATION_DATA, selectWeatherCard}) => {
    const renderCards = () => {
        return (
            <>
            <CardGroup>
                <WeatherCard weatherData={CACHED_LOCATION_DATA.hours[0]} clickAction={selectWeatherCard} index={0}/>
                <WeatherCard weatherData={CACHED_LOCATION_DATA.hours[1]} clickAction={selectWeatherCard} index={1}/>
            </CardGroup>
            <CardGroup>
                <WeatherCard weatherData={CACHED_LOCATION_DATA.hours[2]} clickAction={selectWeatherCard} index={2}/>
                <WeatherCard weatherData={CACHED_LOCATION_DATA.hours[3]} clickAction={selectWeatherCard} index={3}/>
            </CardGroup>
            </>
        )
    }
    return (
        <Wrapper>
            <DataCard/>
            <CardCollection>
               {CACHED_LOCATION_DATA ? renderCards() : `Loading`}
            </CardCollection>
        </Wrapper>
    )
}

const mapStateToProps = ({CACHED_LOCATION_DATA}) => {
    return {
        CACHED_LOCATION_DATA
    }
}

export default connect(mapStateToProps, {selectWeatherCard})(Main)