import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import icons from '../constants/icons';
import {SIZES} from '../constants/theme';

export const ACTIONS = [icons.ChatImage, icons.HeartImage, icons.SendImage];

export const LikeActions = ({item}) => {
  return (
    <Pressable>
      <Image source={item} style={styles.image} resizeMode="contain" />
    </Pressable>
  );
};

export default LikeActions;

const styles = StyleSheet.create({
  image: {
    width: SIZES.font1 - 6,
    height: SIZES.font1 - 6,
  },
});
