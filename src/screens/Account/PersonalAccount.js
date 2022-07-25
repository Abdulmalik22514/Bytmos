import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import NotchResponsive from '../../components/NotchResponsive';
import {CameraIcon} from '../../assets/svgs/svg';
import icons from '../../constants/icons';
import InputField from '../../components/InputField';
import Picker from '../../components/Picker';

const PersonalAccount = ({screenName}) => {
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const {goBack} = useNavigation();

  return (
    <View>
      <NotchResponsive />
      <Header
        screenName={screenName}
        isNotHome
        onPress={() => goBack()}
        isAccount
      />
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
      <InputField label="First Name*" />
      <InputField label="Last Name*" />
      <InputField label="Email*" />
      <InputField label="Name of Business*" />
      <InputField label="Phone Number*" />
      <InputField label="Country/Region*" />
      <InputField label="City/State*" />
      <InputField label="Location in this Cty/State*" />

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
      <Text style={styles.socialMediaText}>
        Add links to social media pages
      </Text>
      <InputField label="Facebook" />
      <InputField label="Instagram" />
    </View>
  );
};

export default PersonalAccount;

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
