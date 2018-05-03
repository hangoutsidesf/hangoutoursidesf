import React from 'react';
import PropTypes from 'prop-types';

const getType = (type) => {
  switch (type) {
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

const toggleFilter = (event, handler, type) => {
  const { classList } = event.target;

  if (classList.contains('fas')) {
    const target = event.target.parentElement;
    toggleFilter({ target }, handler, type);
  } else {
    handler(type + 'Filter');
  }
};

const FilterButton = props => {
  if(props.filter) {
    return (
      <button
        onClick={event => toggleFilter(event, props.handler, props.type)}
        className={`btn btn-dark-outline ${props.type}`}
      >
        {getType(props.type)}
      </button>
    )
  } else {
    return (
      <button
        onClick={event => toggleFilter(event, props.handler, props.type)}
        className={`btn btn-dark ${props.type}`}
      >
        {getType(props.type)}
      </button>
    )
  }
};

FilterButton.propTypes = {
  type: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  filter: PropTypes.bool.isRequired,
};

export default FilterButton;
