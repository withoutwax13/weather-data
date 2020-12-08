import {combineReducers} from 'redux'

const CACHED_LOCATION_REDUCER = (loc = null, action) => {
    if(action.type === 'CHANGE_CACHED_LOCATION'){
        return action.payload.coords
    }else if(action.type === 'RESET_LOCATION_DATA'){
        return null
    }
    return loc
}

const CACHED_LOCATION_DATA_REDUCER = (data = null, action) => {
    if(action.type === 'CHANGE_CACHED_LOCATION') {
        return action.payload.data
    }else if(action.type === 'RESET_LOCATION_DATA'){
        return null
    }
    return data
}

const SELECTED_WEATHER_CARD_REDUCER = (data = 0, action) => {
    if(action.type === 'SELECT_WEATHER_CARD'){
        return action.payload
    }
    return data
}

export default combineReducers({
    CACHED_LOCATION: CACHED_LOCATION_REDUCER,
    CACHED_LOCATION_DATA: CACHED_LOCATION_DATA_REDUCER,
    SELECTED_WEATHER_CARD: SELECTED_WEATHER_CARD_REDUCER
})