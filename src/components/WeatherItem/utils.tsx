import { getDayInWeek } from 'utils/datetime';
import memoize from 'lodash/fp/memoize';

export const dayDisplay = memoize((date: string) => {
  const dayInWeek = getDayInWeek(date);
  return dayInWeek?.isToday
    ? 'Today'
    : dayInWeek?.isTomorrow
    ? 'Tomorrow'
    : dayInWeek?.day;
});

export const convertUnit = (temp: number, isCelsius: boolean) => {
  const rounded = Math.round(temp);
  // convert Celsius to Fahrenheit
  return isCelsius ? rounded : Math.round(rounded * 1.8 + 32);
};

export const getUnitText = (isCelsius: boolean) => (isCelsius ? '°C' : '°F');
