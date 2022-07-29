import {ActivityIndicator, Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React, {useRef, useState} from 'react'
import Header from '../../components/Header'
import {COLORS, FONTS, SIZES} from '../../constants/theme'
import {CameraIcon} from '../../assets/svgs/svg'
import icons from '../../constants/icons'
import InputField from '../../components/InputField'
import Picker from '../../components/Picker'
import ImageBottomSheet from '../../components/CameraBottomSheet'
import {Formik} from 'formik'
import NotchResponsive from '../../components/NotchResponsive'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useAuthApis} from '../../services/api/Auth/auth.index'
import {useMutation} from 'react-query'
import {useFlusStores} from 'react-flus'

const PersonalAccount = ({screenName}) => {
	const [gender, setGender] = useState('')
	const [status, setStatus] = useState('')
	const [imgeUri, setImageUri] = useState('')

	const {user} = useFlusStores()?.auth

	const bottomSheetRef = useRef(null)

	// console.log({imgeUri});
	const {account} = user?.profile

	const initialValues = {
		firstName: ' ',
		lastName: '',
		email: '',
		nameOfBusiness: '',
		phoneNumber: '',
		country: '',
		city: '',
		location: '',
		phoneNumber: '',
		faceBook: '',
		instagram: '',
	}

	const handleClosePress = () => bottomSheetRef.current.close()

	// -----------------------------------------------------------------------------------------------
	const {UpdateCompanyAccount} = useAuthApis()
	const updateCompanyAccountApi = useMutation(UpdateCompanyAccount, {
		onSuccess: res => {
			// if(res?.status)
			console.log('====================================')
			console.log(res)
			console.log('====================================')
		},
	})

	return (
		<Formik initialValues={initialValues}>
			{({}) => (
				<>
					<View style={{paddingHorizontal: 10}}>
						<NotchResponsive />
						<Header screenName={screenName} isNotHome coverImage={account?.cover_photo} />
						<KeyboardAwareScrollView style={{marginVertical: SIZES.font1}} showsVerticalScrollIndicator={false}>
							<View style={styles.contentContainer}>
								<View style={styles.profilePixContainer}>
									<Pressable
										style={styles.cameraBox}
										onPress={() => {
											bottomSheetRef?.current?.snapToIndex(1)
										}}>
										<View style={{alignItems: 'flex-end'}}>
											<CameraIcon />
										</View>
									</Pressable>
								</View>
								<View>
									<Image source={{uri: account?.profile_photo}} resizeMode="contain" style={styles.profilepic} />

									<Pressable
										onPress={() => {
											bottomSheetRef?.current?.snapToIndex(1)
										}}>
										<CameraIcon
											style={{
												left: 200,
												marginTop: 45,
												zIndex: 100,
											}}
										/>
									</Pressable>
								</View>

								<InputField label="Registrar First Name*" defaultValues={account?.registrar_first_name} />
								<InputField label="Registrar Last Name*" defaultValues={account?.registrar_last_name} />
								<InputField label="Name of Company*" defaultValues={account?.company_name} />
								<InputField label="Registrar Position*" defaultValues={account?.registrar_position} />

								<View>
									<Picker placeHolder={'Choose Gender'} value={account?.gender} data={['Male', 'Female']} onPressItem={setGender} />
								</View>

								<View>
									<Picker placeHolder={'Marital Status'} value={account?.marital_status} data={['Single', 'Married', 'Divorced']} onPressItem={setStatus} />
								</View>
								<InputField label="Email of Company*" defaultValues={account?.company_email} onBlur={e => {}} />
								<InputField label="Phone Number" defaultValues={account?.company_phone_number} />
								<InputField label="Country/Region*" defaultValues={account?.country} />
								<InputField label="City/State*" defaultValues={account?.state} />
								<InputField label="Company Location in this City/State*" defaultValues={account?.location} />
								<Text style={styles.socialMediaText}>Add links to social media pages</Text>
								<InputField label="Facebook" defaultValues={account?.facebook_link} />
								<InputField label="Instagram" defaultValues={account?.instagram_link} />
							</View>
						</KeyboardAwareScrollView>
					</View>
					<ImageBottomSheet ref={bottomSheetRef} handleClosePress={handleClosePress} onSelectImage={setImageUri} />
				</>
			)}
		</Formik>
	)
}

export default PersonalAccount

const styles = StyleSheet.create({
	profilePixContainer: {
		backgroundColor: COLORS.pictureBackground,
		width: '100%',
		height: SIZES.font1 * 3.5,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	cameraBox: {
		padding: SIZES.font10 - 2,
	},
	profilepic: {
		width: SIZES.font1 * 4.5,
		height: SIZES.font1 * 4.5,
		alignSelf: 'center',
		marginTop: -60,
		position: 'absolute',
		borderRadius: 100,
	},
	socialMediaText: {
		...FONTS.body3,
		marginBottom: SIZES.font10,
		marginTop: SIZES.font1,
		fontWeight: '600',
	},

	contentContainer: {
		paddingBottom: 72,
	},
})
