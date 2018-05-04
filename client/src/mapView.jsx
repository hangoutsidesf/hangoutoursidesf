import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import { tileSet, SFGeo, zoomLevel, mapAttribution } from '../mapconfig';
import MarkerCollection from './markerCollection';


class MapView extends Component {
  constructor() {
    super();
    this.state = {
      center: [SFGeo[0], SFGeo[1]],
      zoom: zoomLevel,
      displayModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(clickedMarkerData) {
    this.setState({ displayModal: !this.state.displayModal });
    return ('Pass me back into the modal component', clickedMarkerData);
  }

  render() {
    const { center, zoom, displayModal } = this.state;
    const { parklets, error } = this.props;

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

MapView.propTypes = {
  error: PropTypes.string,
  parklets: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    position: PropTypes.arrayOf(PropTypes.number),
    wifi: PropTypes.bool,
    food: PropTypes.bool,
    open: PropTypes.bool,
  })),
};

MapView.defaultProps = {
  error: '',
  parklets: [],
}

export default MapView;
