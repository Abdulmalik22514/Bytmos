import {Alert, Image, View} from 'react-native';
import {getDeviceName} from 'react-native-device-info';
import React from 'react';
import icons from '../../constants/icons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import {signUpValidationSchema} from '../../utils/validation';
import {apis} from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/Container';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SignupStyle as styles} from './styles';
import {useMutation} from 'react-query';
import {useAuthApis} from '../../services/api/auth/auth.index';
import {useFlusDispatcher} from 'react-flus';
import {SET_API_TOKEN} from '../../flus/constants/auth.const';
import {VERIFY_OTP_SCREEN} from '../../constants/screens';

const initialValues = {
  fullName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
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

const SignUp = ({}) => {
  const {navigate} = useNavigation();
  const dispatcher = useFlusDispatcher();

  const {RegisterAccount} = useAuthApis();

  const signupApi = useMutation(RegisterAccount, {
    onSuccess: (res, params) => {
      if (res) {
        dispatcher({
          type: SET_API_TOKEN,
          payload: {token: res?.data?.auth_token},
        });

        setTimeout(() => navigate(VERIFY_OTP_SCREEN), 1000);
      }
    },
  });

  const handleRegister = async formData => {
    const device_name = await getDeviceName();

    const userCredentials = {
      pa_last_name: formData?.fullName?.split(' ')[1],
      pa_first_name: formData?.fullName?.split(' ')[0],
      pa_email: formData?.email,
      pa_phone_number: formData?.phoneNumber,
      device_name,
      password: formData?.password,
      password_confirmation: formData?.confirmPassword,
    };

    /* signup */
    signupApi.mutate(userCredentials);
  };

  const isLoading = signupApi.isLoading;
  // ----------------------------------------------------------------------------

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
      <Container>
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
            onSubmit={handleRegister}>
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
                  name="fullName"
                  placeholder="Full Name"
                  onChangeText={handleChange('fullName')}
                  value={values.fullName}
                  error={
                    touched.fullName && errors.fullName ? errors.fullName : null
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
                    isLoading={isSubmitting || isLoading}
                  />
                  <View style={styles.separator} />

                  <CustomButton
                    title="Login"
                    style={styles.button}
                    onPress={() => navigate('Login')}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
