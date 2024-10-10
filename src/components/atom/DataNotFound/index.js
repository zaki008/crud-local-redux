import {StyleSheet, Text, View} from 'react-native';
import {Colors, FontFamily, FontSize} from '../../../utils';

const DataNotFound = () => {
  return (
    <View style={styles.boxNotAvailable}>
      <Text style={styles.txtNotAvailable}>Data Pengguna Tidak Tersedia</Text>
    </View>
  );
};

export default DataNotFound;

const styles = StyleSheet.create({
  boxNotAvailable: {
    backgroundColor: Colors.blue02,
    width: '100%',
    padding: 16,
    elevation: 5,
    borderColor: Colors.gray01,
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNotAvailable: {
    color: Colors.white01,
    fontSize: FontSize.small,
    fontFamily: FontFamily[600],
  },
});
