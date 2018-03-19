import React from 'react';
import { shallow } from 'enzyme';

import MapView from '../../client/src/mapView';

describe('Map loads on screen properly', () => {
  const wrapper = shallow(<MapView />);
  it('centers on San Francisco', () => {
    const { center } = wrapper.state();
    expect(Math.round(center[0])).toBe(38);
    expect(Math.round(center[1])).toBe(-122);
  });

  it('contains a map', () => {
    expect(wrapper.find('Map')).toHaveLength(1);
  });

  it('renders a tileset and map attribution', () => {
    expect(wrapper.find('TileLayer')).toHaveLength(1);
    expect(wrapper.find('TileLayer').props().url).toBeDefined();
    expect(wrapper.find('TileLayer').props().attribution).toBeDefined();
  });
});

describe('Marker data loads after fetch', () => {
  it('contains all parklets', () => {

  });

  it('corrects the coordinates from lon-lat to lat-lon', () => {

  });

  it('renders the error message when the fetch is unsuccessful', () => {

  });

  it('renders an icon for a given marker', () => {

  });
});

describe('User clicks on a marker', () => {
  it('hides the leaflet popup', () => {

  });

  it('displays a modal on click', () => {

  });
});
