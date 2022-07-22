import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const TermsPrivacyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  acceptanceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: SIZES.font6,
    paddingHorizontal: SIZES.font10,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 15,
    paddingVertical: SIZES.font10,
  },
  acceptedView: {
    width: SIZES.font4,
    height: SIZES.font4,
    borderRadius: 100,
    borderColor: COLORS.blue,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.font6,
  },
  title: {
    ...FONTS.body3,
  },
  accepted: {
    backgroundColor: COLORS.blue,
    width: SIZES.font10,
    height: SIZES.font10,
    borderRadius: 100,
  },
  termsCondition: {
    ...FONTS.h8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font6,
    marginVertical: SIZES.font10,
  },

  headerTitle: {
    ...FONTS.h6,
  },
  separator: {
    width: '100%',
    borderWidth: 0.8,
    borderColor: COLORS.separator,
  },
  termsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.font5,
    width: '100%',
    height: SIZES.font1 * 2.1,
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius: 100,
    padding: SIZES.font10,
  },
  scrollView: {
    paddingHorizontal: SIZES.font10,
    flex: 2,
  },
  bottomBox: {
    flex: 0.7,
    paddingHorizontal: SIZES.font10,
    paddingVertical: SIZES.font5,
  },
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
  itemList: {
    ...FONTS.body4,
  },
});
