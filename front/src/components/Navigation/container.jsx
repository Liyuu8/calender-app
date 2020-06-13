import { connect } from 'react-redux';

// presentation
import Navigation from './presentation';

// services
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from '../../services/calendar';

// actions
import { calendarSetMonth } from '../../redux/calendar/actions';

// effects
import { asyncSchedulesFetchItem } from '../../redux/schedules/effects';

const mapStateToProps = (state) => ({ calendar: state.calendar });

const mapDispatchToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calendarSetMonth(month));
  },
  fetchItem: (month) => {
    dispatch(asyncSchedulesFetchItem(month));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  month: getMonth(stateProps.calendar), // redux の state → dayjs
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
    dispatchProps.fetchItem(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
    dispatchProps.fetchItem(previousMonth);
  },
  setMonth: (dayobj) => {
    // dayjs → redux の state
    const month = formatMonth(dayobj);
    dispatchProps.setMonth(month);
    dispatchProps.fetchItem(month);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
