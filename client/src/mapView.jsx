import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { tileSet, SFGeo, zoomLevel, mapAttribution } from '../mapconfig';

export default class MapView extends Component {
  constructor() {
    super();
    this.state = {
      center: [SFGeo[0], SFGeo[1]],
      zoom: zoomLevel,
    };
  }

  render() {
    const { center, zoom } = this.state;
    return (
      <Map center={center} zoom={zoom} >
        <TileLayer attribution={mapAttribution} url={tileSet} />
      </Map>
    );
  }
}
