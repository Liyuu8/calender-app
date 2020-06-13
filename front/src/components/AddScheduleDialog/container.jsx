import { connect } from 'react-redux';

// presentation
import AddScheduleDialog from './presentation';

// services
import { isCloseDialog } from '../../services/schedule';

// actions
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
  addScheduleStartEdit,
} from '../../redux/addSchedule/actions';

// effects
import { asyncSchedulesAddItem } from '../../redux/schedules/effects';

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  },
  saveSchedule: (schedule) => {
    dispatch(asyncSchedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  },
  setIsEditStart: () => {
    dispatch(addScheduleStartEdit());
  },
});

const mergeProps = (stateProps, dispatchProps) => {
  const {
    schedule: { form: schedule },
  } = stateProps;
  const { saveSchedule, closeDialog } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      saveSchedule(schedule);
    },
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialog();
      }
    },
  };

  // stateProps
  //   schedule:
  //     form: {title: "test", description: "", date: c, location: ""}
  //     isDialogOpen: true
  //     isStartEdit: true
  // dispatchProps
  //   closeDialog: () => {…}
  //   saveSchedule: schedule => {…}
  //   setIsEditStart: () => {…}
  //   setSchedule: value => {…}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
