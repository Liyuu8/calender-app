// constants
export const SCHEDULES_ADD_ITEM = 'SCHEDULES_ADD_ITEM';
export const SCHEDULES_FETCH_ITEM = 'SCHEDULES_FETCH_ITEM';
export const SCHEDULES_SET_LOADING = 'SCHEDULES_SET_LOADING';

// payloadには dialog から作成した schedule.form を渡す
export const schedulesAddItem = (payload) => ({
  type: SCHEDULES_ADD_ITEM,
  payload,
});

export const scheduleFetchItem = (payload) => ({
  type: SCHEDULES_FETCH_ITEM,
  payload,
});

export const scheduleSetLoading = () => ({
  type: SCHEDULES_SET_LOADING,
});
