import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import dummyData from '../../client/parklets.json';
import App from '../../client/src/App';

const url = 'https://data.sfgov.org/resource/6a7x-cttf.json';

describe('Filter Buttons', () => {
  fetchMock.getOnce(url, {
    status: 200,
    body: dummyData,
  });

  const wrapper = shallow(<App />);

  test('All parklets should be loaded with no filters', () => {
    const { activeParklets } = wrapper.state();
    expect(activeParklets).toHaveLength(32);
  });

  test('Only parklets with wifi active with only wifi filter on', () => {
    wrapper.instance().handleFilters('wifiFilter');
    const { activeParklets, hiddenParklets } = wrapper.state();
    const wifiOnly = [...activeParklets, ...hiddenParklets].filter(parklet => parklet.wifi);

    expect(activeParklets).toHaveLength(wifiOnly.length);
    wrapper.instance().handleFilters('wifiFilter');
  });
  test('Only parklets with food available with only wifi filter on', () => {
    wrapper.instance().handleFilters('foodFilter');
    const { activeParklets, hiddenParklets } = wrapper.state();
    const foodOnly = [...activeParklets, ...hiddenParklets].filter(parklet => parklet.food);

    expect(activeParklets).toHaveLength(foodOnly.length);
    wrapper.instance().handleFilters('foodFilter');
  });

  test('Only parklets that are open available with only open filter on', () => {
    wrapper.instance().handleFilters('openFilter');
    const { activeParklets, hiddenParklets } = wrapper.state();
    const openOnly = [...activeParklets, ...hiddenParklets].filter(parklet => parklet.open);

    expect(activeParklets).toHaveLength(openOnly.length);
    wrapper.instance().handleFilters('openFilter');
  });

  test('Only parklets with wifi and food active with wifi and food filter on', () => {
    wrapper.instance().handleFilters('wifiFilter');
    wrapper.instance().handleFilters('foodFilter');
    const { activeParklets, hiddenParklets } = wrapper.state();
    const wifiAndFood = [...activeParklets, ...hiddenParklets]
      .filter(parklet => parklet.wifi && parklet.food);

    expect(activeParklets).toHaveLength(wifiAndFood.length);
    wrapper.instance().handleFilters('wifiFilter');
  });

  test('Only parklets with food and open active with food and open filter on', () => {
    wrapper.instance().handleFilters('openFilter');
    const { activeParklets, hiddenParklets } = wrapper.state();
    const openAndFood = [...activeParklets, ...hiddenParklets]
      .filter(parklet => parklet.food && parklet.open);
    expect(activeParklets).toHaveLength(openAndFood.length);
    wrapper.instance().handleFilters('foodFilter');
  });

  test('Only parklets with wifi and open active with food and open filter on', () => {
    wrapper.instance().handleFilters('wifiFilter');
    const { activeParklets, hiddenParklets } = wrapper.state();
    const wifiAndOpen = [...activeParklets, ...hiddenParklets]
      .filter(parklet => parklet.wifi && parklet.open);
    expect(activeParklets).toHaveLength(wifiAndOpen.length);
  });

  test('Only parklets with wifi, food, and open active with all filters on', () => {
    wrapper.instance().handleFilters('foodFilter');
    const { activeParklets, hiddenParklets } = wrapper.state();
    const allFilters = [...activeParklets, ...hiddenParklets]
      .filter(parklet => parklet.wifi && parklet.open && parklet.food);
    expect(activeParklets).toHaveLength(allFilters.length);
  });
});
