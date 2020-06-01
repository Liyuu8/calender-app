import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigation from './components/Navigation/container';
import CalendarBoard from './components/CalendarBoard/container';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';

import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer);

dayjs.locale('ja');

const App = () => (
  <Provider store={store}>
    <Navigation />
    <CalendarBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
