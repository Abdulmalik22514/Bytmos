import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';

const Slide1 = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Welcome to BytmosPartner</Text>
      <Text style={styles.body}>Find people interested in what you do</Text>
      <Image
        source={icons.Onboarding1}
        style={styles.slideImage}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default Slide1;

const styles = StyleSheet.create({
  header: {
    ...FONTS.largeTitle,
  },
  body: {
    ...FONTS.body3,
    marginTop: SIZES.font10,
  },
  wrapper: {
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: SIZES.font1 * 14,
    alignSelf: 'center',
    marginTop: SIZES.font10 * 13,
  },
});
