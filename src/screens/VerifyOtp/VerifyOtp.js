import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import icons from '../../constants/icons';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomButton from '../../components/CustomButton';
import {apis} from '../../services/api';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as yup from 'yup';
import LottieView from 'lottie-react-native';

const otpValiditor = yup.object().shape({
  otp: yup.string().required('Otp is required'),
});

const VerifyOtp = () => {
  const {navigate} = useNavigation();
  const [successful, setSuccessful] = useState(true);
  const [resending, setResending] = useState(false);

  const formRef = useRef();

  const {params} = useRoute();
  const {email, auth_token} = params;

  const handleResend = async () => {
    formRef.current.setErrors('otp', '');
    try {
      setResending(true);
      const headers = {
        Resource_Code: '006',
        Authorization: `Bearer ${auth_token}`,
      };
      const response = await apis.resendOtp(headers);
      Alert.alert('Success', response.message ?? '');
      console.log(response);
    } catch (e) {
      Alert.alert('Error', 'Unable to resend Otp , try later..');
      console.log(e);
    } finally {
      setResending(false);
    }
  };

  const verify = async (values, {setFieldError}) => {
    try {
      const headers = {
        Resource_Code: '007',
        Authorization: `Bearer ${auth_token}`,
      };

      const response = await apis.verifyOtp({otp: values.otp}, headers);

      if (response.code === 200) {
        setSuccessful(true);
      }
    } catch (e) {
      setFieldError('otp', 'verify-error');
    }
  };

  return (
    <Formik
      initialValues={{otp: ''}}
      validationSchema={otpValiditor}
      onSubmit={verify}
      innerRef={formRef}>
      {({
        handleChange,
        handleSubmit,
        isSubmitting,
        values,
        errors,
        touched,
        setFieldError,
      }) => (
        <>
          {successful ? (
            <View style={styles.lottieBox}>
              <Image
                source={icons.Success}
                resizeMode="contain"
                style={styles.lottieView}
              />
              <Text style={styles.successfulText}>
                Verification Successful!
              </Text>

              <CustomButton
                title="Start"
                style={styles.startButton}
                onPress={() => navigate('BottomTab')}
              />
            </View>
          ) : (
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.container}>
              <Image
                source={icons.Verify_Otp}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.otpVerify}>OTP Verification</Text>
              <Text style={styles.verifyText}>
                Please enter the verification code that was {'\n'}sent to
                <Text style={{fontWeight: '700'}}> {email}</Text>
              </Text>
              <OTPInputView
                style={styles.otpInputView}
                pinCount={4}
                code={values.otp}
                onCodeChanged={code => {
                  if (errors.otp === 'verify-error') {
                    setFieldError('otp', '');
                  }
                  handleChange('otp')(code);
                }}
                autoFocusOnLoad
                codeInputFieldStyle={[
                  styles.underlineStyleBase,
                  touched.otp && errors.otp && styles.inputErroe,
                ]}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
              />

              {errors.otp === 'verify-error' && (
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.invalidCode}>
                    Verification code invalid
                  </Text>
                  <Pressable onPress={handleResend}>
                    {resending ? (
                      <Text style={styles.resendingText}>Resending...</Text>
                    ) : (
                      <Text style={styles.resendText}>Resend</Text>
                    )}
                  </Pressable>
                </View>
              )}

              {errors.otp === 'verify-error' ? null : (
                <View style={styles.resendOtpView}>
                  {resending ? (
                    <Text style={styles.resendingText}>Resending...</Text>
                  ) : (
                    <>
                      <Text style={styles.noOtpReceive}>
                        Didn’t receive OTP?{' '}
                      </Text>
                      <Pressable onPress={handleResend}>
                        <Text style={styles.resendText}>Resend OTP</Text>
                      </Pressable>
                    </>
                  )}
                </View>
              )}
              <CustomButton
                title="Proceed"
                style={styles.proceedButton}
                onPress={handleSubmit}
                isLoading={isSubmitting}
              />
            </KeyboardAwareScrollView>
          )}
        </>
      )}
    </Formik>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: SIZES.font1 * 2,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  successfulText: {
    ...FONTS.h8,
    color: COLORS.black,
    marginVertical: SIZES.font1,
  },
  lottieView: {
    width: SIZES.font1 * 4.2,
    height: SIZES.font1 * 4.2,
    marginTop: SIZES.font1 * 4,
  },
  lottieBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  startButton: {
    width: '80%',
    marginTop: SIZES.font1 * 9,
  },
  image: {
    width: SIZES.font1 * 8,
    height: SIZES.font1 * 8,
    marginLeft: SIZES.font1,
  },
  resendingText: {
    ...FONTS.body4,
  },
  otpVerify: {
    ...FONTS.h5,
    marginVertical: SIZES.font5,
  },
  verifyText: {
    ...FONTS.body4,
  },
  otpInputView: {
    width: '87%',
    height: SIZES.font1 * 5,
  },
  inputErroe: {
    borderColor: COLORS.red,
  },
  underlineStyleBase: {
    width: SIZES.font1 * 1.8,
    height: SIZES.font1 * 1.9,
    borderRadius: 8,
    borderColor: COLORS.otp,
    color: 'black',
    ...FONTS.h7,
  },
  underlineStyleHighLighted: {
    borderColor: COLORS.blue,
  },
  resendOtpView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    ...FONTS.h10,
    color: COLORS.blue,
  },
  noOtpReceive: {
    ...FONTS.body3,
  },
  invalidCode: {
    ...FONTS.h10,
    color: COLORS.red,
    marginBottom: SIZES.font10,
  },
  proceedButton: {
    width: '80%',
    marginVertical: SIZES.font1,
  },
});
