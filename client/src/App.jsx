import React, { Component } from 'react';

import MapView from './mapView';
import Interface from './Interface';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeParklets: [],
      hiddenParklets: [],
    };
  }

  componentDidMount() {
    this.handleFilters();
  }
  handleFilters() {
    const open = document.querySelector('.open');
    const food = document.querySelector('.food');
    const wifi = document.querySelector('.wifi');
    const { activeParklets, hiddenParklets } = this.state;
    const parklets = [...activeParklets, ...hiddenParklets];
    const show = [];
    const hide = [];

    console.log(open, food, wifi);

    parklets.forEach(parklet => {
    
    });
  }

  render() {
    return (
      <div id="home">
        <MapView />
        <Interface />
      </div>
    );
  }
}

export default App;
