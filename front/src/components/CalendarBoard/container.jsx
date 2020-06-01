import { connect } from 'react-redux';

import { createCalendar } from '../../services/calendar';
import CalendarBoard from './presentation';

const mapStateToProps = (state) => ({ calendar: state.calendar });

const margeProps = (stateProps, dispatchProps) => ({
  calendar: createCalendar(stateProps.calendar),
  month: stateProps.calendar,
});

export default connect(mapStateToProps, null, margeProps)(CalendarBoard);
