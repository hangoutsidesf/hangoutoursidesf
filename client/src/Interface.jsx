import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';

const Interface = props => (
  <div className="interface">
    <button className="btn btn-dark address">Enter Address</button>
    <FilterButton handler={props.handleFilters} type="open" />
    <FilterButton handler={props.handleFilters} type="food" />
    <FilterButton handler={props.handleFilters} type="wifi" />
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
};

export default Interface;
