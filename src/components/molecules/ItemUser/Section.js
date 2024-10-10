import {StyleSheet, Text, View} from 'react-native';
import {Colors, FontFamily, FontSize} from '../../../utils';

const Section = ({title, desc}) => {
  return (
    <View style={styles.wpBox}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>: {desc}</Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
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
    width: '70%',
  },
});
