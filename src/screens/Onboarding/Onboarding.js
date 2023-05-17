import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS} from '../../constants/theme';
import {GetStartedArrow} from '../../assets/svgs/svg';
import {OnboardingStyles as styles} from './styles';
import {onboardUser} from '../../services/authServices';
import Slide1 from './Slides/slide1';
import Slide2 from './Slides/slide2';
import Slide3 from './Slides/slide3';
import Container from '../../components/Container';
import {TERMS_AND_POLICY_SCREEN} from '../../constants/screens';

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
  const handleGetstarted = () => {
    onboardUser();

    /* after onboarding goto terms */
    navigation.navigate(TERMS_AND_POLICY_SCREEN);
  };

  const _renderItem = ({item}) => {
    return <View>{getActiveSlide(item)}</View>;
  };

  const _renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={handleGetstarted}>
        <View style={styles.doneButtonStyle}>
          <Text style={styles.getStartedText}>Get Started</Text>
          <GetStartedArrow />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container style={styles.container}>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        dotStyle={styles.dotStyle}
        activeDotStyle={[styles.dotStyle, {backgroundColor: COLORS.blue}]}
        onDone={() => navigation.navigate(TERMS_AND_POLICY_SCREEN)}
        renderDoneButton={_renderDoneButton}
        showNextButton={false}
      />
    </Container>
  );
}
