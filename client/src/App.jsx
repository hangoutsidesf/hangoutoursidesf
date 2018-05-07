import React, { Component } from 'react';

import MapView from './mapView';
import Interface from './Interface';
import fetchParklets from '../utils/fetchParklets';
import fakeFilterFlags from '../utils/fakeFilterFlags';

const PARKLETS_ENDPOINT = 'https://data.sfgov.org/resource/6a7x-cttf.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeParklets: [],
      hiddenParklets: [],
      error: '',
      openFilter: false,
      foodFilter: false,
      wifiFilter: false,
    };

    this.handleFilters = this.handleFilters.bind(this);
  }

  componentDidMount() {
    // IMPORTANT: Until db is implemented, fake data will be used to generate flags
    // for a parklet that is open, has coffee, or wifi by RNG, this will change for
    // every refresh of the page
    const { activeParklets, hiddenParklets } = this.state;

    if(!activeParklets.length && !hiddenParklets.length) {
      fetchParklets(PARKLETS_ENDPOINT)
        .then(fakeFilterFlags)
        .then(data => this.refreshParkletDisplay(data))
        .catch(err => this.setState({ error: err }));
    }
  }

  refreshParkletDisplay(parklets) {
    const { openFilter, foodFilter, wifiFilter } = this.state;
    const hasFilter = openFilter || foodFilter || wifiFilter;
    const activeParklets = [];
    const hiddenParklets = [];

    parklets.forEach((parklet) => {
      const { open, food, wifi } = parklet;

      if ((!open && openFilter) || (!food && foodFilter) || (!wifi && wifiFilter)) {
        hiddenParklets.push(parklet);
      } else {
        activeParklets.push(parklet);
      }
    });

    this.setState({ activeParklets, hiddenParklets });
  }

  handleFilters(type) {
    const { activeParklets, hiddenParklets } = this.state;
    const parklets = [...activeParklets, ...hiddenParklets];

    this.setState({ [type]: !this.state[type] }, () => {
      this.refreshParkletDisplay(parklets);
    });
  }

  render() {
    const {
      error,
      activeParklets,
      openFilter,
      foodFilter,
      wifiFilter,
    } = this.state;

    return (
      <div id="home">
        <MapView error={error} parklets={activeParklets} />
        <Interface
          handleFilters={this.handleFilters}
          openFilter={openFilter}
          foodFilter={foodFilter}
          wifiFilter={wifiFilter}
        />
      </div>
    );
  }
}

export default App;
