import API from '../Utils/API'

export const changeCachedLocation = (new_lat, new_long) => async (dispatch) => {
    var refTime = new Date()
    var REF_HOUR = refTime.getUTCHours()
    var start = new Date();
    start.setUTCHours(REF_HOUR - 3,0,0,0);
    var end = new Date();
    end.setUTCHours(REF_HOUR,0,0,0);
    const params = 'airTemperature,cloudCover,gust,humidity,iceCover,precipitation,windSpeed,windDirection,waveHeight,waveDirection,visibility,snowDepth'
    await API.get(`/weather/point?lat=${new_lat}&lng=${new_long}&start=${start.toISOString()}&end=${end.toISOString()}&params=${params}`)
            .then(response=>{
                if(response.status === 200){
                    dispatch(
                        {
                            type: "CHANGE_CACHED_LOCATION",
                            payload: {
                                coords: {
                                    lat: new_lat, 
                                    long: new_long
                                },
                                data: response.data
                            }
                        }
                    )
                }else{
                    dispatch({
                        type: "CHANGE_CACHED_LOCATION",
                        payload: {
                            coords: {
                                lat: new_lat,
                                long: new_long
                            },
                            data: null
                        }
                    })
                }
            }).catch(e=>console.log(e)) 
}

export const resetLocationData = () => {
    return {
        type: "RESET_LOCATION_DATA"
    }
}

export const selectWeatherCard = (index) => {
    return {
        type: 'SELECT_WEATHER_CARD',
        payload: index
    }
}