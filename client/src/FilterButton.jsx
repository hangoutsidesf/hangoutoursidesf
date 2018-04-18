import React from 'react';
import PropTypes from 'prop-types';

const getType = (type) => {
  switch (type) {
    case 'address':
      return 'Enter address';
    case 'open':
      return 'Open now';
    case 'food':
      return <i className="fas fa-coffee" />;
    case 'wifi':
      return <i className="fas fa-wifi" />;
    default:
      return 'Invalid type';
  }
};

const FilterButton = props => (
  <button>{getType(props.type)}</button>
);

FilterButton.propTypes = {
  type: PropTypes.string,
};

FilterButton.defaultProps = {
  type: '',
};

export default FilterButton;
