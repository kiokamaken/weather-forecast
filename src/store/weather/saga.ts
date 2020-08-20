import { PayloadAction } from '@reduxjs/toolkit';
import { Location, LocationBase } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getForecastById, searchLocation } from 'services/metaWeather.service';

import {
  ActionPayloads,
  getForecastByWoeId,
  getForecastByWoeIdFail,
  getForecastByWoeIdSuccess,
  getLocationSuggestions,
  getLocationSuggestionsFail,
  getLocationSuggestionsSuccess,
} from './slice';

export function* fetchlocationSuggestions(
  action: PayloadAction<ActionPayloads['getLocation']>
) {
  const {
    payload: { search, isLattLong },
  } = action;
  try {
    const data: LocationBase[] = yield call(searchLocation, search, isLattLong);
    yield put(getLocationSuggestionsSuccess(data));
  } catch (e) {
    yield put(getLocationSuggestionsFail());
  }
}

export function* getForecastData(
  action: PayloadAction<ActionPayloads['getForecastByWoeId']>
) {
  try {
    const data: Location = yield call(getForecastById, action.payload.id);
    yield put(getForecastByWoeIdSuccess(data));
  } catch (e) {
    yield put(getForecastByWoeIdFail());
  }
}

export default function* weatherSaga() {
  yield takeLatest(getLocationSuggestions, fetchlocationSuggestions);
  yield takeLatest(getForecastByWoeId, getForecastData);
}
