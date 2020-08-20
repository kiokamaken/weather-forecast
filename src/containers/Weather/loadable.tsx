import React from 'react';
import loadable from '@loadable/component';

const LoadableComponent = loadable(() => import('./index'));

const LoadableWeather = () => <LoadableComponent />;

export default LoadableWeather;
