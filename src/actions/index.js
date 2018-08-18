import { FETCH_WEATHER } from '../context/context';
const getFetchAction = (response) => ({
	type : FETCH_WEATHER,
	response
});

export default getFetchAction;