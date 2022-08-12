import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const TribeStyles = StyleSheet.create({
  separator: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: COLORS.separator,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.font10,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: SIZES.font1 * 2.5,
    height: SIZES.font1 * 2.5,
    marginRight: SIZES.font10,
  },
  tribals: {
    ...FONTS.body4,
    color: COLORS.input,
  },
  tribeButton: {
    ...FONTS.h10,
    color: COLORS.blue,
    marginRight: SIZES.font10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SIZES.font1 * 3.3,
  },
  actionsAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SIZES.font1 * 9,
    marginTop: SIZES.font10,
    marginBottom: SIZES.font10,
  },
  dotStyle: {
    width: SIZES.font10 - 2,
    height: SIZES.font10 - 2,
    borderRadius: (SIZES.font10 - 2) / 2,
  },
});
