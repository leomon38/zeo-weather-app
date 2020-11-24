import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';

const RootReducer = combineReducers( {
    results: WeatherReducer
})

export default RootReducer