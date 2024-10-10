import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../../utils';

const AddUser = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AntDesign name="adduser" color={Colors.white01} size={30} />
    </TouchableOpacity>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: Colors.blue01,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
