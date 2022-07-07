import {Image, Pressable, Text, View} from 'react-native';
import React, {useRef, useMemo, useCallback, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import {Formik} from 'formik';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import InputBox from '../../components/InputBox';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation} from '@react-navigation/native';
import {LoginStyles as styles} from './styles';

const Login = () => {
  const {navigate} = useNavigation();
  const [bottomSheetView, setBottomSheetView] = useState(1);
  const [otp, setOtp] = useState('');
  const [successful, setSuccessful] = useState(false);

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['1%', '60%', '75%'], []);
  // const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  // const snapPoints = {[]}

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        opacity={0.3}
      />
    ),
    [],
  );

  return (
    <>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.wrapper}>
          <Image
            source={icons.BlueLogo}
            resizeMode={'contain'}
            style={styles.imageHeader}
          />
          <Formik initialValues={{email: '', password: ''}}>
            {({handleChange, handleSubmit, errors, touched, values}) => (
              <>
                <CustomInput
                  name="email"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  error={touched.email && errors.email ? errors.email : null}
                />
                <CustomInput
                  name="password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  error={
                    touched.password && errors.password ? errors.password : null
                  }
                />
                <View style={styles.buttonWrapper}>
                  <CustomButton
                    title="Login"
                    style={styles.button}
                    onPress={() => navigate('BottomTab')}
                  />
                  <CustomButton
                    title="Signup"
                    style={styles.button}
                    onPress={() => navigate('SignUp')}
                  />
                </View>
              </>
            )}
          </Formik>
          <Text style={styles.noOtpReceive}>OR</Text>
          <View style={styles.resendOtpView}>
            <Text style={styles.noOtpReceive}>Forgot Password? </Text>
            <Pressable
              onPress={() => {
                bottomSheetRef.current?.snapToIndex(1);
                setBottomSheetView(1);
              }}>
              <Text style={styles.resendText}>Reset here</Text>
            </Pressable>
          </View>
        </View>
        <BottomSheet
          backdropComponent={renderBackdrop}
          backgroundStyle={styles.bottomSheet}
          ref={bottomSheetRef}
          index={-1}
          enablePanDownToClose
          snapPoints={snapPoints}>
          {bottomSheetView === 1 && (
            <>
              <View style={styles.contentContainer}>
                <Text style={styles.forgotText}>Forgot password</Text>
                <Text style={{...FONTS.body4}}>
                  Enter your email for the verification process, we will send 4
                  digits code to your email.
                </Text>
                <View style={{marginVertical: SIZES.font1}}>
                  <InputBox label="Email" />
                </View>
                <CustomButton
                  title="Continue"
                  style={{marginTop: SIZES.font10}}
                  onPress={() => setBottomSheetView(2)}
                />
              </View>
            </>
          )}
          {bottomSheetView === 2 && (
            <>
              <View style={styles.contentContainer}>
                <Text style={styles.forgotText}>Enter 4 Digits Code</Text>
                <Text style={{...FONTS.body4}}>
                  Enter the 4 digits code you receieved on your email.
                </Text>
                <View style={{marginVertical: SIZES.font1}}>
                  <OTPInputView
                    style={styles.otpInputView}
                    pinCount={4}
                    code={otp}
                    onCodeChanged={setOtp}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    autoFocusOnLoad
                  />
                </View>
                <CustomButton
                  title="Continue"
                  style={{marginTop: SIZES.font1 + 20}}
                  onPress={() => setBottomSheetView(3)}
                />
              </View>
            </>
          )}
          {bottomSheetView === 3 && (
            <>
              {successful ? (
                <View style={styles.verifyView}>
                  <Image
                    source={icons.Success}
                    resizeMode="contain"
                    style={styles.verifyImage}
                  />
                  <Text style={styles.successfulText}>
                    Password Reset Successful!
                  </Text>

                  <CustomButton
                    title="Continue"
                    style={styles.startButton}
                    onPress={() => navigate('BottomTab')}
                  />
                </View>
              ) : (
                <View style={styles.contentContainer}>
                  <Text style={styles.forgotText}>Reset Password </Text>
                  <Text style={{...FONTS.body4}}>
                    Set the new password for your account so you can login and
                    acess all the features.
                  </Text>
                  <View style={{marginVertical: SIZES.font1}}>
                    <InputBox label="New Password" isPassword />
                    <InputBox label="Confirm Password" isPassword />
                  </View>
                  <CustomButton
                    title="Reset Password"
                    style={{marginTop: SIZES.font10}}
                    onPress={() => setSuccessful(!successful)}
                  />
                </View>
              )}
            </>
          )}
        </BottomSheet>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Login;
