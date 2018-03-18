import React from 'react';
import PropTypes from 'prop-types';
import Marker from './marker';

const MarkerCollection = (props) => {
  const { parklets, displayModal } = props;
  const markers = parklets.map(({ title, position }) => (
    <Marker
      key={title + position[0]}
      position={position}
      detail={title}
      displayModal={displayModal}
    />
  ));

  return (
    <div>{markers}</div>
  );
};

MarkerCollection.propTypes = {
  parklets: PropTypes.arrayOf(PropTypes.object).isRequired,
  displayModal: PropTypes.func.isRequired,
};

export default MarkerCollection;
