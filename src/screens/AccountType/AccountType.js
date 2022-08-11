import {ActivityIndicator, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import CustomButton from '../../components/CustomButton'
import {useNavigation} from '@react-navigation/native'
import {COLORS, FONTS, SIZES} from '../../constants/theme'
import {ACCOUNT_SCREEN} from '../../constants/screens'
import {useAuthApis} from '../../services/api/Auth/auth.index'
import {useMutation} from 'react-query'
import OverlayLoaderIndicator from '../../components/OverlayLoaderIndicator'

const AccountType = ({route}) => {
	const {navigate} = useNavigation()
	const {flowFrom} = route.params

	const {CreateAccount} = useAuthApis()

	const createAccountApi = useMutation(CreateAccount, {
		onSuccess: (res, params) => {
			if (res?.status) {
				if (params?.account_type === 0) {
					navigate(ACCOUNT_SCREEN, {accountType: 'Personal', from: flowFrom})
				}

				if (params?.account_type === 1) {
					navigate(ACCOUNT_SCREEN, {accountType: 'Business', from: flowFrom})
				}
			}
		},
	})

	const isLoading = createAccountApi.isLoading

	const handleAccountCreation = (accountType = 0) => {
		const formData = {account_type: accountType}

		createAccountApi.mutateAsync(formData)
	}

	return (
		<Container style={styles.container}>
			<View style={styles.modalContent}>
				<Text style={styles.modalText}>Select Account</Text>
				<CustomButton title="Personal Account" style={styles.modalButton} onPress={() => handleAccountCreation(0)} disabled={isLoading} />
				<Text style={{...FONTS.body4, fontSize: 22}}>OR</Text>
				<CustomButton title="Business Account" style={styles.modalButton} onPress={() => handleAccountCreation(1)} disabled={isLoading} />
			</View>
			{isLoading && <OverlayLoaderIndicator />}
		</Container>
	)
}

export default AccountType

const styles = StyleSheet.create({
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
})
