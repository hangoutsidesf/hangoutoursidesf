import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import ReactModal from 'react-modal';
import { tileSet, SFGeo, zoomLevel, mapAttribution } from '../mapconfig';
import MarkerCollection from './markerCollection';

const PARKLETS_ENDPOINT = 'https://data.sfgov.org/resource/6a7x-cttf.json';

export default class MapView extends Component {
  constructor() {
    super();
    this.state = {
      center: [SFGeo[0], SFGeo[1]],
      zoom: zoomLevel,
      parklets: [],
      error: '',
      displayModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    fetch(PARKLETS_ENDPOINT)
      .then(response => response.json())
      .then(json => json.map(parklet => (
        {
          title: parklet.applicant,
          position: [parklet.location.coordinates[1], parklet.location.coordinates[0]],
        }
      )))
      .then(data => this.setState({ parklets: data }))
      .catch(err => this.setState({ error: err }));
  }

  toggleModal(clickedMarkerData) {
    this.setState({ displayModal: !this.state.displayModal });
    return ('Pass me back into the modal component', clickedMarkerData);
  }

  render() {
    const {
      center, zoom, parklets, error, displayModal,
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
        <ReactModal isOpen={displayModal} />
      </div>
    );
  }
}
