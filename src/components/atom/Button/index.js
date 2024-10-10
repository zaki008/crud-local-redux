import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../utils';
const Button = ({
  type,
  title,
  onPress,
  icon,
  stylesButton,
  stylesText,
  loading,
  disabled,
  colorLoading,
}) => {
  const Icons = () => {
    return (
      <>
        {loading ? (
          <ActivityIndicator size={'small'} color={colorLoading || '#fff'} />
        ) : (
          <Text style={[styles.lable(type), stylesText]}>{title}</Text>
        )}
        {icon && <View>{icon}</View>}
      </>
    );
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} disabled={disabled}>
      <View style={[styles.container(type), stylesButton]}>{Icons()}</View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? '#fff' : Colors.blue01,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: type === 'secondary' ? Colors.blue01 : '#fff',
  }),
  lable: type => ({
    fontSize: RFValue(14),
    textAlign: 'center',
    color: type === 'secondary' ? '#CE2562' : '#fff',
    fontFamily: 'Poppins-SemiBold',
  }),

  text: {
    marginTop: RFValue(3),
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(18),
    marginLeft: RFValue(8),
  },
});
