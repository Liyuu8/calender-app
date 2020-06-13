// constants
export const SCHEDULES_ADD_ITEM = 'SCHEDULES_ADD_ITEM';
export const SCHEDULES_FETCH_ITEM = 'SCHEDULES_FETCH_ITEM';
export const SCHEDULES_SET_LOADING = 'SCHEDULES_SET_LOADING';
export const SCHEDULES_DELETE_ITEM = 'SCHEDULES_DELETE_ITEM';

// actions
export const schedulesAddItem = (payload) => ({
  type: SCHEDULES_ADD_ITEM,
  payload,
  // payload には dialog から作成した schedule.form を渡す
});
export const scheduleFetchItem = (payload) => ({
  type: SCHEDULES_FETCH_ITEM,
  payload,
});
export const scheduleSetLoading = () => ({
  type: SCHEDULES_SET_LOADING,
});
export const scheduleDeleteItem = (payload) => ({
  type: SCHEDULES_DELETE_ITEM,
  payload,
  // payload は削除した schedule を除外した配列
});
