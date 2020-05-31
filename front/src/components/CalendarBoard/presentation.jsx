import React from 'react';
import { GridList } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import * as styles from './style.css';
import CalendarElement from '../CalendarElement';

const dayOfTheWeek = ['日', '月', '火', '水', '木', '金', '土'];

const CalendarBoard = ({ calendar }) => {
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
          <li key={c.toISOString()}>
            <CalendarElement day={c} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
