import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../client/src/App';

describe('App component', () => {
  xtest('App should match snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
