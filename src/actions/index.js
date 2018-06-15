import axios from "axios";

const API_KEY ="f8d85a09bb8de4cfd5d9937a06616321";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return{
		type: FETCH_WEATHER,
		payload: request
	};
}
