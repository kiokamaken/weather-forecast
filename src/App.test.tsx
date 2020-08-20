import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Test Suite', () => {
  it('Should render without crashing', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
