import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const NewPostStyles = StyleSheet.create({
  postItemPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.font1 * 1.2,
    paddingHorizontal: SIZES.font6,
  },
  separator: {
    width: '100%',
    borderWidth: 0.6,
    borderColor: COLORS.separator,
  },
  image: {
    width: SIZES.font1 * 2,
    height: SIZES.font1 * 2,
    marginRight: SIZES.font10,
  },
  postContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.font1,
    paddingHorizontal: SIZES.font6,
  },
  serviceDetails: {
    ...FONTS.body4,
    color: COLORS.input,
    width: '75%',
  },
  itemSeparator: {
    width: '100%',
    borderWidth: 0.6,
    borderColor: COLORS.separator,
  },
  categoriesCard: {
    marginVertical: SIZES.font1,
    paddingLeft: SIZES.font8,
  },
  categoriesContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 0.5,
    backgroundColor: COLORS.white,
  },
  serviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
