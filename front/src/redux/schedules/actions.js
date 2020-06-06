// constants
export const SCHEDULES_ADD_ITEM = 'SCHEDULES_ADD_ITEM';

// payloadには dialog から作成した schedule.form を渡す
export const schedulesAddItem = (payload) => ({
  type: SCHEDULES_ADD_ITEM,
  payload,
});
