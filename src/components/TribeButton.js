import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {LockIcon} from '../assets/svgs/svg';

const TribeButton = ({title, isMessage, style, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isMessage && styles.isMessage, style]}>
      <Text
        style={[
          FONTS.h10,
          {color: COLORS.blue},
          isMessage && styles.textMessage,
        ]}>
        {title}
      </Text>
      {isMessage && <LockIcon />}
    </Pressable>
  );
};

export default TribeButton;

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.blue,
    width: SIZES.font1 * 5,
    height: SIZES.font1 * 1.3,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  isMessage: {
    flexDirection: 'row',
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font5,
  },
  textMessage: {
    color: COLORS.white,
  },
});
