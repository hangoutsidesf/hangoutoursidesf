import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import dummyData from '../../client/parklets.json';
import MapView from '../../client/src/mapView';
import Marker from '../../client/src/marker';

const url = 'https://data.sfgov.org/resource/6a7x-cttf.json';

describe('Map loads on screen properly', () => {
  fetchMock.getOnce(url, {
    status: 200,
    body: dummyData,
  });

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
  fetchMock.restore();
  fetchMock.getOnce(url, {
    status: 200,
    body: dummyData,
  });

  const wrapper = shallow(<MapView />);
  it('contains all parklets', () => {
    const { parklets } = wrapper.state();
    expect(parklets).toHaveLength(32);
  });

  it('corrects the coordinates from lon-lat to lat-lon', () => {
    const firstParkletCoordinates = wrapper.state().parklets[0].position;
    expect(firstParkletCoordinates).toEqual([37.760648871591, -122.504335015934]);
  });

  it('renders an icon for a given marker', () => {
    const markerWrapper = shallow(<Marker detail="" position={[]} displayModal={() => {}} />);
    expect(markerWrapper.props().icon).toBeDefined();
  });
});

