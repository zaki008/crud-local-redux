import moment from 'moment';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, FontFamily, FontSize} from '../../../utils';
import {Gap, IconClick} from '../../atom';
import Section from './Section';

const ItemUser = ({data, onEdit, onDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View />
        <View style={styles.wpIcon}>
          <IconClick
            icon={<AntDesign name="edit" color={Colors.green01} size={24} />}
            onPress={onEdit}
          />
          <Gap width={8} />
          <IconClick
            icon={
              <MaterialCommunityIcons
                name="delete"
                color={Colors.red01}
                size={24}
              />
            }
            onPress={onDelete}
          />
        </View>
      </View>
      <Section title={'Nama'} desc={data.name} />
      <Section title={'Email'} desc={data.email} />
      <Section
        title={'Created At'}
        desc={moment(data.createdAt).format('DD MMMM YYYY HH:mm:ss')}
      />
      {data.updatedAt && (
        <Section
          title={'Updated At'}
          desc={moment(data.updatedAt).format('DD MMMM YYYY HH:mm:ss')}
        />
      )}
    </View>
  );
};

export default ItemUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue02,
    width: '100%',
    padding: 16,
    elevation: 5,
    borderColor: Colors.gray01,
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  wpIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wpBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    color: Colors.black01,
    fontFamily: FontFamily[600],
    fontSize: FontSize.small,
    width: '30%',
  },
  desc: {
    color: Colors.white01,
    fontFamily: FontFamily[500],
    fontSize: FontSize.small,
  },
});
