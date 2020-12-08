import React from 'react'
import { connect } from 'react-redux'

// styles
import {
    Container,
    LabelContainer,
    ItemLabel,
    ItemData
} from './style'

const DataCard = ({SELECTED_WEATHER_CARD, CACHED_LOCATION_DATA}) => {
    if(CACHED_LOCATION_DATA){
        var data = CACHED_LOCATION_DATA.hours.filter((d, i)=> i === SELECTED_WEATHER_CARD)[0]
        return (
            <Container>
                <LabelContainer>
                    <ItemLabel>Gust</ItemLabel>
                    <ItemData>{data.gust.noaa}</ItemData>
                </LabelContainer>
                <LabelContainer>
                    <ItemLabel>Ice Cover</ItemLabel>
                    <ItemData>{data.iceCover.noaa}</ItemData>
                </LabelContainer>
                <LabelContainer>
                    <ItemLabel>Precipitation</ItemLabel>
                    <ItemData>{data.precipitation.noaa}</ItemData>
                </LabelContainer>
                {/* <LabelContainer>
                    <ItemLabel>Snow Depth</ItemLabel>
                    <ItemData>{data.snowDepth.noaa}</ItemData>
                </LabelContainer> */}
                <LabelContainer>
                    <ItemLabel>Visibility</ItemLabel>
                    <ItemData>{data.visibility.noaa}</ItemData>
                </LabelContainer>
                <LabelContainer>
                    <ItemLabel>Wind Direction</ItemLabel>
                    <ItemData>{data.windDirection.noaa}</ItemData>
                </LabelContainer>
                <LabelContainer>
                    <ItemLabel>Wind Speed</ItemLabel>
                    <ItemData>{data.windSpeed.noaa}</ItemData>
                </LabelContainer>
            </Container>
        )
    }
    return (
        <Container>
            Select a card
        </Container>
    )
}

const mapStateToProps = ({SELECTED_WEATHER_CARD, CACHED_LOCATION_DATA}) => {
    return {
        SELECTED_WEATHER_CARD,
        CACHED_LOCATION_DATA
    }
}

export default connect(mapStateToProps)(DataCard)