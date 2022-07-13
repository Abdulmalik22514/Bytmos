import {Alert, Image, Pressable, Text, View} from "react-native"
import React, {useRef, useState} from "react"
import {useNavigation, useRoute} from "@react-navigation/native"
import icons from "../../constants/icons"
import OTPInputView from "@twotalltotems/react-native-otp-input"
import CustomButton from "../../components/CustomButton"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {Formik} from "formik"
import * as yup from "yup"
import {VerifyOtpStyle as styles} from "./styles"
import {LOGIN_SCREEN} from "../../constants/screens"
import {useMutation} from "react-query"
import {useAuthApis} from "../../services/api/auth/auth.index"
import {resetToken} from "../../services/authServices"
import {sleep} from "./../../utils/utils"

const otpValiditor = yup.object().shape({
	otp: yup.string().required("Otp is required"),
})

const VerifyOtp = () => {
	const {navigate} = useNavigation()

	const formRef = useRef()

	const {VerifyOTP, ResendOTP} = useAuthApis()
	/* verify otp handler */
	const verifyOTPApi = useMutation(VerifyOTP, {
		onSuccess: res => {
			if (res?.status) {
				resetToken()

				sleep().then(() => navigate(LOGIN_SCREEN))
			}
		},
	})

	/* resend otp */
	const resendOTPApi = useMutation(ResendOTP)

	const handleResend = () => {
		formRef.current.setErrors("otp", "")

		resendOTPApi.mutate()
	}

	const handleOTPVerification = formData => verifyOTPApi.mutateAsync(formData)

	const isLoading = verifyOTPApi.isLoading
	const resendingOtp = resendOTPApi.isLoading

	return (
		<Formik initialValues={{otp: ""}} validationSchema={otpValiditor} onSubmit={handleOTPVerification} innerRef={formRef}>
			{({handleChange, handleSubmit, isSubmitting, values, errors, touched, setFieldError}) => (
				<>
					<KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
						<Image source={icons.Verify_Otp} resizeMode="contain" style={styles.image} />
						<Text style={styles.otpVerify}>Verification</Text>
						<Text style={styles.verifyText}>Please enter the verification code that was sent to your registered email</Text>
						<OTPInputView
							style={styles.otpInputView}
							pinCount={4}
							code={values?.otp}
							onCodeChanged={code => {
								handleChange("otp")(code)
							}}
							autoFocusOnLoad
							codeInputFieldStyle={[styles.underlineStyleBase, touched.otp && errors.otp && styles.inputErroe]}
							codeInputHighlightStyle={styles.underlineStyleHighLighted}
						/>

						{errors.otp === "verify-error" && (
							<View style={{alignItems: "center"}}>
								<Text style={styles.invalidCode}>Verification code invalid</Text>
								<Pressable onPress={handleResend}>
									{resendingOtp && <Text style={styles.resendingText}>Resending...</Text>}
									{!resendingOtp && <Text style={styles.resendText}>Resend</Text>}
								</Pressable>
							</View>
						)}

						{errors.otp !== "verify-error" && (
							<View style={styles.resendOtpView}>
								{resendingOtp && <Text style={styles.resendingText}>Resending...</Text>}

								{!resendingOtp && (
									<>
										<Text style={styles.noOtpReceive}>Didn’t receive OTP?</Text>
										<Pressable onPress={handleResend}>
											<Text style={styles.resendText}> Resend</Text>
										</Pressable>
									</>
								)}
							</View>
						)}
						<CustomButton title="Proceed" style={styles.proceedButton} disabled={isLoading || resendingOtp} onPress={handleSubmit} isLoading={isSubmitting || isLoading} />
					</KeyboardAwareScrollView>
				</>
			)}
		</Formik>
	)
}

export default VerifyOtp
