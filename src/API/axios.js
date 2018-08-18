import axios from 'axios';
import {DARKSKY_API_KEY} from '../context/context';

const axiosRequest = (address) => {
    return new Promise((res, rej) => {
        let encodedAddress = encodeURIComponent(address);
        let urlAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
        let formatted_address;

        axios.get(urlAddress)
            .then((response) => {
                if (response.data.status === 'ZERO_RESULTS')
                    throw new Error('Invalid Address!');
                else if (response.data.status === 'OK') {
                    formatted_address = response.data.results[0].formatted_address;
                    let latitude = response.data.results[0].geometry.location.lat;
                    let longitude = response.data.results[0].geometry.location.lng;
                    let weatherURL = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${latitude},${longitude}`;
                    return axios.get(weatherURL);
                } else
                    throw new Error('Unknown Error, try again!');

            })
            .then((response) => {
                res({
                    address: formatted_address.split(',')[0],
                    latitude: response.data.latitude,
                    longitude: response.data.longitude,
                    temperature: response.data.daily.data.map((data) => getCelsius(data.apparentTemperatureLow)),
                    humidity: response.data.daily.data.map((data) => (data.apparentTemperatureLow)),
                    windSpeed: response.data.daily.data.map((data) => (data.windSpeed))
                });
            })
            .catch((error) => {
                if (error.code === 'ENOTFOUND')
                    console.log('Unable to reach to a server!');
                else
                    console.log(error.message);
            });
    });
}


const getCelsius = (fahrenheit) => {
    return  Math.round(((fahrenheit - 32) * 5 / 9) * 100) / 100;
}

export default axiosRequest;