import {StyleSheet, Text, View} from 'react-native'
import React, {useRef, useState} from 'react'
import Header from '../../components/Header'
import {COLORS, FONTS, SIZES} from '../../constants/theme'
import InputField from '../../components/InputField'
import Picker from '../../components/Picker'
import ImageBottomSheet from '../../components/CameraBottomSheet'
import {Formik} from 'formik'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomButton from '../../components/CustomButton'
import {useFlusDispatcher, useFlusStores} from 'react-flus'
import {UPDATE_USER, USER_LOGIN} from '../../flus/constants/auth.const'
import {useMutation} from 'react-query'
import {useAuthApis} from '../../services/api/Auth/auth.index'
import {DatePicker} from '../../components/DatePicker'
import {getInputValues, UPPER_KEYS} from '../../utils/getInputValues'
import CountryPicker from 'react-native-country-picker-modal'
import CameraComponent from '../../components/CameraComponent'
import Container from '../../components/Container'
import {useStorageApi} from './../../services/api/storage/storage.index'
import {config} from '../../configs/config'

const PersonalAccount = ({screenName, from = 'inapp_process'}) => {
	const {user} = useFlusStores()?.auth
	const dispatcher = useFlusDispatcher()

	const [profileImageUri, setProfileImageUri] = useState('')
	const [coverPhotoUri, setCoverPhotoUri] = useState('')
	const [type, setType] = useState('')

	const {UpdatePersonalAccount, FetchPersonalAccount} = useAuthApis()
	const {UploadImageMedia} = useStorageApi()

	const fetchAccountApi = useMutation(FetchPersonalAccount, {
		onSuccess: res => {
			if (res?.status && res?.data) {
				dispatcher({type: UPDATE_USER, payload: {data: {...res?.data}}})
			}
		},
	})

	const onOpenModal = type => {
		setType(type)
		bottomSheetRef?.current?.snapToIndex(1)
	}

	/* update company account api */
	const updatePersonalAccountApi = useMutation(UpdatePersonalAccount, {
		onSuccess: res => {
			if (res?.status) {
				if (from === 'signup_process') {
					dispatcher({
						type: USER_LOGIN,
						payload: {
							user: null,
							access_token: null,
						},
					})
				} else {
					/* Fetch user account information after update profile to update the user 
					data object. */
					fetchAccountApi.mutateAsync()
				}
			}
		},
	})

	/* uploade the image and  */
	const uploadImageApi = useMutation(UploadImageMedia, {
		onSuccess: (res, params) => {
			if (res?.asset_id) {
				let formData = {}

				switch (params?.upload_type) {
					case 'profile':
						formData = {profile_photo: res?.secure_url}
						break
					case 'cover':
						formData = {cover_photo: res?.secure_url}
						break
					default:
				}

				updatePersonalAccountApi.mutateAsync(formData)
			}
		},
	})

	/* handle user file uploading  */
	const handleFileUpload = (type, imageUrl) => {
		if (imageUrl !== null && typeof imageUrl !== 'undefined' && type !== null && typeof type !== 'undefined') {
			switch (type) {
				case 'profile':
					setProfileImageUri(imageUrl)
					break
				case 'cover':
					setCoverPhotoUri(imageUrl)
					break
				default:
					/* do nothing  */
					break
			}

			const formData = new FormData()
			formData.append('file', imageUrl)
			formData.append('upload_type', type)
			formData.append('upload_preset', config('services.cloudinary.preset'))

			uploadImageApi.mutateAsync(formData)
		}
	}

	/* Handle user account update */
	const handleAccountUpdate = formData => {
		updatePersonalAccountApi.mutateAsync(formData)
	}

	/* The api loading state. */
	const isLoading = updatePersonalAccountApi.isLoading || fetchAccountApi.isLoading

	const bottomSheetRef = useRef(null)

	const initialValues = {
		first_name: user?.first_name,
		last_name: user?.last_name,
		business_name: user?.business_name,
		country: user?.country,
		state: user?.state,
		email: user?.email,
		phone_number: user?.phone_number,
		location: user?.location,
		longitude: '2312311',
		latitude: '1131431',
		dob: user?.dob,
		gender: user?.gender,
		marital_status: user?.marital_status,
		facebook_link: user?.facebook_link,
		instagram_link: user?.instagram_link,
		profile_photo: user?.profile_photo,
		cover_photo: user?.cover_photo,
	}

	const handleClosePress = () => bottomSheetRef.current.close()

	return (
		<>
			<Container>
				<Formik initialValues={initialValues} enableReinitialize onSubmit={handleAccountUpdate}>
					{({handleChange, handleSubmit, values, setFieldValue}) => (
						<>
							<Header screenName={screenName} isNotHome />
							<KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
								<View style={{paddingHorizontal: SIZES.font8}}>
									<CameraComponent coverPhotoValue={coverPhotoUri ? {uri: coverPhotoUri} : {uri: values?.cover_photo}} setCoverPhoto={() => onOpenModal('cover')} profilePhotoValue={profileImageUri ? {uri: profileImageUri} : {uri: values?.profile_photo}} setProfilePhoto={() => onOpenModal('profile')} />

									{getInputValues(UPPER_KEYS).map(({label, key}) => (
										<InputField key={key} label={label} onChangeText={handleChange(key)} value={values[key]} />
									))}

									<Text style={[FONTS.body4, {marginBottom: SIZES.font10}]}>Country/Region*</Text>
									<CountryPicker withFilter withAlphaFilter placeholder={values?.country || 'Select your country'} onSelect={data => setFieldValue('country', data?.name)} containerButtonStyle={styles.countryContainer} />
									{getInputValues(['state', 'location']).map(({label, key}) => (
										<InputField key={key} label={label} onChangeText={handleChange(key)} value={values[key]} />
									))}
									<View style={{marginBottom: SIZES.font10}}>
										<DatePicker onSelectDate={dob => setFieldValue('dob', dob)} dateValue={values?.dob !== null ? values?.dob : ''} />
									</View>
									<Picker placeHolder={'Choose Gender'} value={values?.gender} data={['Male', 'Female']} onPressItem={data => setFieldValue('gender', data)} />
									<Picker placeHolder={values?.marital_status ? values?.marital_status : 'Marital Status'} value={values?.marital_status} data={['Single', 'Married', 'Divorced']} onPressItem={data => setFieldValue('marital_status', data)} />
									{/* <InputField label="Email of Company*" /> */}
									<Text style={styles.socialMediaText}>Add links to social media pages</Text>

									{getInputValues(['facebook_link', 'instagram_link']).map(({label, key}) => (
										<InputField key={key} label={label} onChangeText={handleChange(key)} value={values[key]} />
									))}

									<CustomButton title="Save" style={styles.saveButton} onPress={handleSubmit} isLoading={isLoading} disabled={isLoading} />
								</View>
							</KeyboardAwareScrollView>
						</>
					)}
				</Formik>
			</Container>
			<ImageBottomSheet ref={bottomSheetRef} handleClosePress={handleClosePress} onSelectImage={handleFileUpload} type={type} onCoverPhotoSelect={data => setFieldValue('coverPhoto', data)} />
		</>
	)
}

export default PersonalAccount

const styles = StyleSheet.create({
	socialMediaText: {
		...FONTS.body3,
		marginBottom: SIZES.font10,
		marginTop: SIZES.font1,
		fontWeight: '600',
	},
	saveButton: {
		marginTop: SIZES.font1 * 2,
		width: '90%',
		alignSelf: 'center',
		marginBottom: SIZES.font1 * 2,
	},
	countryContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: SIZES.font8,
		borderWidth: 1,
		borderColor: COLORS.line,
		borderRadius: 15,
		marginBottom: SIZES.font1,
	},
})
