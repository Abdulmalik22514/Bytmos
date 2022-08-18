import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const TribeProfileStyles = StyleSheet.create({
  soniaIamge: {
    width: SIZES.font1 * 2.5,
    height: SIZES.font1 * 2.5,
    marginRight: SIZES.font10,
  },
  profileContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: SIZES.font10,
    marginTop: SIZES.font8,
  },
  ratingReview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.font10,
    width: SIZES.font1 * 7.8,
  },
  serviceItems: {
    width: SIZES.font1 * 5.75,
    height: SIZES.font1 + 130,
  },
  tribingMessenger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font10,
    marginTop: SIZES.font1,
  },
  dropDownBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.font1 * 1.2,
    height: SIZES.font1 * 1.2,
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: 100,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font10,
    marginBottom: SIZES.font1,
    marginTop: SIZES.font10,
  },
  dropDownView: {
    paddingVertical: SIZES.font7,
    borderTopColor: COLORS.grey,
    borderBottomColor: COLORS.grey,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingLeft: SIZES.font10,
    marginVertical: SIZES.font5,
  },
  suggestedItems: {
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    padding: SIZES.font5,
    marginRight: SIZES.font7,
    marginTop: SIZES.font10,
  },
  suggestedRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.font4,
  },

  modalView: {
    backgroundColor: 'white',
    padding: SIZES.font5,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: SIZES.font10 - 7,
  },
  modalButton: {
    width: SIZES.font1 * 5.5,
    height: SIZES.font1 * 1.5,
    marginTop: SIZES.font1,
  },
  modalMessage: {
    ...FONTS.body3,
    marginBottom: SIZES.font10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.font1,
  },
});
