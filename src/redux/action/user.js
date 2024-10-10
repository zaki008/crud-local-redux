import moment from 'moment';
import {storeData} from '../../utils';
import {GET_LIST_USER} from '../types';

export const getDataUser = data => dispatch => {
  try {
    dispatch({type: GET_LIST_USER, value: data});
  } catch (err) {
    console.log('err get', err);
  }
};

export const postAddUser = (data, setIsVisible, resetForm) => dispatch => {
  try {
    dispatch(getDataUser(data));
    storeData('listUser', data);
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
      dispatch(getDataUser(newData));
      storeData('listUser', newData);
    }
  } catch (err) {
    console.log('err delete', err);
  }
};

export const editUser =
  (listUser, idEdit, setIdEdit, form, setVisibleModal, resetForm) =>
  dispatch => {
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
      dispatch(getDataUser(updatedData));
      storeData('listUser', updatedData);
      resetForm();
      setIdEdit(null);
      setVisibleModal(false);
    } catch (err) {
      console.log('err edit', err);
    }
  };
