import React, { Component } from 'react';

export default class CityInput extends Component {

  constructor(props){
    super(props);

  }

  render() {

    return (
      <div classame="city-input">
        <input type="text" onChange={ e => this.props.updateCity(e.target.value) } />
      </div>
    );
  }
}