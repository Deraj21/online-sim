import React, { Component } from 'react';

export default class RecentSearches extends Component {

  constructor(props){
    super(props);


  }

  render() {

    let searches = this.props.recentSearches.map(city => {
      return <p>{city}</p>
    });

    return (
      <div className="recent-searches">
        <h2>Recent Searches</h2>
        { searches }
      </div>
    );
  }
}