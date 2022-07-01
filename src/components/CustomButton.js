import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const CustomButton = ({title, onPress, textStyle, disabled, style}) => {
  return (
    <Pressable
      disabled={disabled}
      style={({pressed}) => [
        styles.container,
        disabled && styles.disabled,
        {
          opacity: pressed ? 0.9 : 1,
        },
        style,
      ]}
      onPress={onPress}>
      <Text style={[styles.title, {...textStyle}]}>{title}</Text>
    </Pressable>
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
  },
  disabled: {
    backgroundColor: COLORS.separator,
  },
});
