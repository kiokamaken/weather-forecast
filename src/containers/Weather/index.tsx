import { AutoComplete, Col, Switch, Select, message } from 'antd';
import MainContent from 'components/Layout/MainContent';
import Row from 'components/Layout/Row';
import StatusIndicator from 'components/StatusIndicator';
import WeatherItem from 'components/WeatherItem';
import LocationInfoSection from 'components/LocationInfoSection';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectForecastData,
  selectLoading,
  selectLocationSuggestion,
  selectIsCelsius,
  selectError,
} from 'store/weather/selectors';
import {
  getForecastByWoeId,
  getLocationSuggestions,
  toggleCelcius,
} from 'store/weather/slice';
import { PageHeader } from './Styled';
import debounce from 'lodash/fp/debounce';

const { Option } = Select;

const Weather: React.FC = () => {
  const [searchType, setSearchType] = useState('location');

  const dispatch = useDispatch();
  const options = useSelector(selectLocationSuggestion);
  const forecastData = useSelector(selectForecastData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isCelsius = useSelector(selectIsCelsius);

  useEffect(() => {
    error?.length && message.error(error[0]);
  }, [error]);

  const onSearch = debounce(
    300,
    (search: string) =>
      search.trim() !== '' &&
      dispatch(
        getLocationSuggestions({
          search,
          isLattLong: searchType === 'lattlong',
        })
      )
  );

  const onSelect = (value: string, option: any) =>
    value && dispatch(getForecastByWoeId({ id: option.key }));

  const onChangeUnit = () => dispatch(toggleCelcius());

  return (
    <MainContent>
      <PageHeader>
        {forecastData && <LocationInfoSection info={forecastData} />}
      </PageHeader>
      <Row align="middle">
        <Col xs={{ order: 1, span: 10 }} sm={4}>
          <Select
            value={searchType}
            onChange={(value: string) => setSearchType(value)}
          >
            <Option value="location">Location</Option>
            <Option value="lattlong">LattLong</Option>
          </Select>
        </Col>
        <Col xs={{ order: 4, span: 22 }} sm={{ order: 2, span: 6 }}>
          <AutoComplete
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="Input Location here"
          >
            {options &&
              options.map((option) => (
                <AutoComplete.Option key={option.woeid} value={option.title}>
                  {option.title}
                </AutoComplete.Option>
              ))}
          </AutoComplete>
        </Col>
        <Col xs={{ order: 5, span: 2 }} sm={{ order: 3, span: 2 }}>
          <StatusIndicator loading={loading} warning={!!error?.length} />
        </Col>
        <Col flex="auto" xs={{ order: 2 }} sm={{ order: 4 }} />
        <Col xs={{ order: 3, span: 4 }} sm={{ order: 5, span: 2 }}>
          <Switch
            checkedChildren="°C"
            unCheckedChildren="°F"
            checked={isCelsius}
            onChange={onChangeUnit}
          />
        </Col>
      </Row>
      <Row>
        {forecastData &&
          forecastData.consolidated_weather.map((forecast) => (
            <Col xs={12} sm={6} md={4} key={forecast.id}>
              <WeatherItem forecast={forecast} isCelsius={isCelsius} />
            </Col>
          ))}
      </Row>
    </MainContent>
  );
};

export default Weather;
