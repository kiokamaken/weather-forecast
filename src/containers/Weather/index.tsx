import { AutoComplete, Col, message, Select, Switch } from 'antd';
import MainContent from 'components/Layout/MainContent';
import Row from 'components/Layout/Row';
import LocationInfoSection from 'components/LocationInfoSection';
import StatusIndicator from 'components/StatusIndicator';
import WeatherItem from 'components/WeatherItem';
import debounce from 'lodash/fp/debounce';
import { Location, LocationBase } from 'models';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  selectError,
  selectForecastData,
  selectLoading,
  selectLocationSuggestion,
} from 'store/weather/selectors';
import {
  getForecastByWoeId,
  getLocationSuggestions,
} from 'store/weather/slice';

import { PageHeader } from './Styled';

const { Option } = Select;

export interface WeatherProps {
  options: LocationBase[];
  forecastData: Location;
  loading: boolean;
  error: string[];
  getForecastByWoeId: Function;
  getLocationSuggestions: Function;
}

export class Weather extends React.Component<WeatherProps> {
  state = {
    isCelsius: true,
  };

  searchType = 'location';

  componentDidUpdate(prevProp: WeatherProps) {
    if (this.props.error?.length && !prevProp.error?.length) {
      message.error(this.props.error[0]);
    }
  }

  onSearch = debounce(
    300,
    (search: string) =>
      search.trim() !== '' &&
      this.props.getLocationSuggestions({
        search,
        isLattLong: this.searchType === 'lattlong',
      })
  );

  onSelect = (value: string, option: any) =>
    value && this.props.getForecastByWoeId({ id: option.key });

  onChangeUnit = () => this.setState({ isCelsius: !this.state.isCelsius });

  onChangeSearchType = (value: string) => (this.searchType = value);

  render() {
    const { forecastData, options, loading, error } = this.props;
    return (
      <MainContent>
        <PageHeader>
          {forecastData && <LocationInfoSection info={forecastData} />}
        </PageHeader>
        <Row align="middle">
          <Col xs={{ order: 1, span: 10 }} sm={4}>
            <Select
              defaultValue={'location'}
              onChange={this.onChangeSearchType}
            >
              <Option value="location">Location</Option>
              <Option value="lattlong">LattLong</Option>
            </Select>
          </Col>
          <Col xs={{ order: 4, span: 22 }} sm={{ order: 2, span: 6 }}>
            <AutoComplete
              onSelect={this.onSelect}
              onSearch={this.onSearch}
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
              checked={this.state.isCelsius}
              onChange={this.onChangeUnit}
            />
          </Col>
        </Row>
        <Row>
          {forecastData &&
            forecastData.consolidated_weather.map((forecast) => (
              <Col xs={12} sm={6} md={4} key={forecast.id}>
                <WeatherItem
                  forecast={forecast}
                  isCelsius={this.state.isCelsius}
                />
              </Col>
            ))}
        </Row>
      </MainContent>
    );
  }
}

export const mapState = (state: any) => ({
  options: selectLocationSuggestion(state),
  forecastData: selectForecastData(state),
  loading: selectLoading(state),
  error: selectError(state),
});

export const mapDispatch = (dispatch: any) =>
  bindActionCreators(
    {
      getForecastByWoeId,
      getLocationSuggestions,
    },
    dispatch
  );

const withConnect = connect(mapState, mapDispatch);

export default withConnect(Weather);
