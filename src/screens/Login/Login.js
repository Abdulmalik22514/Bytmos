import {Image, Pressable, Text, View} from 'react-native'
import React, {useRef, useCallback} from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {FONTS, SIZES} from '../../constants/theme'
import icons from '../../constants/icons'
import {Formik} from 'formik'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet'
import InputBox from '../../components/InputBox'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {useNavigation} from '@react-navigation/native'
import {LoginStyles as styles} from './styles'
import {SIGNUP_SCREEN} from '../../constants/screens'
import {useAuthApis} from '../../services/api/Auth/auth.index'
import {useMutation} from 'react-query'
import {FLUSDYNAMIC_STORE, useFlusDispatcher, useFlusStores} from 'react-flus'
import {USER_LOGIN} from '../../flus/constants/auth.const'
import {getDeviceName} from 'react-native-device-info'
import {accountLoginValidationSchema, forgetPwdValidationSchema, resetPwdValidationSchema} from '../../utils/validation'
import BottomSheet1 from '../../utils/BottomSheet/BottomSheet1'
import Container from '../../components/Container'

const Login = () => {
	const {navigate} = useNavigation()

	/* Flus state vars & dispatcher */
	const {resetPwdSession} = useFlusStores()
	const dispatcher = useFlusDispatcher()

	const bottomSheetRef = useRef(null)

	// variables
	const snapPoints = ['1%', '60%', '75%']
	const renderBackdrop = useCallback(props => <BottomSheetBackdrop {...props} disappearsOnIndex={0} appearsOnIndex={1} opacity={0.3} />, [])

	/* import apis services */
	const {ForgottenPassword, ResetPassword, VerifyPasswordReset, LoginAccount} = useAuthApis()

	const loginAccountApi = useMutation(LoginAccount, {
		onSuccess: res => {
			if (res?.status) {
				dispatcher({
					type: USER_LOGIN,
					payload: {
						user: res?.data?.user_info,
						access_token: res?.data?.auth_token,
					},
				})
			}
		},
	})

	/* Recover user account password. */
	const forgottenPasswordApi = useMutation(ForgottenPassword, {
		onSuccess: (res, formParams) => {
			if (res?.status) {
				/* Dynamically store user email for verifying password reset */
				dispatcher({
					type: FLUSDYNAMIC_STORE,
					payload: {
						store: 'resetPwdSession',
						data: {user: formParams?.partner_email, bottomSheetView: 2},
					},
				})
			}
		},
	})

	/* Verify password reset token */
	const verifyPasswordResetApi = useMutation(VerifyPasswordReset, {
		onSuccess: res => {
			if (res?.status) {
				dispatcher({
					type: FLUSDYNAMIC_STORE,
					payload: {
						store: 'resetPwdSession',
						data: {bottomSheetView: 3, ...res?.data},
					},
				})
			}
		},
	})

	/* Reset account password  */
	const resetPasswordApi = useMutation(ResetPassword, {
		onSuccess: res => {
			if (res?.status) {
				dispatcher({
					type: FLUSDYNAMIC_STORE,
					payload: {store: 'resetPwdSession', data: {bottomSheetView: 4}},
				})
				// bottomSheetRef.current?.snapToIndex(0)
			}
		},
	})

	/* handle account login */
	const handleAccountLogin = async formData => {
		const device_name = await getDeviceName()

		const formParams = {device_name, ...formData}

		loginAccountApi.mutate(formParams)
	}
	/* Handle account recover  */
	const handleAccountRecovery = formData => forgottenPasswordApi.mutateAsync(formData)
	/* handle password reset verification  */
	const handlePwdResetVerification = formData => {
		const params = {partner_email: resetPwdSession?.user, ...formData}

		verifyPasswordResetApi.mutateAsync(params)
	}

	/* reset password reset opertion  */
	const destroyPasswordResetSession = () => {
		dispatcher({
			type: FLUSDYNAMIC_STORE,
			payload: {store: 'resetPwdSession', data: {bottomSheetView: 0}},
		})

		bottomSheetRef.current?.snapToIndex(0)
	}

	/* handle password resetting */
	const handlePasswordResetting = formData => {
		const formParams = {...resetPwdSession, ...formData}

		resetPasswordApi.mutate(formParams)
	}

	const isLoading = forgottenPasswordApi.isLoading || verifyPasswordResetApi.isLoading || resetPasswordApi.isLoading || loginAccountApi.isLoading

	return (
		<Container>
			<KeyboardAwareScrollView contentContainerStyle={styles.container}>
				{/* Login Form */}
				<View style={styles.wrapper}>
					<Image source={icons.BlueLogo} resizeMode={'contain'} style={styles.imageHeader} />
					<Formik
						enableReinitialize
						validationSchema={accountLoginValidationSchema}
						initialValues={{
							pa_email: '',
							password: '',
						}}
						onSubmit={handleAccountLogin}>
						{({handleChange, handleSubmit, errors, touched, values}) => (
							<>
								<CustomInput name="pa_email" placeholder="Email" onChangeText={handleChange('pa_email')} value={values.pa_email} error={touched.pa_email && errors.pa_email ? errors.pa_email : null} />
								<CustomInput name="password" placeholder="Password" onChangeText={handleChange('password')} value={values.password} secureTextEntry error={touched.password && errors.password ? errors.password : null} />
								<View style={styles.buttonWrapper}>
									<CustomButton title="Login" style={styles.button} onPress={handleSubmit} isLoading={isLoading} disabled={isLoading} />
									<CustomButton title="Signup" style={styles.button} onPress={() => navigate(SIGNUP_SCREEN)} />
								</View>
							</>
						)}
					</Formik>
					<Text style={styles.noOtpReceive}>OR</Text>
					<View style={styles.resendOtpView}>
						<Text style={styles.noOtpReceive}>Forgot Password? </Text>
						<Pressable
							onPress={() => {
								bottomSheetRef.current?.snapToIndex(1)

								dispatcher({
									type: FLUSDYNAMIC_STORE,
									payload: {
										store: 'resetPwdSession',
										data: {bottomSheetView: 1},
									},
								})
							}}>
							<Text style={styles.resendText}>Reset here</Text>
						</Pressable>
					</View>
				</View>

				{/* Reset password components */}
				<BottomSheet handleIndicatorStyle={styles.sheetHandleStyle} backdropComponent={renderBackdrop} backgroundStyle={styles.bottomSheet} ref={bottomSheetRef} index={-1} enablePanDownToClose snapPoints={snapPoints}>
					{/* Forgotten Password */}
					{resetPwdSession?.bottomSheetView === 1 && (
						<>
							<Formik validationSchema={forgetPwdValidationSchema} initialValues={{partner_email: ''}} onSubmit={handleAccountRecovery}>
								{({handleChange, handleSubmit, errors, touched, values}) => (
									<>
										<BottomSheet1 value={values.partner_email} onChangeSheet1={handleChange('partner_email')} error={touched.partner_email && errors.partner_email ? errors.partner_email : null} onSubmitSheet1={handleSubmit} isLoading={isLoading} disabled={isLoading} />
									</>
								)}
							</Formik>
						</>
					)}

					{/* Verify Password Reset Code */}
					{resetPwdSession?.bottomSheetView === 2 && (
						<>
							<Formik initialValues={{otp: ''}} onSubmit={handlePwdResetVerification}>
								{({handleChange, handleSubmit, values}) => (
									<>
										<View style={styles.contentContainer}>
											<Text style={styles.forgotText}>Enter 4 Digits Code</Text>
											<Text style={{...FONTS.body4}}>Enter the 4 digits code you receieved on your email.</Text>
											<View style={{marginVertical: SIZES.font1}}>
												<OTPInputView
													style={styles.otpInputView}
													pinCount={4}
													code={values?.otp}
													onCodeChanged={code => {
														handleChange('otp')(code)
													}}
													codeInputFieldStyle={styles.underlineStyleBase}
													codeInputHighlightStyle={styles.underlineStyleHighLighted}
													autoFocusOnLoad
												/>
											</View>
											<CustomButton title="Verify" style={{marginTop: SIZES.font1 + 20}} onPress={handleSubmit} isLoading={isLoading} disabled={isLoading} />
										</View>
									</>
								)}
							</Formik>
						</>
					)}

					{/* Reset New Password */}
					{resetPwdSession?.bottomSheetView === 3 && (
						<>
							<Formik validationSchema={resetPwdValidationSchema} initialValues={{password: '', password_confirmation: ''}} onSubmit={handlePasswordResetting}>
								{({handleChange, handleSubmit, errors, touched, values}) => (
									<>
										<View style={styles.contentContainer}>
											<Text style={styles.forgotText}>Reset Password </Text>
											<Text style={{...FONTS.body4}}>Set the new password for your account so you can login and acess all the features.</Text>
											<View style={{marginVertical: SIZES.font1}}>
												<InputBox label="New Password" isPassword name="password" value={values.password} onChangeText={handleChange('password')} error={touched.password && errors.password ? errors.password : null} />

												<InputBox label="Confirm Password" isPassword value={values.password_confirmation} onChangeText={handleChange('password_confirmation')} error={touched.password_confirmation && errors.password_confirmation ? errors.password_confirmation : null} />
											</View>
											<CustomButton title="Reset Password" style={{marginTop: SIZES.font10}} onPress={handleSubmit} isLoading={isLoading} disabled={isLoading} />
										</View>
									</>
								)}
							</Formik>
						</>
					)}

					{/* Reset Password Success */}
					{resetPwdSession?.bottomSheetView === 4 && (
						<>
							<View style={styles.verifyView}>
								<Image source={icons.Success} resizeMode="contain" style={styles.verifyImage} />
								<Text style={styles.successfulText}>Password Reset Successful!</Text>

								<CustomButton title="Login" style={styles.startButton} onPress={destroyPasswordResetSession} />
							</View>
						</>
					)}
				</BottomSheet>
			</KeyboardAwareScrollView>
		</Container>
	)
}

export default Login
