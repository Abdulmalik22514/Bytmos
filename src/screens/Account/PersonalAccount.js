import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  PixelRatio,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {CameraIcon, DropDown} from '../../assets/svgs/svg';
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
import {DatePicker} from '../../components/DatePicker';
import {getInputValues, UPPER_KEYS} from '../../utils/getInputValues';
import CountryPicker from 'react-native-country-picker-modal';
import ImageLoad from 'react-native-image-placeholder';
import icons from '../../constants/icons';

const PersonalAccount = ({screenName, from = 'inapp_process'}) => {
  const {user} = useFlusStores()?.auth;
  const dispatcher = useFlusDispatcher();

  const [status, setStatus] = useState(user?.marital_status);
  const [imgeUri, setImageUri] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [type, setType] = useState('');
  const [country, setCountry] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const {UpdatePersonalAccount, FetchPersonalAccount} = useAuthApis();

  const fetchAccountApi = useMutation(FetchPersonalAccount, {
    onSuccess: res => {
      if (res?.status && res?.data) {
        dispatcher({type: UPDATE_USER, payload: {data: {...res?.data}}});
      }
    },
  });

  const onOpenModal = type => {
    setType(type);
    bottomSheetRef?.current?.snapToIndex(1);
  };

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

  const switchVisible = () => setVisible(!visible);

  const onSelect = country => {
    setCountry(country);
  };

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
    coverPhoto: '',
  };
  const handleClosePress = () => bottomSheetRef.current.close();
  console.log({showPicker});
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={handleAccountUpdate}>
      {({handleChange, handleSubmit, values, setFieldValue}) => (
        <>
          <Header screenName={screenName} isNotHome />
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingHorizontal: SIZES.font8}}>
              <View style={styles.profilePixContainer}>
                <ImageBackground
                  style={styles.imgBackground}
                  source={
                    values.coverPhoto
                      ? {uri: values.coverPhoto}
                      : {uri: user?.profile_photo}
                  }>
                  <Pressable
                    style={styles.cameraBox}
                    onPress={() => {
                      onOpenModal('coverPhoto');
                    }}>
                    <View style={{alignItems: 'flex-end'}}>
                      <CameraIcon />
                    </View>
                  </Pressable>
                </ImageBackground>
              </View>

              <View>
                <Image
                  source={imgeUri ? {uri: imgeUri} : {uri: user?.profile_photo}}
                  style={styles.profilepic}
                />

                <Pressable
                  onPress={() => {
                    onOpenModal('displayPicture');
                  }}>
                  <CameraIcon
                    style={{
                      left: 200,
                      marginTop: 35,
                      zIndex: 100,
                    }}
                  />
                </Pressable>
              </View>

              {getInputValues(UPPER_KEYS).map(({label, key}) => (
                <InputField
                  key={key}
                  label={label}
                  onChangeText={handleChange(key)}
                  value={values[key]}
                />
              ))}
              <Text style={[FONTS.body4, {marginBottom: SIZES.font10}]}>
                Country/Region*
              </Text>
              <CountryPicker
                visible={showPicker}
                // onOpen={() => setShowPicker(true)}
                withFilter
                withAlphaFilter
                placeholder="Select your country"
                // value="kjkk"
                onSelect={onSelect}
                containerButtonStyle={styles.countryContainer}
              />
              <InputField
                label="Location in this Cty/State*"
                onChangeText={handleChange('location')}
                value={values?.location}
              />
              <View style={{marginVertical: SIZES.font10}}>
                <DatePicker onSelectDate={setDateValue} dateValue={dateValue} />
              </View>
              <Picker
                placeHolder={'Choose Gender'}
                value={values.gender}
                data={['Male', 'Female']}
                onPressItem={data => setFieldValue('gender', data)}
              />
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
              {/* <InputField label="Email of Company*" /> */}
              <Text style={styles.socialMediaText}>
                Add links to social media pages
              </Text>

              {getInputValues(['facebook_link', 'instagram_link']).map(
                ({label, key}) => (
                  <InputField
                    key={key}
                    label={label}
                    onChangeText={handleChange(key)}
                    value={values[key]}
                  />
                ),
              )}

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
            type={type}
            onCoverPhotoSelect={data => setFieldValue('coverPhoto', data)}
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
    height: SIZES.font1 * 5.5,
    marginTop: SIZES.font5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imgBackground: {
    overflow: 'hidden',
    height: '100%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  cameraBox: {
    padding: SIZES.font10 - 2,
  },
  profilepic: {
    width: SIZES.font1 * 4.5,
    height: SIZES.font1 * 4.5,
    alignSelf: 'center',
    marginTop: -70,
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
  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.font8,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 15,
    marginVertical: SIZES.font8,
  },
  dropDown: {
    backgroundColor: COLORS.white,
    width: '100%',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 1,
    padding: SIZES.font8,
  },
  dropDownItem: {
    paddingVertical: SIZES.font10,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.font8,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 15,
  },
  dropDown: {
    backgroundColor: COLORS.white,
    width: '100%',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 1,
    padding: SIZES.font8,
  },
  dropDownItem: {
    paddingVertical: SIZES.font10,
  },
});
