import React from 'react';
import { Typography } from '@material-ui/core';

import * as styles from './style.css';

const CalendarElement = ({ day }) => {
  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
      >
        {day.format('D')}
      </Typography>
    </div>
  );
};

export default CalendarElement;
