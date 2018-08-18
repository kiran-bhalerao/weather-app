import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import WeatherList from './components/weatherList';

class App extends Component {
  render() {
    return (
      <div>
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
