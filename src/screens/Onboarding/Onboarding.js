import React from 'react';
import {Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS} from '../../constants/theme';
import {GetStartedArrow} from '../../assets/svgs/svg';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';
import {OnboardingStyles as styles} from './styles';

const slides = [1, 2, 3];

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
    return <View>{getActiveSlide(item)}</View>;
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
