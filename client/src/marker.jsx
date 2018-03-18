import React from 'react';
import { Marker as LMarker, Popup } from 'react-leaflet';
import { icon } from '../mapconfig';

const Marker = (props) => {
  const { detail, position } = props;

  return (
    <LMarker position={position} icon={icon}>
      <Popup />
    </LMarker>
  );
};

export default Marker;
