import moment from 'moment';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import 'react-native-get-random-values';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {
  AddUser,
  DataNotFound,
  Gap,
  ItemUser,
  ModalAddEditUser,
} from '../../components';
import {deleteUser, editUser, postAddUser} from '../../redux/action';
import {AllertShow, Colors, FontFamily, FontSize, useForm} from '../../utils';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {listUser} = useSelector(state => state.userReducer);
  const [visibleModal, setVisibleModal] = useState(false);
  const {form, handleChange, resetForm} = useForm({
    name: '',
    email: '',
  });
  const [idEdit, setIdEdit] = useState(null);

  const handleCloseModal = () => {
    resetForm();
    setIdEdit(null);
    setVisibleModal(!visibleModal);
  };

  const handleEdit = item => {
    setIdEdit(item.id);
    handleChange({
      name: item.name,
      email: item.email,
    });
    setVisibleModal(!visibleModal);
  };

  const handleDelete = id => {
    dispatch(deleteUser(id, listUser));
  };

  const handleSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.name.trim() === '') {
      AllertShow('Name Is Required', 'danger');
      return;
    }
    if (form.email.trim() === '') {
      AllertShow('Email Is Required', 'danger');
      return;
    }
    if (!emailPattern.test(form.email.trim())) {
      AllertShow('Invalid Email Format', 'danger');
      return;
    }
    if (idEdit) {
      dispatch(editUser(listUser, idEdit, setIdEdit, form, setVisibleModal));
      return;
    }
    const data = {
      id: uuidv4(),
      name: form.name,
      email: form.email,
      createdAt: moment(),
    };
    dispatch(postAddUser(data, setVisibleModal, resetForm));
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Daftar Pengguna</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wpItemUser}>
            {listUser.length !== 0 ? (
              listUser.map(item => {
                return (
                  <ItemUser
                    key={item.id}
                    data={item}
                    onEdit={() => handleEdit(item)}
                    onDelete={() => handleDelete(item.id)}
                  />
                );
              })
            ) : (
              <DataNotFound />
            )}
          </View>
          <Gap height={80} />
        </ScrollView>
      </View>
      <AddUser onPress={() => setVisibleModal(!visibleModal)} />
      <ModalAddEditUser
        isVisible={visibleModal}
        handleSubmit={handleSubmit}
        form={form}
        handleChange={handleChange}
        handleClose={handleCloseModal}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white01,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.black02,
    fontSize: FontSize.medium,
    fontFamily: FontFamily[700],
    marginBottom: 20,
  },
  wpItemUser: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
