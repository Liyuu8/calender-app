import { connect } from 'react-redux';

// presentation
import CalendarBoard from './presentation';

// services
import { createCalendar } from '../../services/calendar';
import { setSchedules } from '../../services/schedule';

// actions
import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from '../../redux/addSchedule/actions';
import {
  currentScheduleOpenDialog,
  currentScheduleSetItem,
} from '../../redux/currentSchedule/actions';

// effects
import { asyncSchedulesFetchItem } from '../../redux/schedules/effects';

const mapStateToProps = (state) => ({
  calendar: state.calendar,
  schedules: state.schedules,
});

const mapdispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },
  openCurrentScheduleDialog: (schedule, e) => {
    e.stopPropagation();

    dispatch(currentScheduleOpenDialog());
    dispatch(currentScheduleSetItem(schedule));
  },
  fetchSchedule: (month) => {
    dispatch(asyncSchedulesFetchItem(month));
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
    fetchSchedule: () => dispatchProps.fetchSchedule(month),
    calendar,
    month,
  };
};

export default connect(
  mapStateToProps,
  mapdispatchToProps,
  mergeProps
)(CalendarBoard);
