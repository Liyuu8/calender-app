import React from 'react';
import { GridList } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import * as styles from './style.css';
import CalendarElement from '../CalendarElement';

const dayOfTheWeek = ['日', '月', '火', '水', '木', '金', '土'];

const CalendarBoard = ({ calendar, month, openAddScheduleDialog }) => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {dayOfTheWeek.map((d) => (
          <li>
            <Typography
              className={styles.dayOfTheWeek}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map((c) => (
          <li key={c.toISOString()} onClick={() => openAddScheduleDialog()}>
            <CalendarElement day={c} month={month} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
