import {
  scheduleFetchItem,
  scheduleSetLoading,
  schedulesAddItem,
  scheduleDeleteItem,
} from './actions';

import { get, post, deleteRequest } from '../../services/api';
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

export const asyncSchedulesDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(scheduleSetLoading());

  const currentSchedules = getState().schedules.items;
  await deleteRequest(`schedules/${id}`);
  const newSchedules = currentSchedules.filter((s) => s.id !== id);

  dispatch(scheduleDeleteItem(newSchedules));
};
