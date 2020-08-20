import React from 'react';
import Typo from 'components/Typo';
import { WeatherBase } from 'models';
import { StyledWeatherItem } from './Styled';
import { Col, Row } from 'antd';
import { dayDisplay, convertUnit, getUnitText } from './utils';

export interface WeatherItemProps {
  forecast: WeatherBase;
  isCelsius: boolean;
}

const WeatherItem: React.FC<WeatherItemProps> = ({ forecast, isCelsius }) => {
  return (
    <StyledWeatherItem>
      <img
        src={`https://www.metaweather.com/static/img/weather/${forecast.weather_state_abbr}.svg`}
        alt="forecast-icon"
      />
      <Typo className="day" size="small" fontWeight="600">
        {dayDisplay(forecast.applicable_date)}
      </Typo>
      <article>
        <section className="the-temp">
          <Typo size="large" fontWeight="600">
            {convertUnit(forecast.the_temp, isCelsius)}
          </Typo>
          <Typo size="medium" fontWeight="400">
            {getUnitText(isCelsius)}
          </Typo>
          <div>
            <Typo size="small" fontWeight="300">
              {forecast.weather_state_name}
            </Typo>
          </div>
        </section>
        <Row justify="space-between" className="additional">
          <Col>
            <Typo size="small" color={'primary'} fontWeight="500">
              Min:
            </Typo>{' '}
            <Typo size="small" fontWeight="500">
              {convertUnit(forecast.min_temp, isCelsius)}{' '}
              {getUnitText(isCelsius)}
            </Typo>
          </Col>
          <Col>
            <Typo size="small" color={'secondary'} fontWeight="500">
              Max:
            </Typo>{' '}
            <Typo size="small" fontWeight="500">
              {convertUnit(forecast.max_temp, isCelsius)}{' '}
              {getUnitText(isCelsius)}
            </Typo>
          </Col>
        </Row>
      </article>
    </StyledWeatherItem>
  );
};

export default React.memo(WeatherItem);
