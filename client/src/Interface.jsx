import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';

const Interface = props => (
  <div className="interface">
    <button className="btn btn-dark address">Enter Address</button>
    <FilterButton handler={props.handleFilters} type="open" filter={props.openFilter} />
    <FilterButton handler={props.handleFilters} type="food" filter={props.foodFilter} />
    <FilterButton handler={props.handleFilters} type="wifi" filter={props.wifiFilter} />
    <div className="content">
      <h1>What&apos;s a parklet?</h1>
      <p>
        Ever see what looks like a parking spot in front of a coffee shop replaced
        by a picnic bench and garden? That&apos;s an example of a parklet.
      </p>
    </div>
    <h2 className="bottom-question">Idea or Issue?</h2>
  </div>
);

Interface.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  openFilter: PropTypes.bool.isRequired,
  foodFilter: PropTypes.bool.isRequired,
  wifiFilter: PropTypes.bool.isRequired,
};

export default Interface;
