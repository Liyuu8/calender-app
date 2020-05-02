import { connect } from 'react-redux';

import { increment, decrement } from '../../redux/count/actions';
import Counter from './presentation';

// store からどの state を引っ張ってくるかを定義
const mapStateProps = ({ count }) => ({ count });

// どんな dispatcher を props に渡すかを定義
const mapDispatchProps = (dispatch) => ({
  increment: (count) => {
    dispatch(increment(count));
  },
  decrement: (count) => {
    dispatch(decrement(count));
  },
});

export default connect(mapStateProps, mapDispatchProps)(Counter);
