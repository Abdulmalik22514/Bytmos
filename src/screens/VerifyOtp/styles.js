import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const VerifyOtpStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: SIZES.font1 * 2,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  successfulText: {
    ...FONTS.h8,
    color: COLORS.black,
    marginVertical: SIZES.font1,
  },
  lottieView: {
    width: SIZES.font1 * 4.2,
    height: SIZES.font1 * 4.2,
    marginTop: SIZES.font1 * 4,
  },
  lottieBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  startButton: {
    width: '80%',
    marginTop: SIZES.font1 * 9,
  },
  image: {
    width: SIZES.font1 * 8,
    height: SIZES.font1 * 8,
    marginLeft: SIZES.font1,
  },
  resendingText: {
    ...FONTS.body4,
  },
  otpVerify: {
    ...FONTS.h5,
    marginVertical: SIZES.font5,
  },
  verifyText: {
    ...FONTS.body4,
  },
  otpInputView: {
    width: '87%',
    height: SIZES.font1 * 5,
  },
  inputErroe: {
    borderColor: COLORS.red,
  },
  underlineStyleBase: {
    width: SIZES.font1 * 1.8,
    height: SIZES.font1 * 1.9,
    borderRadius: 8,
    borderColor: COLORS.otp,
    color: 'black',
    ...FONTS.h7,
  },
  underlineStyleHighLighted: {
    borderColor: COLORS.blue,
  },
  resendOtpView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    ...FONTS.h10,
    color: COLORS.blue,
  },
  noOtpReceive: {
    ...FONTS.body3,
  },
  invalidCode: {
    ...FONTS.h10,
    color: COLORS.red,
    marginBottom: SIZES.font10,
  },
  proceedButton: {
    width: '80%',
    marginVertical: SIZES.font1,
  },
  checkMarkView: {
    width: SIZES.font1 * 4,
    height: SIZES.font1 * 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
  },
  modalContent: {
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.font1 * 4,
    paddingHorizontal: SIZES.font1,
    borderRadius: 20,
    alignItems: 'center',
  },
  modalButton: {
    marginVertical: SIZES.font1,
    width: '80%',
    borderRadius: 22,
  },
  modalText: {
    ...FONTS.body4,
    fontSize: 25,
    marginVertical: SIZES.font5,
  },
});
