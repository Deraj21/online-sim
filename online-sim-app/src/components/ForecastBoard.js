import React, { Component } from 'react';

export default class ForecastBoard extends Component {

  constructor(props){
    super(props);


  }

  render() {

    let days = this.props.data.map(day => {
      return (
        <div className="forecast-day">
          <p>{day.date.weekday}</p>
          <p>{day.conditions}</p>
          <p>High {day.high.fahrenheit}</p>
          <p>Low {day.low.fahrenheit}</p>
          <img src={day.icon_url}/>
        </div>
      )
    });

    return (
      this.props.displayForecast
      ?
      <div className="forecast-board">
        <h2>5 Day Forecast</h2>
        { days }
      </div>
      :
      <div className="blank-board">
        <h2>Enter City</h2>
      </div>
    );
  }
}