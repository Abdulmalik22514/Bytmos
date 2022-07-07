import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const TermsHeaders = ['Terms', 'Privacy'];

const ChooseTerms = ({title, isActive, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.termsText, isActive && styles.activeBox]}
      activeOpacity={0.9}
      onPress={onPress}>
      <Text style={[styles.title, isActive && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ChooseTerms;

const styles = StyleSheet.create({
  termsText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: SIZES.font1 * 1.5,
    borderRadius: 100,
  },
  title: {
    ...FONTS.h10,
  },
  activeText: {
    color: COLORS.white,
  },
  activeBox: {
    backgroundColor: COLORS.blue,
  },
});
