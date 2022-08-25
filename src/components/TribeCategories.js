import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import icons from '../constants/icons';
import {COLORS, FONTS, SIZES} from '../constants/theme';

export const CATEGORIES = [
  {
    icon: icons.AllCategory,
    title: 'All',
  },
  {
    icon: icons.TechCategory,
    title: 'Tech',
  },
  {
    icon: icons.BeautyCategory,
    title: 'Beauty & F..',
  },
  {
    icon: icons.EventCategory,
    title: 'Event',
  },
];

export const TribeCategories = ({title, icon, onPress, isActive}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{alignItems: 'center', marginHorizontal: SIZES.font10 - 4}}>
      <Image
        source={icon}
        style={[styles.catImage, isActive && styles.activeImgBorder]}
        resizeMode="cover"
      />
      <Text style={[FONTS.body3, isActive && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TribeCategories;

const styles = StyleSheet.create({
  catImage: {
    width: SIZES.font1 * 2.7,
    height: SIZES.font1 * 2.2,
    marginBottom: SIZES.font10 - 4,
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: 15,
  },
  activeText: {
    fontWeight: '700',
    color: COLORS.blue,
  },
  activeImgBorder: {
    borderColor: COLORS.blue,
    borderWidth: 4,
    borderRadius: 16,
    width: SIZES.font1 * 2.7,
    height: SIZES.font1 * 2.2,
  },
});
