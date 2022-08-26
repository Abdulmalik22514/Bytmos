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
    justifyContent: 'space-between',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '22%',
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
    marginBottom: SIZES.font5,
  },
  dotStyle: {
    width: SIZES.font10 - 2,
    height: SIZES.font10 - 2,
    borderRadius: (SIZES.font10 - 2) / 2,
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: SIZES.font10,
  },
  sheetHandleStyle: {
    backgroundColor: COLORS.input,
    width: SIZES.font1 * 2,
    height: SIZES.font10 - 8,
    marginTop: SIZES.font10 - 5,
    borderRadius: 2,
  },
  itemSeparator: {
    width: '100%',
    borderWidth: 2,
    borderColor: COLORS.separator,
  },
  postComment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.font1,
    marginBottom: SIZES.font10,
    paddingHorizontal: SIZES.font10,
  },
  commentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.grey,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: SIZES.font10 - 5,
    paddingVertical: SIZES.font10 - 7,
    width: '85%',
  },
  commenterPix: {
    width: SIZES.font1 * 1.5,
    height: SIZES.font1 * 1.5,
    marginRight: SIZES.font10,
  },
  postText: {
    ...FONTS.h10,
    color: COLORS.blue,
  },
  commentInput: {
    ...FONTS.body4,
    width: '65%',
    paddingHorizontal: SIZES.font10 - 5,
  },
  commentsHeading: {
    ...FONTS.body4,
    color: COLORS.input,
    paddingHorizontal: SIZES.font10,
  },
});
