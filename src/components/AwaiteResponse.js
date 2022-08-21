import {View, Text, ActivityIndicator, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'

export default function AwaitResponse({api, onerror, autoRefresh, interval, silent = false, children}) {
	const [loading, isloading] = useState(true)
	const [error, hasError] = useState(false)

	const [render, canRender] = useState(false)
	const [canAutoreload, autoReload] = useState(autoRefresh)
	const [delay, setDelay] = useState(interval)

	const initateApi = () => {
		if (typeof api === 'function') {
			isloading(true)
			hasError(false)
			canRender(false)

			const res = api()

			if (res && typeof res.then !== 'undefined') {
				res.then(() => {
					isloading(false)
					hasError(false)
					canRender(true)
				})
			}

			if (res && typeof res.catch !== 'undefined') {
				res.catch(() => {
					hasError(true)
					isloading(false)
					canRender(false)
				})
			}
		} else {
			isloading(false)
			hasError(false)
			canRender(true)
		}
	}

	useEffect(() => {
		// the interval loader
		let refresher = 0
		initateApi()

		if (canAutoreload === true) {
			refresher = setInterval(() => {
				initateApi()
			}, delay)
		}
		return () => {
			if (refresher) {
				window.clearInterval(refresher)
			}
		}
	}, [])

	return (
		<>
			{silent ? (
				<>{children}</>
			) : (
				<>
					{render === false && error === false && loading === true && (
						<View style={styles.screenLoader}>
							<ActivityIndicator size={75} />
							<Text>Loading</Text>
						</View>
					)}
					{render === false && loading === false && error === true && onerror}
					{error === false && loading === false && render === true && children}
				</>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	screenLoader: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1030,
	},
})
