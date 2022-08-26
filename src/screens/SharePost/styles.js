import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const SharePostStyles = StyleSheet.create({
  selectedImage: {
    width: '100%',
    height: SIZES.font1 * 10,
    resizeMode: 'cover',
    marginVertical: SIZES.font10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font10,
    marginBottom: SIZES.font10,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemSeparator: {
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
  screenName: {
    ...FONTS.h10,
    marginLeft: SIZES.font9,
  },
  postText: {
    ...FONTS.h8,
    color: COLORS.blue,
    marginRight: SIZES.font10,
  },
  postContainer: {
    marginHorizontal: SIZES.font10,
    paddingVertical: SIZES.font10,
    borderColor: COLORS.separator,
    borderWidth: 1,
    borderRadius: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font10,
  },
  rightSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSide: {
    width: '22%',
  },
  profilePic: {
    width: SIZES.font1 * 2,
    height: SIZES.font1 * 2,
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
});
