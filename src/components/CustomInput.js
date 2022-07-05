import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const CustomInput = ({value, onChangeText, error, ...rest}) => {
  return (
    <>
      <View style={styles.authForm}>
        <TextInput
          placeholderTextColor={COLORS.grey}
          style={[styles.textInput]}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput: {
    ...FONTS.body3,
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: COLORS.input,
    padding: SIZES.font10 * 0.5,
  },
  authForm: {
    width: '95%',
    marginBottom: SIZES.font9,
  },
  errorText: {
    fontSize: 10,
    color: COLORS.red,
  },
});
