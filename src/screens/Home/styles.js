import {StyleSheet} from 'react-native'
import {COLORS, FONTS, SIZES} from '../../constants/theme'

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
		borderRadius: 100,
		alignSelf: 'center',
		marginVertical: SIZES.font10,
		borderRadius: 100,
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
})
