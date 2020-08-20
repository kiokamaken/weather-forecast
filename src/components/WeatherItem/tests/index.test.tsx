import React from 'react';
import { shallow } from 'enzyme';
import WeatherItem, { WeatherItemProps } from '../index';
import { dayDisplay, convertUnit, getUnitText } from '../utils';
import Typo from 'components/Typo';

const initProps: WeatherItemProps = {
  forecast: {
    id: 6354851325804544,
    weather_state_name: 'Heavy Cloud',
    weather_state_abbr: 'hc',
    wind_direction_compass: 'SSW',
    applicable_date: '2020-08-20',
    min_temp: 16.955,
    max_temp: 23.17,
    the_temp: 24.25,
    wind_speed: 8.61435061318699,
    wind_direction: 202.16673391024787,
    air_pressure: 1004.5,
    humidity: 54,
    visibility: 12.514726497256024,
    predictability: 71,
    created: '',
  },
  isCelsius: true,
};

const renderComponent = (props: WeatherItemProps) =>
  shallow(<WeatherItem {...props} />);
let component = renderComponent(initProps);

describe('<WeatherItem />', () => {
  beforeEach(() => (component = renderComponent(initProps)));

  it('Should render weather image', () => {
    const src = `https://www.metaweather.com/static/img/weather/${initProps.forecast.weather_state_abbr}.svg`;
    expect(component.find('img').prop('src')).toEqual(src);
  });

  it('Should render day in week', () => {
    const dayInWeek = dayDisplay(initProps.forecast.applicable_date);
    expect(component.find(Typo).first().text()).toEqual(dayInWeek);
  });

  it('Should render day in week as Today', () => {
    const newProps: WeatherItemProps = {
      ...initProps,
    };
    newProps.forecast.applicable_date = new Date().toString();
    const newComponent = renderComponent(newProps);
    const dayInWeek = dayDisplay(newProps.forecast.applicable_date);

    expect(newComponent.find(Typo).first().text()).toEqual(dayInWeek);
  });

  it('Should render day in week as Tomorrow', () => {
    const newProps: WeatherItemProps = {
      ...initProps,
    };
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    newProps.forecast.applicable_date = tomorrow.toString();
    const newComponent = renderComponent(newProps);
    const dayInWeek = dayDisplay(newProps.forecast.applicable_date);

    expect(newComponent.find(Typo).first().text()).toEqual(dayInWeek);
  });

  it('Should render the-temp section', () => {
    expect(component.find('.the-temp').length).toEqual(1);
  });

  it('Should render correct temperature value', () => {
    const tempElement = component.find('.the-temp').find(Typo).at(0);
    const tempValue = convertUnit(
      initProps.forecast.the_temp,
      initProps.isCelsius
    ).toString();

    expect(tempElement.text()).toEqual(tempValue);
  });

  it('Should render °C symbol when isCelsius is true', () => {
    const tempSymbol = component.find('.the-temp').find(Typo).at(1).text();
    const symbol = getUnitText(initProps.isCelsius);

    expect(tempSymbol).toEqual(symbol);
  });

  it('Should render °F symbol when isCelsius is false', () => {
    const newProps: WeatherItemProps = {
      ...initProps,
    };
    newProps.isCelsius = false;
    const newComponent = renderComponent(newProps);
    const tempSymbol = newComponent.find('.the-temp').find(Typo).at(1).text();
    const symbol = getUnitText(false);

    expect(tempSymbol).toEqual(symbol);
  });

  it('Should render additional section', () => {
    expect(component.find('.additional').length).toEqual(1);
  });

  it('Should render Min block', () => {
    const text = component.find('.additional').find(Typo).at(0).text();
    expect(text).toEqual('Min:');
  });

  it('Should render Max block', () => {
    const text = component.find('.additional').find(Typo).at(2).text();
    expect(text).toEqual('Max:');
  });
});
