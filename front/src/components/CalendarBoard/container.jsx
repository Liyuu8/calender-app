import { connect } from 'react-redux';

import { createCalendar } from '../../services/calendar';
import { setSchedules } from '../../services/schedule';

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

const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules },
  } = stateProps;

  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month,
  };
};

export default connect(
  mapStateToProps,
  mapdispatchToProps,
  mergeProps
)(CalendarBoard);
