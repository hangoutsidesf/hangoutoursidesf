import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LinkedModal from './linkedModal';
import makeUrlFriendly from '../utils/makeUrlFriendly';


class LinkValidator extends Component {
  constructor(props) {
    super(props);
    this.state = { parklets: '', ...props };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ parklets: nextProps.parklets });
  }

  render() {
    const { parklets } = this.state;

    return (
      <Route
        render={(props) => {
          const pathWithoutSlash = props.location.pathname.slice(1);
          const parkletData = parklets.filter(el => makeUrlFriendly(el.title) === pathWithoutSlash);

          if (pathWithoutSlash && parkletData.length === 0) {
            return <div>Oops, that's not a recognized page. In the meantime, explore these parklets!</div>;
          }

          if (parkletData.length > 0 && parklets.length > 0) {
            return <LinkedModal parklet={parkletData[0]} />;
          }

          return null;
        }}
      />
    );
  }
}

export default LinkValidator;
