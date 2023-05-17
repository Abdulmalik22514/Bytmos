import {Image, View} from 'react-native';
import {getDeviceName} from 'react-native-device-info';
import React, {useEffect, useState} from 'react';
import icons from '../../constants/icons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import {signUpValidationSchema} from '../../utils/validation';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/Container';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SignupStyle as styles} from './styles';
import {useMutation} from 'react-query';
import {useAuthApis} from '../../services/api/Auth/auth.index';
import {useFlusDispatcher} from 'react-flus';
import {SET_API_TOKEN} from '../../flus/constants/auth.const';
import {LOGIN_SCREEN, VERIFY_OTP_SCREEN} from '../../constants/screens';
import {SIZES} from '../../constants/theme';

const initialValues = {
  fullName: '',
  email: 'ibrahimmalik095@gmail.com',
  phoneNumber: '08030525323',
  password: 'Abdul$%malik?1',
  confirmPassword: 'Abdul$%malik?1',
};

const getErrorValue = (errorKeys, err) => {
  let errorMessage = null;
  for (const value of errorKeys) {
    if (!errorMessage && value && err?.message?.[value]) {
      errorMessage = err?.message?.[value]?.[0];
    }
  }
  return errorMessage ?? 'Something went wrong';
};

const SignUp = () => {
  const {navigate} = useNavigation();
  const dispatcher = useFlusDispatcher();
  const [loading, setLoading] = useState(false);

  const {RegisterAccount} = useAuthApis();

  // const signupApi = useMutation(RegisterAccount, {
  //   onSuccess: (res, params) => {
  //     if (res) {
  //       dispatcher({
  //         type: SET_API_TOKEN,
  //         payload: {token: res?.data?.auth_token},
  //       });

  //       setTimeout(() => navigate(VERIFY_OTP_SCREEN), 1000);
  //     }
  //   },
  // });

  // const handleRegister = async formData => {
  //   const device_name = await getDeviceName();

  //   const userCredentials = {
  //     pa_first_name: formData?.firstName,
  //     pa_last_name: formData?.lastName,
  //     pa_email: formData?.email,
  //     pa_phone_number: formData?.phoneNumber,
  //     device_name,
  //     password: formData?.password,
  //     password_confirmation: formData?.confirmPassword,
  //   };

  //   /* signup */
  //   signupApi.mutate(userCredentials);
  // };

  // const isLoading = signupApi.isLoading;
  // ----------------------------------------------------------------------------

  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Image
            source={icons.BlueLogo}
            resizeMode={'contain'}
            style={styles.imageHeader}
          />
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={initialValues}
            enableReinitialize
            onSubmit={() => {
              // setLoading(true);
              navigate(VERIFY_OTP_SCREEN);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <>
                <CustomInput
                  name="firstName"
                  placeholder="First Name"
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                  error={
                    touched.firstName && errors.firstName
                      ? errors.firstName
                      : null
                  }
                />
                <CustomInput
                  name="lastName"
                  placeholder="Last Name"
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  error={
                    touched.lastName && errors.lastName ? errors.lastName : null
                  }
                />
                <CustomInput
                  name="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={touched.email && errors.email ? errors.email : null}
                />
                <CustomInput
                  name="phoneNumber"
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  maxLength={11}
                  onChangeText={handleChange('phoneNumber')}
                  value={values.phoneNumber}
                  error={
                    touched.phoneNumber && errors.phoneNumber
                      ? errors.phoneNumber
                      : null
                  }
                />
                <CustomInput
                  name="password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  secureTextEntry
                  value={values.password}
                  error={
                    touched.password && errors.password ? errors.password : null
                  }
                />
                <CustomInput
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  secureTextEntry
                  value={values.confirmPassword}
                  error={
                    touched.confirmPassword && errors.confirmPassword
                      ? errors.confirmPassword
                      : null
                  }
                />

                <View style={styles.bottomBox}>
                  <CustomButton
                    title={'Sign Up'}
                    style={styles.button}
                    onPress={handleSubmit}
                    isLoading={isSubmitting || loading}
                  />
                  <View style={styles.separator} />

                  <CustomButton
                    title="Log in"
                    style={styles.button}
                    onPress={() => navigate(LOGIN_SCREEN)}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default SignUp;
