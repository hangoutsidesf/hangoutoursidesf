import React from 'react';
import Marker from './marker';

const MarkerCollection = (props) => {
  const markers = props.parklets.map(({ title, position }) => (
    <Marker
      key={position}
      position={position}
      detail={title}
    />
  ));

  return (
    <div>{markers}</div>
  );
};

export default MarkerCollection;
