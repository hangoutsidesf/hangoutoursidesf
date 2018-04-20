import React from 'react';
import fetchMock from 'fetch-mock';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import dummyData from '../../client/parklets.json';
import LinkValidator from '../../client/src/linkValidator';


describe('A user goes to a url representing a parklet', () => {
  beforeEach(() => {
    const url = 'https://data.sfgov.org/resource/6a7x-cttf.json';
    fetchMock.getOnce(
      url,
      { status: 200, body: dummyData },
      { overwriteRoutes: false },
    );
  });

  const mockParklets = [
    {
      title: 'Other Avenues Food Store',
      position: [37.760648871591, -122.504335015934],
    },
    {
      title: 'Rolling Out, Inc.',
      position: [37.742808656631, -122.484683675488],
    },
  ];
  test('it should render a 404 div when going to an unrecognized parklet', () => {
    const nonExistingUrl = ['/asdfasdf'];
    const fourOhFourText =
      'Oops, that\'s not a recognized page. In the meantime, explore these parklets!';
    const routedPage = (
      <MemoryRouter initialEntries={nonExistingUrl}>
        <LinkValidator parklets={mockParklets} />
      </MemoryRouter>);

    const modalSpy = jest.spyOn(LinkValidator.prototype, 'displayParkletModal');

    const wrapper = mount(routedPage);

    expect(wrapper.find(LinkValidator).text()).toBe(fourOhFourText);
    expect(modalSpy).toHaveBeenCalledTimes(0);
  });

  test('it should render a modal containing the parklet title when going to a recognized parklet', () => {
    const existingUrl = ['/rollingoutinc'];
    const routedPage = (
      <MemoryRouter initialEntries={existingUrl}>
        <LinkValidator parklets={mockParklets} />
      </MemoryRouter>);

    const renderSpy = jest.spyOn(LinkValidator.prototype, 'render');
    const modalSpy = jest.spyOn(LinkValidator.prototype, 'displayParkletModal');

    mount(routedPage);

    expect(renderSpy).toHaveBeenCalled();
    expect(modalSpy).toHaveBeenCalled();
  });

  test('it should not render a 404 when going to the root path', () => {
    const rootUrl = ['/'];
    const routedPage = (
      <MemoryRouter initialEntries={rootUrl}>
        <LinkValidator parklets={mockParklets} />
      </MemoryRouter>);

    const wrapper = mount(routedPage);

    expect(wrapper.find(LinkValidator).html()).toBe(null);
  });
});
