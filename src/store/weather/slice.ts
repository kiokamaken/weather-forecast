import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocationBase, Location } from 'models';

export interface WeatherState {
  loading: boolean;
  error: string[];
  isCelsius: boolean;
  forecastData: Location;
  locationSuggestions: LocationBase[];
}

export interface ActionPayloads {
  getLocation: { search: string, isLattLong: boolean };
  getLocationSuccess: LocationBase[];
  getForecastByWoeId: { id: string };
  getForecastByWoeIdSuccess: Location;
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { isCelsius: true } as WeatherState,
  reducers: {
    getLocationSuggestions(
      state,
      action: PayloadAction<ActionPayloads['getLocation']>
    ) {
      state.loading = true;
      state.error = [];
    },
    getLocationSuggestionsSuccess(
      state,
      action: PayloadAction<ActionPayloads['getLocationSuccess']>
    ) {
      state.locationSuggestions = action.payload;
      state.loading = false;
    },
    getLocationSuggestionsFail(state) {
      state.error = ['Get location suggestion fail'];
      state.loading = false;
    },
    getForecastByWoeId(
      state,
      action: PayloadAction<ActionPayloads['getForecastByWoeId']>
    ) {
      state.loading = true;
      state.error = [];
    },
    getForecastByWoeIdSuccess(
      state,
      action: PayloadAction<ActionPayloads['getForecastByWoeIdSuccess']>
    ) {
      state.forecastData = action.payload;
      state.loading = false;
    },
    getForecastByWoeIdFail(state) {
      state.error = ['Get Forecast fail'];
      state.loading = false;
    },
    toggleCelcius(state) {
      state.isCelsius = !state.isCelsius;
    },
  },
});

export const {
  getLocationSuggestions,
  getLocationSuggestionsSuccess,
  getLocationSuggestionsFail,
  getForecastByWoeId,
  getForecastByWoeIdSuccess,
  getForecastByWoeIdFail,
  toggleCelcius,
} = weatherSlice.actions;

export default weatherSlice.reducer;
