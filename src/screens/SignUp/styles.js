import {StyleSheet} from 'react-native'
import {COLORS, SIZES} from '../../constants/theme'

export const SignupStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		alignItems: 'center',
		padding: SIZES.font6,
	},
	imageHeader: {
		width: SIZES.font1 * 2,
		height: SIZES.font1 * 2,
		marginBottom: SIZES.font1 * 1.7,
	},
	separator: {
		width: '60%',
		borderWidth: 0.8,
		borderColor: COLORS.input,
		alignSelf: 'center',
	},
	button: {
		marginVertical: SIZES.font6,
	},
	bottomBox: {
		width: '100%',
		marginTop: SIZES.font5,
	},
})
