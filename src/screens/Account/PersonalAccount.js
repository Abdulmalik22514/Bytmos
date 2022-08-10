import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
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
import CameraComponent from '../../components/CameraComponent';

const PersonalAccount = ({screenName, from = 'inapp_process'}) => {
  const {user} = useFlusStores()?.auth;
  const dispatcher = useFlusDispatcher();

  const [imgeUri, setImageUri] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [type, setType] = useState('');

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

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleAccountUpdate}>
        {({handleChange, handleSubmit, values, setFieldValue}) => (
          <>
            <Header screenName={screenName} isNotHome />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <View style={{paddingHorizontal: SIZES.font8}}>
                <CameraComponent
                  coverPhotoValue={
                    values.coverPhoto
                      ? {uri: values.coverPhoto}
                      : {uri: user?.profile_photo}
                  }
                  setCoverPhoto={() => onOpenModal('coverPhoto')}
                  profilePhotoValue={
                    imgeUri ? {uri: imgeUri} : {uri: user?.profile_photo}
                  }
                  setProfilePhoto={() => onOpenModal('displayPicture')}
                />

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
                  withFilter
                  withAlphaFilter
                  placeholder={values?.country || 'Select your country'}
                  onSelect={data => setFieldValue('country', data?.name)}
                  containerButtonStyle={styles.countryContainer}
                />
                {getInputValues(['state', 'location']).map(({label, key}) => (
                  <InputField
                    key={key}
                    label={label}
                    onChangeText={handleChange(key)}
                    value={values[key]}
                  />
                ))}
                <View style={{marginBottom: SIZES.font10}}>
                  <DatePicker
                    onSelectDate={setDateValue}
                    dateValue={dateValue}
                  />
                </View>
                <Picker
                  placeHolder={'Choose Gender'}
                  value={values?.gender}
                  data={['Male', 'Female']}
                  onPressItem={data => setFieldValue('gender', data)}
                />
                <Picker
                  placeHolder={
                    values?.marital_status
                      ? values?.marital_status
                      : 'Marital Status'
                  }
                  value={values?.marital_status}
                  data={['Single', 'Married', 'Divorced']}
                  onPressItem={data => setFieldValue('marital_status', data)}
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
    </>
  );
};

export default PersonalAccount;

const styles = StyleSheet.create({
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
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.font8,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 15,
    marginBottom: SIZES.font1,
  },
});
