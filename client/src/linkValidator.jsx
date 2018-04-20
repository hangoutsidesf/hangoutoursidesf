import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LinkedModal from './linkedModal';
import makeUrlFriendly from '../utils/makeUrlFriendly';

class LinkValidator extends Component {
  static getDerivedStateFromProps(nextProps) {
    return {
      parklets: nextProps.parklets,
    };
  }

  constructor(props) {
    super(props);
    this.state = { parklets: '', ...props };
  }

  /* eslint-disable class-methods-use-this */
  displayParkletModal(parklets, path) {
    const parklet = parklets.filter(el => makeUrlFriendly(el.title) === path);
    return <LinkedModal parklet={parklet[0]} />;
  }
  /* eslint-enable */

  displayDetailBasedOnUrl(props, parklets) {
    const invalidUrlMessage =
      "Oops, that's not a recognized page. In the meantime, explore these parklets!";
    const pathWithoutSlash = props.location.pathname.slice(1);

    if (Object.keys(parklets).length > 0) {
      const parkletsList = parklets.map(el => makeUrlFriendly(el.title));
      if (parkletsList.includes(pathWithoutSlash)) {
        return this.displayParkletModal(parklets, pathWithoutSlash);
      }
      if (props.location.pathname !== '/') {
        return <div>{invalidUrlMessage}</div>;
      }
    }

    return null;
  }

  render() {
    const { parklets } = this.state;
    return (
      <Route render={props => this.displayDetailBasedOnUrl(props, parklets)} />
    );
  }
}


export default LinkValidator;
