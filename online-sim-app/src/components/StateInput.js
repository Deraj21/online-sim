import React, { Component } from 'react';

export default class StateInput extends Component {

  constructor(props){
    super(props);


  }

  render() {

    let options = this.props.stateList.map( state => {
      return <option value={state} >{state}</option>
    });

    return (
      <div classame="state-input">
        <select onChange={ (e) => this.props.updateState(e.target.value) }>
          { options }
        </select>
      </div>
    );
  }
}
