import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import NotchResponsive from '../../components/NotchResponsive';
import {CameraIcon} from '../../assets/svgs/svg';
import icons from '../../constants/icons';
import InputField from '../../components/InputField';
import Picker from '../../components/Picker';

const BusinessAccount = ({screenName}) => {
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  return (
    <View>
      <NotchResponsive />
      <Header screenName={screenName} isNotHome isAccount />
      <View style={styles.profilePixContainer}>
        <Pressable style={styles.cameraBox}>
          <View style={{alignItems: 'flex-end'}}>
            <CameraIcon />
          </View>
        </Pressable>
      </View>
      <View>
        <Image
          source={icons.ProfilePix}
          resizeMode="contain"
          style={styles.profilepic}
        />
        <CameraIcon
          style={{
            left: 200,
            marginTop: 45,
            zIndex: 100,
          }}
        />
      </View>
      <InputField label="Registrar First Name*" />
      <InputField label="Registrar Last Name*" />
      <InputField label="Name of Company*" />
      <InputField label="Registrar Position*" />
      <View>
        <Picker
          placeHolder={'Choose Gender'}
          value={gender}
          data={['Male', 'Female']}
          onPressItem={setGender}
        />
      </View>
      <View>
        <Picker
          placeHolder={'Marital Status'}
          value={status}
          data={['Single', 'Married', 'Divorced']}
          onPressItem={setStatus}
        />
      </View>
      <InputField label="Email of Company*" />
      <InputField label="Phone Number*" />
      <InputField label="City/State*" />
      <InputField label="Company Location in this Cty/State*" />
      <Text style={styles.socialMediaText}>
        Add links to social media pages
      </Text>
      <InputField label="Facebook" />
      <InputField label="Instagram" />
    </View>
  );
};

export default BusinessAccount;

const styles = StyleSheet.create({
  profilePixContainer: {
    backgroundColor: COLORS.pictureBackground,
    width: '100%',
    height: SIZES.font1 * 3.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cameraBox: {
    padding: SIZES.font10 - 2,
  },
  profilepic: {
    width: SIZES.font1 * 4.5,
    height: SIZES.font1 * 4.5,
    alignSelf: 'center',
    marginTop: -60,
    position: 'absolute',
  },
  socialMediaText: {
    ...FONTS.body3,
    marginBottom: SIZES.font10,
    marginTop: SIZES.font1,
    fontWeight: '600',
  },
});
