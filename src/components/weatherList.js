import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from './Chart';
import SimpleMap from './Google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		return (
			<tr key={cityData.address}>
			<td><SimpleMap lat={cityData.latitude} lng={cityData.longitude} address={cityData.address}/></td>
			<td><Chart data={cityData.temperature} color="red" unit="C" /></td>
			<td><Chart data={cityData.humidity} color="green" unit="%" /></td>
			<td><Chart data={cityData.windSpeed} color="black" unit="M/S" /></td>
			</tr>
		);
	}
    render() {
      return (
        <div>
        <table className='table table-hover'>
        <thead className="thead-dark">
        <tr>
        <th>City</th>
        <th>Temparature</th>
        <th>Humidity</th>
        <th>WindSpeed</th>
        </tr>
        </thead>
        <tbody>
        {
        	this.props.WeatherReducer.map(this.renderWeather)
        }
        </tbody>
        </table>
        </div>
      );
    }
}
const mapStateToProp = ((state)=>({
	...state
}));
export default connect(mapStateToProp)(WeatherList);