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
      style={{alignItems: 'center', marginRight: SIZES.font5}}>
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
    width: SIZES.font1 * 2.8,
    height: SIZES.font1 * 2.4,
    marginBottom: SIZES.font10 - 4,
  },
  activeText: {
    fontWeight: '700',
    color: COLORS.blue,
  },
  activeImgBorder: {
    borderColor: COLORS.blue,
    borderWidth: 4,
    borderRadius: 18,
    width: SIZES.font1 * 2.8,
    height: SIZES.font1 * 2.4,
  },
});
