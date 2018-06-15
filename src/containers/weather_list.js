import React from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends React.Component{

	renderWeather(cityData){
		const names = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp-273);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const lat = cityData.city.coord.lat;
		const lon = cityData.city.coord.lon;

		return (
		<tr key = {names}>
			<td><GoogleMap lat = {lat} lng = {lon}/></td>
			<td><Chart data = {temps} color = 'red' units = "C" /></td>
			<td><Chart data = {pressures} color = 'orange' units = "hPa"/></td>
			<td><Chart data = {humidities} color = 'blue' units = "%" /></td>
		</tr>
		);
	}

	render(){
		return(
			<table className = "table table-hover">
				<thead>	
					<tr>
						<th>City</th>
						<th>Temperature (C) </th>
						<th>Pressure (hPa) </th>
						<th>Humiditity (%) </th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)

	}
}


function mapStateToProps({weather}){
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);