import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { tileSet, SFGeo, zoomLevel, mapAttribution } from '../mapconfig';

const PARKLETS_ENDPOINT = 'https://data.sfgov.org/resource/6a7x-cttf.json';

export default class MapView extends Component {
  constructor() {
    super();
    this.state = {
      center: [SFGeo[0], SFGeo[1]],
      zoom: zoomLevel,
      parklets: [],
      error: '',
    };
  }

  componentDidMount() {
    fetch(PARKLETS_ENDPOINT)
      .then(response => response.json())
      .then(json => json.map(parklet => ({
        title: parklet.applicant,
        coordinates: parklet.location.coordinates,
      })))
      .then(data => this.setState({ parklets: data }))
      .catch(err => this.setState({ error: err }));
  }

  render() {
    const {
      center, zoom, parklets, error,
    } = this.state;
    return (
      <Map center={center} zoom={zoom} >
        <TileLayer attribution={mapAttribution} url={tileSet} />
        {error &&
          <h3>Issue loading parklets: {error}</h3>
        }
      </Map>
    );
  }
}
