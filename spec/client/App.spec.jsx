import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import dummyData from '../../client/parklets.json';
import App from '../../client/src/App';

const url = 'https://data.sfgov.org/resource/6a7x-cttf.json';

describe('App component', () => {
  xtest('App should match snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
