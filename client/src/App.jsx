import React, { Component } from 'react';

import MapView from './mapView';
import Interface from './Interface';
import fetchParklets from '../utils/fetchParklets';
import fakeFilterFlags from '../../fakeFilterFlags';

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
    fetchParklets(PARKLETS_ENDPOINT)
      .then(fakeFilterFlags)
      .then(data => this.setState({ activeParklets: data }))
      .catch(err => this.setState({ error: err }));
  }

  handleFilters(type) {
    const { activeParklets, hiddenParklets } = this.state;

    const parklets = [...activeParklets, ...hiddenParklets];
    const show = [];
    const hide = [];

    this.setState({ [type]: !this.state[type] }, () => {
      const { openFilter, foodFilter, wifiFilter } = this.state;

      parklets.forEach((parklet) => {
        if (!parklet.open && openFilter) {
          console.log(parklet);
          hide.push(parklet);
        } else if (!parklet.food && foodFilter) {
          hide.push(parklet);
        } else if (!parklet.wifi && wifiFilter) {
          hide.push(parklet);
        } else {
          show.push(parklet);
        }
      });

      this.setState({
        activeParklets: show,
        hiddenParklets: hide,
      });
    });
  }

  render() {
    const { error, activeParklets } = this.state;

    return (
      <div id="home">
        <MapView error={error} parklets={activeParklets} />
        <Interface handleFilters={this.handleFilters} />
      </div>
    );
  }
}

export default App;
