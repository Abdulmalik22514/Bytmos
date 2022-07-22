import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {PencilIcon} from '../assets/svgs/svg';

const InputField = ({label, compulsory}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <PencilIcon color={COLORS.blue} />
      </View>
      <TextInput style={[styles.textInput]} />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.font10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    ...FONTS.body3,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input,
    padding: SIZES.font10 * 0.5,
    height: SIZES.font1 * 1.5,
  },
  label: {
    ...FONTS.body4,
  },
});
