import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors, FontFamily, FontSize} from '../../../utils';

const Input = ({label, value, onChangeText, secureTextEntry}) => {
  const [border, setBorder] = useState(Colors.gray01);
  const OnFocusForm = () => {
    setBorder(Colors.blue02);
  };
  const OnBlurForm = () => {
    setBorder(Colors.gray01);
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, {borderColor: border}]}
        placeholder={label}
        placeholderTextColor={Colors.gray03}
        onFocus={OnFocusForm}
        onBlur={OnBlurForm}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: Colors.black02,
    fontFamily: FontFamily[600],
    fontSize: FontSize.small,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.gray01,
    color: Colors.black02,
    fontFamily: FontFamily[400],
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});
