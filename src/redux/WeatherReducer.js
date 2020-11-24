import { WEATHER_LOADING, WEATHER_LOADING_FAILED, WEATHER_LOADING_SUCCESS } from '../redux/WeatherActions';


const WeatherReducer = (state = {loading: false}, action) => {
    switch(action.type) {
        case WEATHER_LOADING:
            return { 
                loading: true,                
            }
        case WEATHER_LOADING_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                city: action.city
            }
        case WEATHER_LOADING_FAILED:
            return {
                loading: false
            }

        default: 
            return state;
    }
}

export default WeatherReducer