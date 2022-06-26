import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const TermsPrivacyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
    flex: 1,
    paddingHorizontal: SIZES.font10,
    paddingVertical: SIZES.font5,
  },
});
