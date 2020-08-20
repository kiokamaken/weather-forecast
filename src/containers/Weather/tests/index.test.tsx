import { AutoComplete, Select, Switch } from 'antd';
import { light } from 'components/Layout/Theme';
import StatusIndicator from 'components/StatusIndicator';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import {
  getForecastByWoeId,
  getLocationSuggestions,
} from 'store/weather/slice';
import { ThemeProvider } from 'styled-components';

import Weather, { mapDispatch } from '..';
import { PageHeader } from '../Styled';

const fullMounted = () =>
  mount(
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <Weather />
      </ThemeProvider>
    </Provider>
  );

describe('<Weather />', () => {
  const mockDispatch = jest.fn();

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('Should render without crashing', () => {
    const container = fullMounted();
    expect(container).toMatchSnapshot();
  });

  it('Should render PageHeader', () => {
    const container = fullMounted();
    expect(container.find(PageHeader).length).toEqual(1);
  });

  it('Should render two Select component', () => {
    const container = fullMounted();
    expect(container.find(Select).length).toEqual(2);
  });

  it('Should render Autocomplete component', () => {
    const container = fullMounted();
    expect(container.find(AutoComplete).length).toEqual(1);
  });

  it('Should render StatusIndicator component', () => {
    const container = fullMounted();
    expect(container.find(StatusIndicator).length).toEqual(1);
  });

  it('Should render Switch component', () => {
    const container = fullMounted();
    expect(container.find(Switch).length).toEqual(1);
  });

  it('Should update searchType value when change', () => {
    const container = fullMounted();
    const searchTypeSelect = container.find(Select).at(0);
    expect(searchTypeSelect.invoke('onChange')('lattlong')).toEqual('lattlong');
  });

  it('Should define getLocationSuggestions', () => {
    const result = mapDispatch(mockDispatch);
    expect(result.getLocationSuggestions).toBeDefined();
  });

  it('Should dispatch getLocationSuggestions when called', () => {
    const result = mapDispatch(mockDispatch);
    const payload = { search: 'abc', isLattLong: false };
    result.getLocationSuggestions(payload);
    expect(mockDispatch).toHaveBeenCalledWith(getLocationSuggestions(payload));
  });

  it('Should define getForecastByWoeId', () => {
    const result = mapDispatch(mockDispatch);
    expect(result.getForecastByWoeId).toBeDefined();
  });

  it('Should dispatch getForecastByWoeId when called', () => {
    const result = mapDispatch(mockDispatch);
    const payload = { id: '123' };
    result.getForecastByWoeId(payload);
    expect(mockDispatch).toHaveBeenCalledWith(getForecastByWoeId(payload));
  });
});
