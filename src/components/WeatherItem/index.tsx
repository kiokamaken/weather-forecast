import React from 'react';
import Typo from 'components/Typo';
import { WeatherBase } from 'models';
import { StyledWeatherItem } from './Styled';
import { Col, Row } from 'antd';
import { getDayInWeek } from 'utils/datetime';
import memoize from 'lodash/fp/memoize';

interface WeatherItemProps {
  forecast: WeatherBase;
  isCelsius: boolean;
}

const WeatherItem = ({ forecast, isCelsius }: WeatherItemProps) => {
  const dayDisplay = memoize((date: string) => {
    const dayInWeek = getDayInWeek(date);
    return dayInWeek?.isToday
      ? 'Today'
      : dayInWeek?.isTomorrow
      ? 'Tomorrow'
      : dayInWeek?.day;
  });

  const convertUnit = (temp: number) => {
    const rounded = Math.round(temp);
    // convert Celsius to Fahrenheit
    return isCelsius ? rounded : Math.round(rounded * 1.8 + 32);
  };

  const getUnitText = () => (isCelsius ? '°C' : '°F');

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
            {convertUnit(forecast.the_temp)}
          </Typo>
          <Typo size="medium" fontWeight="400">
            {getUnitText()}
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
              {convertUnit(forecast.min_temp)} {getUnitText()}
            </Typo>
          </Col>
          <Col>
            <Typo size="small" color={'secondary'} fontWeight="500">
              Max:
            </Typo>{' '}
            <Typo size="small" fontWeight="500">
              {convertUnit(forecast.max_temp)} {getUnitText()}
            </Typo>
          </Col>
        </Row>
      </article>
    </StyledWeatherItem>
  );
};

export default React.memo(WeatherItem);
