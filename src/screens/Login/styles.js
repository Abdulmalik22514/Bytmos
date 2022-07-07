import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const LoginStyles = StyleSheet.create({
  container: {
    padding: SIZES.font6,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  startButton: {
    width: '100%',
    marginTop: SIZES.font1 * 6.5,
  },
  successfulText: {
    ...FONTS.h8,
    color: COLORS.black,
    marginVertical: SIZES.font1,
  },
  verifyView: {
    alignItems: 'center',
    padding: SIZES.font1,
  },
  verifyImage: {
    width: SIZES.font1 * 4,
    height: SIZES.font1 * 4,
  },
  otpInputView: {
    width: '100%',
    height: SIZES.font1 * 2,
    alignSelf: 'center',
  },
  forgotText: {
    ...FONTS.h5,
    fontSize: 22,
    marginBottom: SIZES.font5,
  },
  underlineStyleBase: {
    width: SIZES.font1 * 1.8,
    height: SIZES.font1 * 1.7,
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: COLORS.white,
    ...FONTS.body2,
    color: COLORS.black,
  },
  imageHeader: {
    width: SIZES.font1 * 2,
    height: SIZES.font1 * 2,
    marginBottom: SIZES.font1 * 1.7,
  },
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    marginTop: SIZES.font1,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: SIZES.font1,
  },
  resendOtpView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.font1,
  },
  noOtpReceive: {
    ...FONTS.body3,
  },
  resendText: {
    ...FONTS.h10,
    color: COLORS.blue,
  },
  contentContainer: {
    flex: 1,
    padding: SIZES.font1,
    backgroundColor: COLORS.background,
  },
  bottomSheet: {
    backgroundColor: COLORS.background,
  },
});
