import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const OnboardingStyles = StyleSheet.create({
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
