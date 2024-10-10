import moment from 'moment';
import {ADD_USER, GET_LIST_USER} from '../types';

export const postAddUser = (form, setIsVisible, resetForm) => dispatch => {
  try {
    dispatch({type: ADD_USER, value: form});
    resetForm();
    setIsVisible(false);
  } catch (err) {
    console.log('err', err);
  }
};

export const deleteUser = (id, listUser) => dispatch => {
  try {
    if (listUser?.length !== '0') {
      const newData = listUser?.filter(item => item.id !== id);
      dispatch({type: GET_LIST_USER, value: newData});
    }
  } catch (err) {
    console.log('err delete', err);
  }
};

export const editUser =
  (listUser, idEdit, setIdEdit, form, setVisibleModal) => dispatch => {
    try {
      const updatedData = listUser.map(item => {
        if (item.id === idEdit) {
          return {
            ...item,
            name: form.name,
            email: form.email,
            updatedAt: moment(),
          };
        }
        return item;
      });
      dispatch({type: GET_LIST_USER, value: updatedData});
      setIdEdit(null);
      setVisibleModal(false);
    } catch (err) {
      console.log('err edit', err);
    }
  };
