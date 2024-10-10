import {combineReducers} from 'redux';
import {userReducer} from './userReducer';

const reducer = combineReducers({
  userReducer,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === 'DESTROY_SESSION') state = undefined;

  return reducer(state, action);
};

export default rootReducer;
