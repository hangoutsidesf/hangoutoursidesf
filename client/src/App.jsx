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
    // IMPORTANT: Until db is implemented, fake data will be used to generate flags
    // for a parklet that is open, has coffee, or wifi by RNG, this will change for
    // every refresh of the page
    fetchParklets(PARKLETS_ENDPOINT)
      .then((data) => {
        this.faker(data);
        this.setState({ activeParklets: data });
      })
      .then(() => this.handleFilters())
      .catch(err => this.setState({ error: err }));
  }

  faker(data) {
    const random = () => Math.random() > 0.5;

    data.forEach((d) => {
      const node = d;
      node.wifi = random();
      node.food = random();
      node.open = random();
    });
  }

  handleFilters() {
    const open = document.querySelector('.open');
    const food = document.querySelector('.food');
    const wifi = document.querySelector('.wifi');
    const { activeParklets, hiddenParklets } = this.state;
    const parklets = [...activeParklets, ...hiddenParklets];
    const show = [];
    const hide = [];

    parklets.forEach((parklet) => {
      if (!parklet.open && open.classList.contains('btn-dark-outline')) {
        hide.push(parklet);
      } else if (!parklet.food && food.classList.contains('btn-dark-outline')) {
        hide.push(parklet);
      } else if (!parklet.wifi && wifi.classList.contains('btn-dark-outline')) {
        hide.push(parklet);
      } else {
        show.push(parklet);
      }
    });

    this.setState({
      activeParklets: show,
      hiddenParklets: hide,
    });
  }

  render() {
    return (
      <div id="home">
        <MapView parklets={this.state.activeParklets} />
        <Interface handleFilters={this.handleFilters.bind(this)} />
      </div>
    );
  }
}

export default App;
