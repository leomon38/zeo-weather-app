import  { fetchWeatherData } from '../components/fetchData';

export const WEATHER_LOADING = "LOADING";
export const WEATHER_LOADING_FAILED = "LOADING_FAILED";
export const WEATHER_LOADING_SUCCESS = "LOADING_SUCCESS"

export const GetData = (zipCode) => 
            async (dispatch) => {
    try {
        dispatch({
            type: WEATHER_LOADING
        })

        const {city, periods} = await fetchWeatherData(zipCode);
        let cityZip = city + "|" + zipCode;
       //console.log(JSON.stringify({type: WEATHER_LOADING_SUCCESS,payload: periods,city}))

        dispatch({
            type: WEATHER_LOADING_SUCCESS,
            payload: periods,
            city : cityZip
        })

    }catch(err) {
        dispatch({
            type: WEATHER_LOADING_FAILED
        })
    }
}