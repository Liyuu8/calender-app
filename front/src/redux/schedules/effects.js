import {
  schedulesFetchItem,
  schedulesSetLoading,
  schedulesAddItem,
  schedulesDeleteItem,
  schedulesAsyncFailure,
} from './actions';

import { get, post, deleteRequest } from '../../services/api';
import { formatSchedule } from '../../services/schedule';

export const asyncSchedulesFetchItem = ({ month, year }) => async (
  dispatch
) => {
  dispatch(schedulesSetLoading());
  const path = `schedules?month=${month}&year=${year}`;

  try {
    const result = await get(path);
    const formattedSchedule = result.map((r) => formatSchedule(r));

    dispatch(schedulesFetchItem(formattedSchedule));
  } catch (error) {
    dispatch(schedulesAsyncFailure(error.message));
  }
};

export const asyncSchedulesAddItem = (schedule) => async (dispatch) => {
  dispatch(schedulesSetLoading());
  const body = { ...schedule, date: schedule.date.toISOString() };

  try {
    const result = await post('schedules', body);
    const newSchedule = formatSchedule(result);

    dispatch(schedulesAddItem(newSchedule));
  } catch (error) {
    dispatch(schedulesAsyncFailure(error.message));
  }
};

export const asyncSchedulesDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());
  const currentSchedules = getState().schedules.items;

  try {
    await deleteRequest(`schedules/${id}`);
    const newSchedules = currentSchedules.filter((s) => s.id !== id);

    dispatch(schedulesDeleteItem(newSchedules));
  } catch (error) {
    dispatch(schedulesAsyncFailure(error.message));
  }
};
