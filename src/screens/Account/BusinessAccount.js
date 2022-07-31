import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {CameraIcon} from '../../assets/svgs/svg';
import icons from '../../constants/icons';
import InputField from '../../components/InputField';
import Picker from '../../components/Picker';
import ImageBottomSheet from '../../components/CameraBottomSheet';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/CustomButton';

const PersonalAccount = ({screenName}) => {
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [imgeUri, setImageUri] = useState('');

  const bottomSheetRef = useRef(null);

  // console.log({imgeUri});

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    nameOfBusiness: '',
    phoneNumber: '',
    country: '',
    city: '',
    location: '',
    phoneNumber: '',
    faceBook: '',
    instagram: '',
  };

  const handleClosePress = () => bottomSheetRef.current.close();

  return (
    <Formik initialValues={initialValues}>
      {({}) => (
        <>
          <Header screenName={screenName} isNotHome />
          <KeyboardAwareScrollView
            style={{marginVertical: SIZES.font1}}
            showsVerticalScrollIndicator={false}>
            <View style={{paddingHorizontal: SIZES.font8}}>
              <View style={styles.profilePixContainer}>
                <Pressable
                  style={styles.cameraBox}
                  onPress={() => {
                    bottomSheetRef?.current?.snapToIndex(1);
                  }}>
                  <View style={{alignItems: 'flex-end'}}>
                    <CameraIcon />
                  </View>
                </Pressable>
              </View>
              <View>
                <Image
                  source={imgeUri ? {uri: imgeUri} : icons.NewProfileImage}
                  resizeMode="contain"
                  style={styles.profilepic}
                />

                <Pressable
                  onPress={() => {
                    bottomSheetRef?.current?.snapToIndex(1);
                  }}>
                  <CameraIcon
                    style={{
                      left: 200,
                      marginTop: 45,
                      zIndex: 100,
                    }}
                  />
                </Pressable>
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
              <InputField label="Phone Number" />
              <InputField label="Country/Region*" />
              <InputField label="City/State*" />
              <InputField label="Company Location in this City/State*" />
              <Text style={styles.socialMediaText}>
                Add links to social media pages
              </Text>
              <InputField label="Facebook" />
              <InputField label="Instagram" />
              <CustomButton title="Save" style={styles.saveButton} />
            </View>
          </KeyboardAwareScrollView>
          <ImageBottomSheet
            ref={bottomSheetRef}
            handleClosePress={handleClosePress}
            onSelectImage={setImageUri}
          />
        </>
      )}
    </Formik>
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
    borderRadius: 100,
  },
  socialMediaText: {
    ...FONTS.body3,
    marginBottom: SIZES.font10,
    marginTop: SIZES.font1,
    fontWeight: '600',
  },
  saveButton: {
    marginTop: SIZES.font1 * 2,
    width: '90%',
    alignSelf: 'center',
    marginBottom: SIZES.font1 * 2,
  },
});
