import { createSelector } from '@reduxjs/toolkit';
import { RootReducerType } from 'store/rootReducer';

export const selectWeather = createSelector(
  (state: RootReducerType) => state.weather,
  (weather) => weather
);

export const selectLocationSuggestion = createSelector(
  selectWeather,
  (weather) => weather.locationSuggestions
);

export const selectForecastData = createSelector(
  selectWeather,
  (weather) => weather.forecastData
);

export const selectIsCelsius = createSelector(
  selectWeather,
  (weather) => weather.isCelsius
);

export const selectLoading = createSelector(
  selectWeather,
  (weather) => weather.loading
);

export const selectError = createSelector(
  selectWeather,
  (weather) => weather.error
);