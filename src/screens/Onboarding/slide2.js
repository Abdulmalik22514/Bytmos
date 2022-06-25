import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';

const SlideItems = [
  {
    title:
      'Easily locate and sell your services from anywhere you are to clients in need of your kind of service',
  },
  {
    title: 'Build a network of customers interested in your kind of service',
  },
  {
    title: 'Earn money working at you own time and schedule',
  },
];

const Slide2 = () => {
  return (
    <View>
      <Text style={styles.header}>BytmosPartner helps you to:</Text>
      {SlideItems.map((item, index) => (
        <View style={styles.items} key={index}>
          <View style={styles.dot} />
          <Text style={styles.itemList}>{item.title}</Text>
        </View>
      ))}
      <Image
        source={icons.Onboarding2}
        style={styles.slideImage}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default Slide2;

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    marginVertical: SIZES.font10 * 1.4,
  },
  dot: {
    width: SIZES.font10 * 0.6,
    height: SIZES.font10 * 0.6,
    borderRadius: 100,
    backgroundColor: COLORS.black,
    marginTop: SIZES.font10 * 0.6,
    marginRight: SIZES.font10 * 0.6,
  },
  header: {
    ...FONTS.largeTitle,
  },
  slideImage: {
    width: '100%',
    height: SIZES.font1 * 13,
    alignSelf: 'center',
    marginTop: SIZES.font10 * 0.01,
  },
  itemList: {
    ...FONTS.body4,
  },
});
