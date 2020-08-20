import React from 'react';
import { shallow } from 'enzyme';
import LocationInfoSection, { LocationInfoSectionProps } from '../index';
import { formatTime } from 'utils/datetime';

const renderComponent = (props: LocationInfoSectionProps) =>
  shallow(<LocationInfoSection {...props} />);
const initProps: LocationInfoSectionProps = {
  info: {
    time: '2020-8-20',
    title: 'City',
    parent: {
      title: 'Country',
      location_type: '',
      latt_long: '1',
      woeid: 1,
    },
  },
};

describe('<LocationInfoSection />', () => {
  it('Should render two section', () => {
    const component = renderComponent(initProps);
    expect(component.find('section').length).toEqual(2);
  });

  it('Should render City and Time', () => {
    const component = renderComponent(initProps);
    const {
      info: { time, title },
    } = initProps;
    const text = `${title}, ${formatTime(time)}`;
    expect(component.find('section').first().text()).toEqual(text);
  });

  it('Should render Country', () => {
    const component = renderComponent(initProps);
    const {
      info: { parent },
    } = initProps;
    expect(component.find('section').last().text()).toEqual(parent.title);
  });
});
