import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import CityInput from './components/CityInput';
import RecentSearches from './components/RecentSearches';
import StateInput from './components/StateInput';
import WeatherButton from './components/WeatherButton';
import ForecastBoard from './components/ForecastBoard';

const BASE_URL_AXIOS = "http://api.wunderground.com/api/1b6d2880566eef77/forecast10day/q/";
const BASE_URL_SERVER = 'http://localhost:3000/api';

const stateList = [ 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming' ];

class App extends Component {

  constructor(){
    super();

    this.state = {
      city: "",
      state: "",
      recentSearches: [],
      forecastData: [],
      displayForecast: false
    };

    this.updateCity = this.updateCity.bind(this);
    this.updateState = this.updateState.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.updateRecentSearches = this.updateRecentSearches.bind(this);
  }

  componentDidMount(){
    axios.get(`${BASE_URL_SERVER}/places`).then( response => {
      this.setState({ recentSearches: response.data });
    }).catch(() => console.log('failed to get places'));
  }

  updateCity(value){
    this.setState({ city: value });
  }

  updateState(value){
    this.setState({ state: value });
  }

  updateRecentSearches(city){
    let cityObj = { city };
    axios.post(`${BASE_URL_SERVER}/places`, cityObj).then( response => {
      console.log(response);
      this.setState({ recentSearches: response.data });
    }).catch( () => console.log('failed to POST city'));
  }

  getWeather(){
    let { city, state } = this.state;
    // puts city into recent searches (sends to local server)
    this.updateRecentSearches(city);

    // goes to weather api to get info, and updates state with it
    axios.get(`${BASE_URL_AXIOS}${state}/${city}.json`).then( response => {
      let data = response.data.forecast.simpleforecast.forecastday.slice(0, 5);
      this.setState({ forecastData: data });
    }).catch( () => {
      console.log('failed to get weather');
    })

    // changes display(bool) to true in forcast board component
    this.setState({ displayForecast: true });

  }

  render() {

    return (
      <div className="App">
        <h1>{"<DevWeather />"}</h1>
        <CityInput updateCity={this.updateCity}/>
        <StateInput updateState={this.updateState} stateList={stateList}/>
        <WeatherButton getWeather={this.getWeather}/>
        <ForecastBoard data={this.state.forecastData} displayForecast={this.state.displayForecast}/>
        <RecentSearches recentSearches={this.state.recentSearches}/>

      </div>
    );
  }
}

export default App;
