import { combineReducers } from 'redux';
import calendarReducer from './calendar/reducer';

// combineReducersの引数: {[state名]: [reducer名]}
const rootReducer = combineReducers({ calendar: calendarReducer });

export default rootReducer;
