import React, { Component } from 'react';
import './App.css';
import Script from 'react-load-script'
import {MAPMYINDIA_API_KEY} from './context/context';
import SearchBar from './components/search_bar';
import WeatherList from './components/weatherList';

class App extends Component {
  render() {
    let API_URL = `https://apis.mapmyindia.com/advancedmaps/v1/${MAPMYINDIA_API_KEY}/map_load?v=0.1`;
    return (
       <div>
        <Script
         url={API_URL}
        />
      <div className='App web-title'>
      <h1>SearchWeather</h1>
      </div>
      <div>
        <SearchBar />
        <WeatherList />
      </div>
      </div>
    );
  }
}

export default App;
