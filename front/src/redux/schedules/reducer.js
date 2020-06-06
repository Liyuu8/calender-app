import dayjs from 'dayjs';

import { SCHEDULES_ADD_ITEM } from './actions';

const init = {
  items: [
    {
      id: 1,
      title: 'テスト',
      date: dayjs(),
      location: '会議室',
      description: '経営戦略について',
    },
    {
      id: 2,
      title: 'テスト2',
      date: dayjs(),
      location: '会議室',
      description: '経営戦略について',
    },
    {
      id: 3,
      title: 'テスト3',
      date: dayjs(),
      location: '会議室',
      description: '経営戦略について',
    },
    {
      id: 4,
      title: 'テスト4',
      date: dayjs(),
      location: '会議室',
      description: '経営戦略について',
    },
  ],
  isLoading: false,
};

const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case SCHEDULES_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { ...payload, id: state.items.length + 1 }],
      };
    default:
      return state;
  }
};

export default schedulesReducer;
