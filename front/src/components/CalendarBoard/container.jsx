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

  // stateProps
  //   calendar:
  //     month: 6
  //     year: 2020
  //   schedules:
  //     error: null
  //     isLoading: true
  //     items: Array(4)
  //       0: {id: 1, date: c, title: "会議", description: "経営戦略会議", location: "会議室A"}
  //       1: {id: 2, date: c, title: "会議", description: "経営戦略会議", location: "会議室A"}
  //       2: {id: 3, date: c, title: "会議", description: "経営戦略会議", location: "会議室A"}
  //       3: {id: 7, date: c, title: "title6", description: "description6", location: "location6"}
  //       length: 4
  // dispatchProps
  //   fetchSchedule: month => {…}
  //   openAddScheduleDialog: d => {…}
  //   openCurrentScheduleDialog: (schedule, e) => {…}
};

export default connect(
  mapStateToProps,
  mapdispatchToProps,
  mergeProps
)(CalendarBoard);
