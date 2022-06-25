import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import icons from '../../constants/icons';
import {FONTS, SIZES} from '../../constants/theme';

const Slide3 = () => {
  return (
    <View>
      <Text style={styles.header}>
        Sell physical services at the location of {'\n'}clients or digital
        services from any location
      </Text>
      <Image
        source={icons.Onboarding3}
        style={styles.slideImage}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default Slide3;

const styles = StyleSheet.create({
  slideImage: {
    width: '100%',
    height: SIZES.font1 * 14,
    alignSelf: 'center',
    marginTop: SIZES.font1 * 5,
  },
  header: {
    ...FONTS.h9,
  },
});
