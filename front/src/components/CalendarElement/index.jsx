import React from 'react';
import { Typography } from '@material-ui/core';

import * as styles from './style.css';

// カレンダーの日付の要素を返す
const CalendarElement = ({ day }) => {
  const formattedDay = day.date() === 1 ? 'M/D' : 'D';

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
      >
        {day.format(formattedDay)}
      </Typography>
    </div>
  );
};

export default CalendarElement;
