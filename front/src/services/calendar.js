import dayjs from 'dayjs';

export const createCalendar = () => {
  // 今月の最初の日を追加;
  // [Ex] $d: Fri May 01 2020 00:00:00 GMT+0900 (日本標準時)
  const firstDay = dayjs().startOf('month');

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
