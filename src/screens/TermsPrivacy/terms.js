import {StyleSheet, Text, View} from "react-native"
import React from "react"
import {COLORS, FONTS, SIZES} from "../../constants/theme"

const Terms = () => {
	return (
		<View style={styles.items}>
			<View style={styles.dot} />
			<Text style={styles.itemList}>Sell physical services at the location of {"\n"} clients or digital services from any location.</Text>
		</View>
	)
}

export default Terms

const styles = StyleSheet.create({
	items: {
		flexDirection: "row",
		marginVertical: SIZES.font10 * 1.4,
	},
	dot: {
		width: SIZES.font10 * 0.6,
		height: SIZES.font10 * 0.6,
		borderRadius: 100,
		backgroundColor: COLORS.black,
		marginTop: SIZES.font10 * 0.6,
		marginRight: SIZES.font10 * 0.6,
	},
	itemList: {
		...FONTS.body4,
	},
})
