import React from 'react';

export default () => (
  <div className="interface">
    <button className="btn btn-dark address">Enter address</button>
    <button className="btn btn-dark open">Open now</button>
    <button className="btn btn-dark food"><i className="fas fa-coffee" /></button>
    <button className="btn btn-dark-outline wifi"><i className="fas fa-wifi" /></button>
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
