import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const InputField = ({label, ...rest}) => {
  return (
    <View style={styles.container}>
      <Text style={FONTS.body4}>{label}</Text>
      <TextInput style={[styles.textInput]} {...rest} />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.font10,
  },
  textInput: {
    ...FONTS.body3,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input,
    padding: SIZES.font10 * 0.5,
    height: SIZES.font1 * 1.5,
  },
});
