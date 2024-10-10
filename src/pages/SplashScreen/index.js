import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {Gap} from '../../components';
import {Colors, FontFamily, FontSize} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <Feather name="users" color={Colors.white01} size={RFValue(42)} />
        <Gap height={10} />
        <Text style={styles.title}>Manage User</Text>
        <Text style={styles.desc}></Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.blue01,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FontFamily[700],
    color: Colors.white02,
    fontSize: FontSize.large,
  },
});
