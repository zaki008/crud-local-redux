import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import 'react-native-get-random-values';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors, FontFamily, FontSize} from '../../../../utils';
import {Button, Gap, Input} from '../../../atom';

const ModalAddEditUser = ({
  isVisible,
  handleSubmit,
  form,
  handleChange,
  handleClose,
}) => {
  return (
    <Modal isVisible={isVisible} style={styles.modalStyle}>
      <View style={styles.wpModal}>
        <View style={styles.wpHeader}>
          <Text style={styles.title}>Add User</Text>
          <TouchableOpacity onPress={handleClose}>
            <AntDesign name="close" color={Colors.red01} size={26} />
          </TouchableOpacity>
        </View>
        <View>
          <Input
            label={'Nama'}
            value={form.name}
            onChangeText={value => handleChange({name: value})}
          />
          <Gap height={16} />
          <Input
            label={'Email'}
            value={form.email}
            onChangeText={value => handleChange({email: value})}
          />
        </View>
        <Button
          stylesButton={{marginVertical: 20}}
          title="Submit"
          onPress={handleSubmit}
        />
      </View>
    </Modal>
  );
};

export default ModalAddEditUser;

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wpModal: {
    padding: 24,
    width: '100%',
    backgroundColor: Colors.white01,
    borderRadius: 16,
  },
  wpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: FontFamily[600],
    fontSize: FontSize.medium,
    color: Colors.black02,
  },
});
