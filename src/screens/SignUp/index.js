import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Image
        source={icons.BlueLogo}
        resizeMode={'contain'}
        style={styles.imageHeader}
      />
      <CustomInput placeholder={'Email'} />
      <CustomInput placeholder={'Firstname'} />
      <CustomInput placeholder={'Lastname'} />
      <CustomInput placeholder={'Phone Number'} />
      <CustomInput placeholder={'Password'} />
      <CustomInput placeholder={'Confirm Password'} />
      <View style={styles.bottomBox}>
        <CustomButton title={'Sign Up'} style={styles.button} />
        <View style={styles.separator} />

        <CustomButton title={'Login'} style={styles.button} />
      </View>
    </View>
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
