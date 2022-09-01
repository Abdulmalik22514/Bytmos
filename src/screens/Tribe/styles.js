import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

export const TribeStyles = StyleSheet.create({
  separator: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: COLORS.separator,
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
});
