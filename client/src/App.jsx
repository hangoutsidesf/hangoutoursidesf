import React, { Component } from 'react';

import MapView from './mapView';
import Interface from './Interface';
import fetchParklets from '../utils/fetchParklets';

const PARKLETS_ENDPOINT = '/parklets';

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

    if (!activeParklets.length && !hiddenParklets.length) {
      fetchParklets(PARKLETS_ENDPOINT)
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          }
          this.refreshParkletDisplay(data);
        })
        .catch(error => this.setState({ error }));
    }
  }

  refreshParkletDisplay(parklets) {
    const { openFilter, foodFilter, wifiFilter } = this.state;

    const filteredParklets = parklets.reduce((acc, parklet) => {
      const { open, food, wifi } = parklet;
      const { activeParklets, hiddenParklets } = acc;

      if ((!open && openFilter) || (!food && foodFilter) || (!wifi && wifiFilter)) {
        hiddenParklets.push(parklet);
      } else {
        activeParklets.push(parklet);
      }

      return acc;
    }, {
      activeParklets: [],
      hiddenParklets: [],
    });

    this.setState({ ...filteredParklets });
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
