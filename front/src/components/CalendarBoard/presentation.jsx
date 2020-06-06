import React from 'react';
import { GridList } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import * as styles from './style.css';
import CalendarElement from '../CalendarElement';

const dayOfTheWeek = ['日', '月', '火', '水', '木', '金', '土'];

const CalendarBoard = ({
  calendar,
  month,
  openAddScheduleDialog,
  openCurrentScheduleDialog,
}) => {
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
        {calendar.map(({ date, schedules }) => (
          <li
            key={date.toISOString()}
            onClick={() => openAddScheduleDialog(date)}
          >
            <CalendarElement
              day={date}
              month={month}
              schedules={schedules}
              onClickSchedule={openCurrentScheduleDialog}
            />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
