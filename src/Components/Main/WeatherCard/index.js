import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// styles
import {
    Container,
    LabelContainer,
    TimeData,
    ItemData,
    ItemLabel
} from './style'

const WeatherCard = ({weatherData, clickAction, index, SELECTED_WEATHER_CARD}) => {
    // Weather Card Singleton for each of the past 4 hours
    // should only render information about time, airTemperature, cloudCover, gust, humidity, iceCover, precipitation, windSpeed, windDirection, waveHeight
    //      , waveDirection, visibility, snowDepth
    // responds to click event on its container, in which the background and container will switch their colors, and the additional data will be displayed
    //      on the left component
    // in default, only the time, airTemperature, cloudCover and humidity is being rendered, unless under a click event
    const [shouldInvert, toggleInvert] = useState(null)
    useEffect(()=>{
        SELECTED_WEATHER_CARD === index ?
        toggleInvert(false) :
        toggleInvert(true)
    }, [SELECTED_WEATHER_CARD, index])
    return (
        <Container invertActive={shouldInvert} onClick={()=>{
            clickAction(index)
        }}>
            <TimeData invertActive={shouldInvert}>{weatherData.time.slice(11, 16)}</TimeData>
            <LabelContainer>
                <ItemLabel invertActive={shouldInvert}>Air Temperature</ItemLabel>
                <ItemData invertActive={shouldInvert}>{weatherData.airTemperature.noaa}</ItemData>
            </LabelContainer>
            <LabelContainer>
                <ItemLabel invertActive={shouldInvert}>Humidity</ItemLabel>
                <ItemData invertActive={shouldInvert}>{weatherData.humidity.noaa}</ItemData>
            </LabelContainer>
            <LabelContainer>
                <ItemLabel invertActive={shouldInvert}>Cloud Cover</ItemLabel>
                <ItemData invertActive={shouldInvert}>{weatherData.cloudCover.noaa}</ItemData>
            </LabelContainer>
        </Container>
    )
}

const mapStateToProps = ({SELECTED_WEATHER_CARD}) => {
    return {
        SELECTED_WEATHER_CARD
    }
}

export default connect(mapStateToProps)(WeatherCard)