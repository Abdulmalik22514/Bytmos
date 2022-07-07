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

const initialValues = {
  fullName: 'Ahmed Ade',
  email: 'azeezhammed57@gmail.com',
  phoneNumber: '08101185210',
  password: 'aDEKUNLE7@',
  confirmPassword: 'aDEKUNLE7@',
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
  const handleRegister = async value => {
    navigate('VerifyOtp', {
      auth_token: 'response.data.auth_token',
      email: value.email,
    });
    return;
    const device_name = await getDeviceName();
    const userCredentials = {
      pa_last_name: `${value.fullName?.split(' ')[1]}`,
      pa_first_name: value.fullName?.split(' ')[0],
      pa_email: value.email,
      pa_phone_number: value.phoneNumber,
      device_name,
      password: value.password,
      password_confirmation: value.confirmPassword,
    };

    try {
      const response = await apis.signup(userCredentials);

      console.log({response});

      Alert.alert('Success!', response.message.toString(), [
        {
          text: 'Alright Thanks',
          onPress: () =>
            navigate('VerifyOtp', {
              auth_token: response.data.auth_token,
              email: value.email,
            }),
        },
      ]);
    } catch (e) {
      const error = getErrorValue(Object.keys(userCredentials), e);
      console.log(e, 'error');
      Alert.alert('Error!', error);
    }
  };

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
                    isLoading={isSubmitting}
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
