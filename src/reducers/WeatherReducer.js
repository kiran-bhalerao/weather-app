import { FETCH_WEATHER } from '../context/context';
const WeatherReducer = (state = [] , action)=>{
	switch (action.type) {
		case FETCH_WEATHER:
		return [...state,action.response];
		default:
		return state;
	}
}

export default WeatherReducer;