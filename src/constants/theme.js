import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  // primary colors
  red: '#CA5353',
  verify: '#4E4F50',
  background: '#F3F3F3',
  white: '#FFFFFF',
  grey: '#C7C7C7',
  black: '#000000',
  yellow: '#FAB613',
  blue: '#00709E',
  separator: '#D3D3D3',
  input: '#828181',
  otp: '#A4A2A2',
};
export const SIZES = {
  // font sizes
  largeTitle: 26,
  font1: width * 0.08,
  font2: width * 0.076,
  font3: width * 0.068,
  font4: width * 0.062,
  font5: width * 0.056,
  font6: width * 0.048,
  font7: width * 0.042,
  font8: width * 0.038,
  font9: width * 0.035,
  font10: width * 0.03,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.largeTitle,
    lineHeight: 30.47,
  },
  h1: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.font1,
    lineHeight: 29.3,
  },
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.font2, lineHeight: 28.13},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.font3, lineHeight: 25.78},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.font5, lineHeight: 23},
  h5: {fontFamily: 'Roboto-Medium', fontSize: SIZES.font3, lineHeight: 25.78},
  h6: {fontFamily: 'Roboto-Medium', fontSize: SIZES.font7, lineHeight: 21.09},
  h7: {fontFamily: 'Roboto-Medium', fontSize: SIZES.font4},
  h8: {fontFamily: 'Roboto-Medium', fontSize: SIZES.font6, lineHeight: 22.27},
  h9: {fontFamily: 'Roboto-Medium', fontSize: SIZES.font7, lineHeight: 22.27},
  h10: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.font6,
  },

  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.font3,
    lineHeight: 25.78,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.font5,
    lineHeight: 23,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.font6,
    lineHeight: 22.27,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.font7,
    lineHeight: 22,
  },
};

const appTheme = {
  COLORS,
  SIZES,
};

export default appTheme;
