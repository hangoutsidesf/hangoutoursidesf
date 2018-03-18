import React from 'react';
import { Marker as LMarker, Popup } from 'react-leaflet';
import { icon } from '../mapconfig';

const Marker = (props) => {
  const { detail, position, displayModal } = props;

  return (
    <LMarker position={position} icon={icon}>
      <Popup onOpen={() => displayModal(detail)} onClose={displayModal}>
        <span>{detail}</span>
      </Popup>
    </LMarker>
  );
};

export default Marker;
