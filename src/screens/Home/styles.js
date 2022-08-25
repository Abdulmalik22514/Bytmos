import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  separator: {
    width: '100%',
    borderWidth: 0.6,
    borderColor: COLORS.separator,
  },
  profilepic: {
    width: SIZES.font1 * 4.5,
    height: SIZES.font1 * 4.5,
    alignSelf: 'center',
    marginVertical: SIZES.font10,
    borderRadius: (SIZES.font1 * 4.5) / 2,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: SIZES.font1 * 1.5,
    marginBottom: SIZES.font1,
  },
  accountName: {
    ...FONTS.h6,
    alignSelf: 'center',
  },
  performanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.font1,
  },
  serviceOrders: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.font2,
    height: SIZES.font2,
    borderRadius: SIZES.font2 / 2,
    backgroundColor: COLORS.blue,
    marginLeft: -10,
  },
  serviceAmount: {
    ...FONTS.h10,
    color: COLORS.white,
  },
});
