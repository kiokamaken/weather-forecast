import React from 'react';
import { shallow } from 'enzyme';
import MainContent from '../MainContent';

const children = <div>Test</div>;
const renderComponent = () => shallow(<MainContent>{children}</MainContent>);

describe('<MainContent />', () => {
  it('Should render children', () => {
    const component = renderComponent();
    expect(component.contains(children)).toEqual(true);
  });
});
