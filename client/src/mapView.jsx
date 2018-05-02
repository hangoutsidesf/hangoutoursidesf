import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import ReactModal from 'react-modal';

import { tileSet, SFGeo, zoomLevel, mapAttribution } from '../mapconfig';
import MarkerCollection from './markerCollection';
import fetchParklets from '../utils/fetchParklets';

const PARKLETS_ENDPOINT = 'https://data.sfgov.org/resource/6a7x-cttf.json';

class MapView extends Component {
  constructor() {
    super();
    this.state = {
      center: [SFGeo[0], SFGeo[1]],
      zoom: zoomLevel,
      error: '',
      displayModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(clickedMarkerData) {
    this.setState({ displayModal: !this.state.displayModal });
    return ('Pass me back into the modal component', clickedMarkerData);
  }

  render() {
    const {
      center, zoom, error, displayModal,
    } = this.state;

    const { parklets } = this.props;

    return (
      <div>
        <Map center={center} zoom={zoom} >
          <TileLayer attribution={mapAttribution} url={tileSet} />
          {error &&
            <h3>Issue loading parklets: {error}</h3>
          }
          <MarkerCollection parklets={parklets} displayModal={this.toggleModal} />
        </Map>
        <ReactModal isOpen={displayModal} />
      </div>
    );
  }
}

export default MapView;
