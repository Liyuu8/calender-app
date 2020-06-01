import React from 'react';
import { Typography } from '@material-ui/core';
import dayjs from 'dayjs';

import * as styles from './style.css';
import {
  isFirstDay,
  isSameDay,
  isSameMonth,
  getMonth,
} from '../../services/calendar';

// カレンダーの日付の要素を返す
const CalendarElement = ({ day, month }) => {
  const today = dayjs();

  // 月の最初の日のみ月情報を追加して表示する
  const formattedDay = isFirstDay(day) ? 'M/D' : 'D';

  // 当日かどうか判断
  const isToday = isSameDay(day, today);

  // 今月以外をグレーダウン
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? 'textPrimary' : 'textSecondary';

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ''}>
          {day.format(formattedDay)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
