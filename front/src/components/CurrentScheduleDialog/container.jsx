import { connect } from 'react-redux';

import CurrentScheduleDialog from './presentation';

import { currentScheduleCloseDialog } from '../../redux/currentSchedule/actions';

import { asyncSchedulesDeleteItem } from '../../redux/schedules/effects';

const mapStateToProps = (state) => ({
  schedule: state.currentSchedule,
});

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(currentScheduleCloseDialog());
  },
  deleteItem: (id) => {
    dispatch(asyncSchedulesDeleteItem(id));
    dispatch(currentScheduleCloseDialog());
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  deleteItem: () => {
    const { id } = stateProps.schedule.item;

    console.log('dispatchProps', dispatchProps);
    console.log('====================================');
    dispatchProps.deleteItem(id);
  },

  // stateProps:
  //   schedule:
  //     isDialogOpen: true
  //     item:
  //       date: c {$L: "ja", $u: undefined, $d: Thu Jun 18 2020 00:00:00 GMT+0900 (日本標準時), $y: 2020, $M: 5, …}
  //       description: "description1"
  //       id: 6
  //       location: "location1"
  //       title: "title1"

  // dispatchProps:
  //   closeDialog: () => {…}
  //   deleteItem: id => {…}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CurrentScheduleDialog);
