import {Alert, Image, Pressable, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import icons from '../../constants/icons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomButton from '../../components/CustomButton';
import {apis} from '../../services/api';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as yup from 'yup';
import {VerifyOtpStyle as styles} from './styles';

const otpValiditor = yup.object().shape({
  otp: yup.string().required('Otp is required'),
});

const VerifyOtp = () => {
  const {navigate} = useNavigation();
  const [successful, setSuccessful] = useState(false);
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
    setSuccessful(!successful);
    return;
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
                onPress={() => navigate('Login')}
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
                  // if (errors.otp === 'verify-error') {
                  //   setFieldError('otp', '');
                  // }
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
                        Didn’t receive OTP?
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
