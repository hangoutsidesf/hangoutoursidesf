import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import dummyData from '../../client/parklets.json';
import App from '../../client/src/App';

const url = '/parklets';

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
    const { activeParklets } = wrapper.state();

    expect(activeParklets).toHaveLength(21);
    wrapper.instance().handleFilters('wifiFilter');
  });
  test('Only parklets with food available with only wifi filter on', () => {
    wrapper.instance().handleFilters('foodFilter');
    const { activeParklets } = wrapper.state();

    expect(activeParklets).toHaveLength(21);
    wrapper.instance().handleFilters('foodFilter');
  });

  test('Only parklets that are open available with only open filter on', () => {
    wrapper.instance().handleFilters('openFilter');
    const { activeParklets } = wrapper.state();

    expect(activeParklets).toHaveLength(23);
    wrapper.instance().handleFilters('openFilter');
  });

  test('Only parklets with wifi and food active with wifi and food filter on', () => {
    wrapper.instance().handleFilters('wifiFilter');
    wrapper.instance().handleFilters('foodFilter');
    const { activeParklets } = wrapper.state();

    expect(activeParklets).toHaveLength(10);
    wrapper.instance().handleFilters('wifiFilter');
  });

  test('Only parklets with food and open active with food and open filter on', () => {
    wrapper.instance().handleFilters('openFilter');
    const { activeParklets } = wrapper.state();

    expect(activeParklets).toHaveLength(12);
    wrapper.instance().handleFilters('foodFilter');
  });

  test('Only parklets with wifi and open active with food and open filter on', () => {
    wrapper.instance().handleFilters('wifiFilter');
    const { activeParklets } = wrapper.state();

    expect(activeParklets).toHaveLength(12);
  });

  test('Only parklets with wifi, food, and open active with all filters on', () => {
    wrapper.instance().handleFilters('foodFilter');
    const { activeParklets } = wrapper.state();

    expect(activeParklets).toHaveLength(1);
  });
});
