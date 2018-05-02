import React, { Component } from 'react';

import MapView from './mapView';
import Interface from './Interface';
import fetchParklets from '../utils/fetchParklets';

const PARKLETS_ENDPOINT = 'https://data.sfgov.org/resource/6a7x-cttf.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeParklets: [],
      hiddenParklets: [],
    };
  }

  componentDidMount() {
    fetchParklets(PARKLETS_ENDPOINT)
      .then(data => this.setState({ activeParklets: data }))
      .then(() => this.handleFilters())
      .catch(err => this.setState({ error: err }));
  }

  handleFilters() {
    const open = document.querySelector('.open');
    const food = document.querySelector('.food');
    const wifi = document.querySelector('.wifi');
    const { activeParklets, hiddenParklets } = this.state;
    const parklets = [...activeParklets, ...hiddenParklets];
    const show = [];
    const hide = [];

    console.log(activeParklets);

    parklets.forEach(parklet => {
    
    });
  }

  render() {
    return (
      <div id="home">
        <MapView parklets={this.state.activeParklets} />
        <Interface />
      </div>
    );
  }
}

export default App;
