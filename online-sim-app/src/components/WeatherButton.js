import React, { Component } from 'react';

export default class WeatherButton extends Component {

  constructor(props){
    super(props);


  }

  render() {

    return (
      <div classame="weather-button">
        <button onClick={this.props.getWeather}>Get Weather</button>
      </div>
    );
  }
}