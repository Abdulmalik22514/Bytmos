import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PlusIcon} from '../assets/svgs/svg';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';
import {useNavigation} from '@react-navigation/native';
import {NEWPOST_SCREEN} from '../constants/screens';

export const SWIPER_IMAGES = [
  icons.SoniaFashion,
  icons.SoniaFashion,
  icons.SoniaFashion,
  icons.SoniaFashion,
];

export const SwiperContent = ({item}) => {
  const {navigate} = useNavigation();
  return (
    <View>
      <ImageBackground source={item} style={styles.uploads} resizeMode="cover">
        <Pressable
          style={styles.plusContainer}
          onPress={() => navigate(NEWPOST_SCREEN)}>
          <PlusIcon />
        </Pressable>
      </ImageBackground>
      <View style={{padding: SIZES.font10 - 5}}>
        <Text style={FONTS.body4}>
          Sonia Fashion Styles just launched a new fleet of wedding gowns with
          great styles and ....
          <Text style={{color: COLORS.input}}> See more</Text>
        </Text>
        <Text style={[FONTS.body4, {color: COLORS.input}]}>August 30</Text>
      </View>
    </View>
  );
};

export default SwiperContent;

const styles = StyleSheet.create({
  uploads: {
    width: '100%',
    height: SIZES.font1 * 11,
  },
  plusContainer: {
    width: SIZES.font1 * 1.5,
    height: SIZES.font1 * 1.5,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: (SIZES.font1 * 1.5) / 2,
    marginTop: SIZES.font1 * 9,
    marginRight: SIZES.font8,
  },
});
