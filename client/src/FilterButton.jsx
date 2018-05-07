import React from 'react';
import PropTypes from 'prop-types';
import { getType, filterClass } from '../utils/getFilterButtonType';

const FilterButton = ({ filter, type, handler }) => (
  <button
    onClick={() => handler(type + 'Filter')}
    className={`btn ${filterClass(filter)} ${type}`}
  >
    {getType(type)}
  </button>
);

FilterButton.propTypes = {
  type: PropTypes.string,
  handler: PropTypes.func.isRequired,
  filter: PropTypes.bool.isRequired,
};

FilterButton.defaultProps = {
  type: '',
};

export default FilterButton;
