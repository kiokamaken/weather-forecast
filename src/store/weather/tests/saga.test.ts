import { put, takeLatest } from 'redux-saga/effects';
import WeatherSaga, {
  fetchlocationSuggestions,
  getForecastData,
} from '../saga';
import { mockLocation, mockSuggestions } from 'services/mocks/metaWeather.mock';
import {
  getLocationSuggestionsSuccess,
  getForecastByWoeIdSuccess,
  getLocationSuggestionsFail,
  getForecastByWoeIdFail,
  getLocationSuggestions,
  getForecastByWoeId,
} from '../slice';

describe('Weather saga', () => {
  let fetchLocationGenerator: Generator;
  let forecastDataGenerator: Generator;

  const suggestionPayload = { search: 'abc', isLattLong: false };
  const forecastPayload = { id: '123' };

  beforeEach(() => {
    fetchLocationGenerator = fetchlocationSuggestions({
      payload: suggestionPayload,
      type: '',
    });
    fetchLocationGenerator.next();

    forecastDataGenerator = getForecastData({
      payload: forecastPayload,
      type: '',
    });
    forecastDataGenerator.next();
  });

  it('Should dispatch getLocationSuggestionsSuccess when fetch successfully', () => {
    const putData = fetchLocationGenerator.next(mockSuggestions).value;
    expect(putData).toEqual(
      put(getLocationSuggestionsSuccess(mockSuggestions))
    );
  });

  it('Should call the getLocationSuggestionsFail action if the response errors', () => {
    const response = new Error('Some error');
    const putData = fetchLocationGenerator.throw(response).value;
    expect(putData).toEqual(put(getLocationSuggestionsFail()));
  });

  it('Should dispatch getForecastByWoeIdSuccess when fetch successfully', () => {
    const putData = forecastDataGenerator.next(mockLocation).value;
    expect(putData).toEqual(put(getForecastByWoeIdSuccess(mockLocation)));
  });

  it('Should call the getForecastByWoeIdFail action if the response errors', () => {
    const response = new Error('Some error');
    const putData = forecastDataGenerator.throw(response).value;
    expect(putData).toEqual(put(getForecastByWoeIdFail()));
  });

  describe('takeLatest', () => {
    let weatherGenerator: Generator;

    beforeEach(() => {
      weatherGenerator = WeatherSaga();
    });

    it('Should start watching for getLocationSuggestions', () => {
      const takeLatestDes = weatherGenerator.next().value;
      expect(takeLatestDes).toEqual(
        takeLatest(getLocationSuggestions, fetchlocationSuggestions)
      );
    });

    it('Should start watching for getForecastByWoeId', () => {
      weatherGenerator.next();
      const takeLatestDes = weatherGenerator.next().value;
      expect(takeLatestDes).toEqual(
        takeLatest(getForecastByWoeId, getForecastData)
      );
    });
  });
});
