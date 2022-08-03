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
import {useFlusDispatcher, useFlusStores} from 'react-flus';
import {UPDATE_USER, USER_LOGIN} from '../../flus/constants/auth.const';
import {useMutation} from 'react-query';
import {useAuthApis} from '../../services/api/Auth/auth.index';
import {UpdatePersonalAccount} from '../../services/api/Auth/auth.apis';

const PersonalAccount = ({screenName, from = 'inapp_process'}) => {
  const {user} = useFlusStores()?.auth;
  const dispatcher = useFlusDispatcher();

  const [gender, setGender] = useState(user?.gender);
  const [status, setStatus] = useState(user?.marital_status);
  const [imgeUri, setImageUri] = useState('');

  const {UpdatePersonalAccount, FetchPersonalAccount} = useAuthApis();

  const fetchAccountApi = useMutation(FetchPersonalAccount, {
    onSuccess: res => {
      if (res?.status && res?.data) {
        dispatcher({type: UPDATE_USER, payload: {data: {...res?.data}}});
      }
    },
  });

  /* update company account api */
  const updateCompanyAccountApi = useMutation(UpdatePersonalAccount, {
    onSuccess: res => {
      if (res?.status) {
        if (from === 'signup_process') {
          dispatcher({
            type: USER_LOGIN,
            payload: {
              user: null,
              access_token: null,
            },
          });
        } else {
          /* Fetch user account information after update profile to update the user 
					data object. */
          fetchAccountApi.mutateAsync();
        }
      }
    },
  });

  /* Handle user account update */
  const handleAccountUpdate = formData => {
    formData.gender = gender;
    formData.marital_status = status;
    updateCompanyAccountApi.mutateAsync(formData);
  };

  /* The api loading state. */
  const isLoading =
    updateCompanyAccountApi.isLoading || fetchAccountApi.isLoading;

  const bottomSheetRef = useRef(null);

  // console.log({imgeUri});

  const initialValues = {
    first_name: user?.first_name,
    last_name: user?.last_name,
    business_name: user?.business_name,
    country: user?.country,
    state: user?.state,
    email: user?.email,
    phone_number: user?.phone_number,
    location: user?.location,
    longitude: '2312311',
    latitude: '1131431',
    gender: user?.gender,
    marital_status: user?.marital_status,
    facebook_link: user?.facebook_link,
    instagram_link: user?.instagram_link,
  };
  const handleClosePress = () => bottomSheetRef.current.close();

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={handleAccountUpdate}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
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
                  source={imgeUri ? {uri: imgeUri} : {uri: user?.profile_photo}}
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

              <InputField
                label="First Name*"
                onChangeText={handleChange('first_name')}
                value={values?.first_name}
              />
              <InputField
                label="Last Name*"
                onChangeText={handleChange('last_name')}
                value={values?.last_name}
              />
              <InputField
                label="Email*"
                onChangeText={handleChange('email')}
                value={values?.email}
              />
              <InputField
                label="Name of Business*"
                onChangeText={handleChange('business_name')}
                value={values?.business_name}
              />
              <InputField
                label="Phone Number*"
                onChangeText={handleChange('phone_number')}
                value={values?.phone_number}
              />
              <InputField
                label="Country *"
                onChangeText={handleChange('country')}
                value={values?.country}
              />
              <InputField
                label="City/State*"
                onChangeText={handleChange('state')}
                value={values?.state}
              />
              <InputField
                label="Location in this Cty/State*"
                onChangeText={handleChange('location')}
                value={values?.location}
              />
              <View>
                <Picker
                  placeHolder={
                    values?.gender ? values?.gender : 'Choose Gender'
                  }
                  value={gender}
                  data={['Male', 'Female']}
                  onPressItem={setGender}
                />
              </View>
              <View>
                <Picker
                  placeHolder={
                    values?.marital_status
                      ? values?.marital_status
                      : 'Marital Status'
                  }
                  value={status}
                  data={['Single', 'Married', 'Divorced']}
                  onPressItem={setStatus}
                />
              </View>
              {/* <InputField label="Email of Company*" /> */}
              <Text style={styles.socialMediaText}>
                Add links to social media pages
              </Text>
              <InputField
                label="Facebook"
                onChangeText={handleChange('facebook_link')}
                value={values?.facebook_link}
              />
              <InputField
                label="Instagram"
                onChangeText={handleChange('instagram_link')}
                value={values?.instagram_link}
              />

              <CustomButton
                title="Save"
                style={styles.saveButton}
                onPress={handleSubmit}
                isLoading={isLoading}
                disabled={isLoading}
              />
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
