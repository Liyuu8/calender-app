import { scheduleFetchItem, scheduleSetLoading } from './actions';

import { get } from '../../services/api';
import { formatSchedule } from '../../services/schedule';

export const asyncScheduleFetchItem = ({ month, year }) => async (dispatch) => {
  dispatch(scheduleSetLoading());

  const path = `schedules?month=${month}&year=${year}`;
  const result = await get(path);
  const formattedSchedule = result.map((r) => formatSchedule(r));

  dispatch(scheduleFetchItem(formattedSchedule));
};
