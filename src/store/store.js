import {createStore, combineReducers} from 'redux';
import WeatherReducer from '../reducers/WeatherReducer';

const store = createStore(combineReducers({
	WeatherReducer
}));
export default ()=> store;
