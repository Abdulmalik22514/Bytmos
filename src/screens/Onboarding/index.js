import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {GetStartedArrow} from '../../assets/svgs/svg';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';

const slides = [
  {
    key: 1,
  },
  {
    key: 2,
  },
  {
    key: 3,
  },
];

const getActiveSlide = key => {
  switch (key) {
    case 1:
      return <Slide1 />;
    case 2:
      return <Slide2 />;
    case 3:
      return <Slide3 />;
    default:
      return null;
  }
};

export default function Onboarding({navigation}) {
  const _renderItem = ({item}) => {
    return <View>{getActiveSlide(item.key)}</View>;
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.doneButtonStyle}>
        <Text style={styles.getStartedText}>Get Started</Text>
        <GetStartedArrow />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        dotStyle={styles.dotStyle}
        activeDotStyle={[styles.dotStyle, {backgroundColor: COLORS.blue}]}
        onDone={() => navigation.navigate('TermsPrivacy')}
        renderDoneButton={_renderDoneButton}
        showNextButton={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.font9 * 3,
    paddingHorizontal: SIZES.font7,
    paddingBottom: SIZES.font10 * 4,
  },
  dotStyle: {
    borderColor: COLORS.blue,
    width: SIZES.font10,
    height: SIZES.font10,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: SIZES.font5,
    marginBottom: SIZES.font1,
  },
  doneButtonStyle: {
    width: SIZES.font1 * 5.2,
    height: SIZES.font1 * 1.5,
    flexDirection: 'row',
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    marginTop: SIZES.font2,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    marginRight: SIZES.font10 * 0.01,
  },
  getStartedText: {
    ...FONTS.h10,
    color: COLORS.white,
  },
});
