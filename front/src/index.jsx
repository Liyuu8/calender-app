import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// components
import Navigation from './components/Navigation/container';
import CalendarBoard from './components/CalendarBoard/container';
import AddScheduleDialog from './components/AddScheduleDialog/container';
import CurrentScheduleDialog from './components/CurrentScheduleDialog/container';
import ErrorSnackbar from './components/ErrorSnackbar/contaienr';

// redux
import createRootStore from './redux/createRootStore';

dayjs.locale('ja');

const App = () => (
  <Provider store={createRootStore()}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
      <ErrorSnackbar />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
