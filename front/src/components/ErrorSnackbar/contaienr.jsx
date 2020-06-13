import { connect } from 'react-redux';

// presentation
import ErrorSnackbar from './presentation';

// actions
import { schedulesResetError } from '../../redux/schedules/actions';

const mapStateToProps = (state) => ({
  error: state.schedules.error,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(schedulesResetError());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);
