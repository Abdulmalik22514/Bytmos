import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Formik, Field, Form} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {signUpValidationSchema} from './utils';

const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleRegister = async value => {
    try {
      setLoading(true);
      console.log(
        value,
        // value.confirmPassword,
        // value.email,
        // value.fullName,
        // value.password,
        // value.phoneNumber,
      );
      // let device_name = Device.modelName;
      // let userCredentials = {
      //   pa_last_name: `${value.fullName?.split(' ')[1]}`,
      //   pa_first_name: value.fullName?.split(' ')[0],
      //   pa_email: value.email,
      //   pa_phone_number: value.phoneNumber,
      //   // device_name,
      //   password: value.password,
      //   password_confirmation: value.confirmPassword,
      // };

      // console.log(userCredentials);
      // let headers = {
      //   Client_Secret: 'Ku0DjUFHdGUUbvEkHqv975WLPQv5DJYpK6k',
      //   App_No: 'dTpHX90873',
      //   Resource_Code: '003',
      // };

      // const response = await axios.post(
      //   'https://backend.bitmoservice.com/api/resources/v1/partner/signup',
      //   userCredentials,
      //   {headers: headers},
      // );

      //   switch (response.data.code) {
      //     case 200:
      //       Alert.alert('Success!', response.data.message.toString(), [
      //         {
      //           text: 'Alright Thanks',
      //           onPress: () =>
      //             navigation.navigate('VerifyOtp', {
      //               auth_token: response.data.data.auth_token,
      //               email: value.email,
      //             }),
      //         },
      //       ]);

      //       console.log(response);
      //       setLoading(false);

      //       break;
      //     default:
      //       Alert.alert('Error!', response.data.message);
      //       setLoading(false);
      //   }

      //   setLoading(false);

      // console.log(response.data);
    } catch (e) {
      console.log(e);
      Alert.alert(e.message, 'Please try again...');
    } finally {
      setLoading(false);
    }
  };

  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  return (
    // <SafeAreaView>
    // <View style={styles.container}>

    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={icons.BlueLogo}
          resizeMode={'contain'}
          style={styles.imageHeader}
        />
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={initialValues}
          onSubmit={values => {
            handleRegister(values);
            console.log(values, 'ggggg');
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <Field
                component={CustomInput}
                name="fullName"
                placeholder="Full Name"
              />
              <Field
                component={CustomInput}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={CustomInput}
                name="phoneNumber"
                placeholder="Phone Number"
                keyboardType="numeric"
              />
              <Field
                component={CustomInput}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Field
                component={CustomInput}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
              />
              <View style={styles.bottomBox}>
                <CustomButton
                  title={'Sign Up'}
                  style={styles.button}
                  onPress={() => {
                    console.log('gggg');
                    handleRegister();
                  }}
                  // onPress={
                  //   loading ? (
                  //     <ActivityIndicator size={'large'} color={COLORS.white} />
                  //   ) : (
                  //     handleSubmit()
                  //   )
                  // }
                />
                <View style={styles.separator} />

                <CustomButton title={'Login'} style={styles.button} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
    // </View>
    // </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    padding: SIZES.font6,
  },
  imageHeader: {
    width: SIZES.font1 * 2,
    height: SIZES.font1 * 2,
    marginBottom: SIZES.font1 * 1.7,
  },
  separator: {
    width: '60%',
    borderWidth: 0.8,
    borderColor: COLORS.input,
    alignSelf: 'center',
  },
  button: {
    marginVertical: SIZES.font6,
  },
  bottomBox: {
    width: '100%',
    marginTop: SIZES.font5,
  },
});
