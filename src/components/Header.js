import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {BackIcon, BellIcon, MenuIcon, SearchIcon} from '../assets/svgs/svg'
import icons from '../constants/icons'
import {COLORS, FONTS, SIZES} from '../constants/theme'
import {useNavigation} from '@react-navigation/native'

const Header = ({onPress, isNotHome, screenName, isAccount}) => {
	const {goBack} = useNavigation()
	return (
		<View>
			<View style={[styles.container, isAccount && styles.isAccount]}>
				<View style={styles.leftView}>
					{isNotHome ? (
						<>
							<Pressable onPress={() => goBack()}>
								<BackIcon width={24} height={20} />
							</Pressable>
							<Text style={styles.screenName}>{screenName}</Text>
						</>
					) : (
						<>
							<Pressable onPress={onPress}>
								<MenuIcon width={24} height={20} />
							</Pressable>
							<Image source={icons.SplashIcon} resizeMode="contain" style={styles.image} />
						</>
					)}
				</View>
				<View style={styles.leftView}>
					<Pressable>
						<SearchIcon style={styles.searchIcon} width={20} height={25} />
					</Pressable>
					<Pressable>
						<BellIcon width={24} height={28} />
					</Pressable>
				</View>
			</View>
			{isAccount ? null : <View style={styles.separator} />}
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: SIZES.font10,
	},
	image: {
		width: SIZES.font1 * 6.5,
		height: SIZES.font1 * 1.5,
		marginLeft: SIZES.font10 - 5,
	},
	leftView: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	searchIcon: {
		marginRight: SIZES.font9,
	},
	screenName: {
		...FONTS.h10,
		marginLeft: SIZES.font9,
	},
	separator: {
		width: '100%',
		borderWidth: 0.6,
		borderColor: COLORS.separator,
	},
	isAccount: {
		paddingHorizontal: null,
	},
})
