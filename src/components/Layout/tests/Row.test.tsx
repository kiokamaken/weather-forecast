import React from 'react';
import { shallow } from 'enzyme';
import Row from '../Row';

const children = <div>Test</div>;
const renderComponent = () => shallow(<Row>{children}</Row>);

describe('<Row />', () => {
  it('Should render children', () => {
    const component = renderComponent();
    expect(component.contains(children)).toEqual(true);
  });
});
