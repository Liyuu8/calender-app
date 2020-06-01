import dayjs from 'dayjs';

export const createCalendar = (month) => {
  // 今月の最初の日を追加;
  // [Ex] $d: Fri May 01 2020 00:00:00 GMT+0900 (日本標準時)
  const firstDay = getMonth(month);

  // 今月1日の曜日のindexを取得
  // [Ex] 金曜の場合：5
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, 'day');

      return day;
    });
};

export const isSameDay = (d1, d2) => {
  const format = 'YYYYMMDD';
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (d1, d2) => {
  return d1.month() === d2.month();
};

export const isFirstDay = (day) => day.date() === 1;

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

const getMonthStateCreator = (diff) => (month) => {
  const day = getMonth(month).add(diff, 'month');
  return formatMonth(day);
};

export const getNextMonth = getMonthStateCreator(1);

export const getPreviousMonth = getMonthStateCreator(-1);

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});
