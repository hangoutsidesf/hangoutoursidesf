import React from 'react';
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

export default MarkerCollection;
