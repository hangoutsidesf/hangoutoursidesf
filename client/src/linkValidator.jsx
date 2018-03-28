import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    const invalidUrlMessage = 'Oops, that\'s not a recognized page. In the meantime, explore these parklets!';

    return (
      <Route
        render={(props) => {
          const pathWithoutSlash = props.location.pathname.slice(1);
          const parkletHash = {};
          const parkletsList = parklets.map(el => makeUrlFriendly(el.title));
          parkletsList.forEach((el) => {
            parkletHash[el] = true;
          });

          if (Object.keys(parklets).length > 0) {
            if (parkletHash[pathWithoutSlash]) {
              const parklet = parklets.filter(el => makeUrlFriendly(el.title) === pathWithoutSlash);
              return <LinkedModal parklet={parklet[0]} />;
            }
            if (props.location.pathname !== '/') {
              return <div>{invalidUrlMessage}</div>;
            }
          }

          return null;
        }}
      />
    );
  }
}

LinkValidator.propTypes = {
  parklets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default LinkValidator;
