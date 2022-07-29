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
		alignSelf: 'center',
		marginVertical: SIZES.font10,
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

	screenLoader: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#fff',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
