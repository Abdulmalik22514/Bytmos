import {View, Text, ActivityIndicator, StyleSheet} from 'react-native'
import React from 'react'

export default function OverlayLoaderIndicator({loaderText = null}) {
	return (
		<View style={styles.loaderIndicator}>
			<ActivityIndicator size={75} />
			<Text style={styles.loaderText}>{loaderText !== '' && loaderText !== null ? loaderText : 'Please wait. Loading...'}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	loaderIndicator: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#040404cc',
		zIndex: 1030,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loaderText: {
		color: '#fff',
	},
})
