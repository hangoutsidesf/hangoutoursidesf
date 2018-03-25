import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

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
      parklets: [],
      error: '',
      displayModal: false,
      selectedMarker: '',
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    fetchParklets(PARKLETS_ENDPOINT)
      .then(data => this.setState({ parklets: data }))
      .catch(err => this.setState({ error: err }));
  }

  toggleModal(clickedMarkerData) {
    this.setState({
      displayModal: !this.state.displayModal,
      selectedMarker: clickedMarkerData,
    });
    return ('Pass me back into the modal component', clickedMarkerData);
  }

  closeModal() {
    this.setState({ displayModal: false });
  }

  render() {
    const {
      center, zoom, parklets, error, displayModal, selectedMarker,
    } = this.state;
    return (
      <div>
        <Map center={center} zoom={zoom} >
          <TileLayer attribution={mapAttribution} url={tileSet} />
          {error &&
            <h3>Issue loading parklets: {error}</h3>
          }
          <MarkerCollection parklets={parklets} displayModal={this.toggleModal} />
        </Map>
        <ReactModal
          isOpen={displayModal}
        >
          yoooo I am {selectedMarker}
          <Link to={selectedMarker}>fixed</Link>
          <button onClick={this.closeModal} >Close modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default MapView;
