import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import LinkedModal from './linkedModal';
import makeUrlFriendly from '../utils/makeUrlFriendly';


class LinkValidator extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ parklets: nextProps.parklets });
  }

  render() {
    return (
      <Fragment>
        <Route
          render={(props) => {
            const pathWithoutSlash = props.location.pathname.slice(1);
            const parkletData = this.state.parklets.filter(el => makeUrlFriendly(el.title) === pathWithoutSlash);

            if (parkletData.length > 0 && this.state.parklets.length > 0) {
              return <LinkedModal parklet={parkletData[0]} />;
            }
            return null;
          }}
        />
      </Fragment>
    );
  }
}

export default LinkValidator;
