import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getLocationSuggestions,
  getLocationSuggestionsSuccess,
  getLocationSuggestionsFail,
  getForecastByWoeId,
  getForecastByWoeIdSuccess,
  getForecastByWoeIdFail,
} from './slice';
import { searchLocation, getForecastById } from 'services/metaWeather.service';
import { ActionPayloads } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { LocationBase, Location } from 'models';

function* fetchlocationSuggestions(
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

function* getForecastData(
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
