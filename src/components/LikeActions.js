import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import icons from '../constants/icons';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { CopyIcon, DeleteIcon, Eye_Off } from '../assets/svgs/svg';

export const ACTIONS = [
  { icon: icons.ChatImage, label: 'Chat' },
  { icon: icons.HeartImage, label: 'Heart' },
  { icon: icons.SendImage, label: 'Send' },
];

export const COMMENTS_ACTIONS = [
  { icon: icons.HeartImage, label: 'Heart' },
  { icon: icons.SendImage, label: 'Send' },
];

export const LikeActions = ({ item, onPressItem, like }) => {
  return (
    <Pressable onPress={onPressItem}>
      <Image
        source={item}
        style={[styles.image, { tintColor: like ? COLORS.red : COLORS.input }]}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export const TRIBE_BOTTOMSHEET_ACTIONS = [
  {
    icon: <CopyIcon />,
    title: 'Copy Link',
  },
  {
    icon: <Eye_Off />,
    title: 'Hide Post',
  },
  {
    icon: <DeleteIcon />,
    title: 'Delete Post',
  },
];

export const TribeBottomSheet = ({ icon, title }) => {
  return (
    <Pressable style={styles.contentContainer}>
      {icon}
      <Text style={styles.sheetTitle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: SIZES.font1 - 6,
    height: SIZES.font1 - 6,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.font9,
  },
  sheetTitle: {
    ...FONTS.body3,
    marginLeft: SIZES.font4,
  },
});
