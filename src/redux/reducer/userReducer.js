import {ADD_USER, GET_LIST_USER} from '../types';

const initStateUser = {
  listUser: [],
};

export const userReducer = (state = initStateUser, action) => {
  if (action.type === GET_LIST_USER) {
    return {
      ...state,
      listUser: action.value,
    };
  }
  if (action.type === ADD_USER) {
    return {
      ...state,
      listUser: [action.value, ...state.listUser],
    };
  }
  return state;
};
