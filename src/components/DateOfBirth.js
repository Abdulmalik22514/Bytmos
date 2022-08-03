import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {DateDropdown} from '../assets/svgs/svg';
import {COLORS, FONTS, SIZES} from '../constants/theme';

export const DatePicker = ({label, style, onPress, isMonth}) => {
  return (
    <View style={[styles.container, isMonth && styles.isMonth, style]}>
      <TextInput
        style={styles.label}
        placeholder={label}
        placeholderTextColor={COLORS.date}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <DateDropdown />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 15,
    marginTop: SIZES.font10,
    justifyContent: 'space-between',
    padding: SIZES.font8,
    width: SIZES.font1 * 3.2,
  },
  isMonth: {
    width: SIZES.font1 * 4.7,
  },
  label: {
    ...FONTS.body2,
  },
});
