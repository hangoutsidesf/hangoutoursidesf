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

const toggleFilter = (event) => {
  const { classList } = event.target;

  if (classList.contains('btn-dark')) {
    classList.remove('btn-dark');
    classList.add('btn-dark-outline');
  } else {
    classList.remove('btn-dark-outline');
    classList.add('btn-dark');
  }
};

const FilterButton = props => (
  <button onClick={event => toggleFilter(event)} className={`btn btn-dark ${props.type}`}>
    {getType(props.type)}
  </button>
);

FilterButton.propTypes = {
  type: PropTypes.string,
};

FilterButton.defaultProps = {
  type: '',
};

export default FilterButton;
