import React from 'react';
import FilterButton from './FilterButton';

const Interface = (props) => (
  <div className="interface">
    <FilterButton type="address" />
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

export default Interface;
