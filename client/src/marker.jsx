import React from 'react';
import PropTypes from 'prop-types';
import { Marker as LMarker, Popup } from 'react-leaflet';
import { icon } from '../mapconfig';

const Marker = (props) => {
  const { detail, position, displayModal } = props;

  return (
    <LMarker position={position} icon={icon}>
      <Popup onOpen={() => displayModal(detail)} onClose={displayModal} className="customPopup" >
        <span>{detail}</span>
      </Popup>
    </LMarker>
  );
};

Marker.propTypes = {
  detail: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  displayModal: PropTypes.func.isRequired,
};

export default Marker;
