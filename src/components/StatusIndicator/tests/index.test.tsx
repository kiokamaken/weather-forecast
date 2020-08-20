import React from 'react';
import { shallow } from 'enzyme';
import { Spin } from 'antd';
import {
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from '@ant-design/icons';
import StatusIndicator, { StatusIndicatorProps } from '../index';

const initProps: StatusIndicatorProps = {
  loading: true,
};

const renderComponent = (props: StatusIndicatorProps) =>
  shallow(<StatusIndicator {...props} />);

describe('<StatusIndicator />', () => {
  it('Should render nothing when properties are false', () => {
    const newProps: StatusIndicatorProps = {
      loading: false,
      success: false,
      warning: false,
    };
    const component = renderComponent(newProps);
    expect(component).toEqual({});
  });

  it('Should render loading indicator', () => {
    const component = renderComponent(initProps);
    expect(component.find(Spin).length).toEqual(1);
  });

  it('Should render success icon', () => {
    const newProps: StatusIndicatorProps = {
      loading: false,
      success: true,
    };
    const component = renderComponent(newProps);
    expect(component.find(CheckCircleTwoTone).length).toEqual(1);
  });

  it('Should render warning icon', () => {
    const newProps: StatusIndicatorProps = {
      loading: false,
      warning: true,
    };
    const component = renderComponent(newProps);
    expect(component.find(ExclamationCircleTwoTone).length).toEqual(1);
  });
});
