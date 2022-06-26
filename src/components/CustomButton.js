import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const CustomButton = ({title}) => {
  return (
    <TouchableOpacity style={[styles.container]} activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  title: {
    ...FONTS.h10,
    color: COLORS.white,
  },
  container: {
    backgroundColor: '#00709e',
    height: SIZES.font1 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: SIZES.font10,
  },
});
