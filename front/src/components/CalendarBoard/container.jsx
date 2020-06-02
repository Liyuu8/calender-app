import { connect } from 'react-redux';

import { createCalendar } from '../../services/calendar';
import CalendarBoard from './presentation';
import { addScheduleOpenDialog } from '../../redux/addSchedule/actions';

const mapStateToProps = (state) => ({ calendar: state.calendar });

const mapdispatchToProps = (dispatch) => ({
  openAddScheduleDialog: () => {
    dispatch(addScheduleOpenDialog());
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
