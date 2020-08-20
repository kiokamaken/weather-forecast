import memoize from 'lodash/fp/memoize';

const daysInWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const isValidDate = (input: string) => !isNaN(Date.parse(input));

export const getDayInWeek = memoize((input: string) => {
  const now = new Date().getDay();
  const tomorrow = now + 1;
  if (isValidDate(input)) {
    const day = new Date(input).getDay();
    return {
      day: daysInWeek[day],
      isToday: now === day,
      isTomorrow: tomorrow === day,
    };
  }
  return null;
});

export const formatTime = memoize((input: string) => {
  if (isValidDate(input)) {
    return new Date(input).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  return null;
});
