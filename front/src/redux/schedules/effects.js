import {
  scheduleFetchItem,
  scheduleSetLoading,
  schedulesAddItem,
} from './actions';

import { get, post } from '../../services/api';
import { formatSchedule } from '../../services/schedule';

export const asyncSchedulesFetchItem = ({ month, year }) => async (
  dispatch
) => {
  dispatch(scheduleSetLoading());

  const path = `schedules?month=${month}&year=${year}`;
  const result = await get(path);
  const formattedSchedule = result.map((r) => formatSchedule(r));

  dispatch(scheduleFetchItem(formattedSchedule));
};

export const asyncSchedulesAddItem = (schedule) => async (dispatch) => {
  dispatch(scheduleSetLoading());

  const body = { ...schedule, date: schedule.date.toISOString() };
  const result = await post('schedules', body);
  const newSchedule = formatSchedule(result);

  dispatch(schedulesAddItem(newSchedule));
};
