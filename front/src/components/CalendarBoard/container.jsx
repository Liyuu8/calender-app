import { connect } from 'react-redux';

import { createCalendar } from '../../services/calendar';
import CalendarBoard from './presentation';
import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from '../../redux/addSchedule/actions';

const mapStateToProps = (state) => ({
  calendar: state.calendar,
  schedules: state.schedules,
});

const mapdispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  calendar: createCalendar(stateProps.calendar),
  month: stateProps.calendar,
});

export default connect(
  mapStateToProps,
  mapdispatchToProps,
  mergeProps
)(CalendarBoard);
