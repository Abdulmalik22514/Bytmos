import {StyleSheet} from 'react-native';
import React from 'react';
import BusinessAccount from './BusinessAccount';
import PersonalAccount from './PersonalAccount';

const AccountScreen = ({route}) => {
  const {accountType, from} = route.params;
  return (
    <>
      {accountType === 'Business' ? (
        <BusinessAccount screenName={`${accountType} Account`} from={from} />
      ) : (
        <PersonalAccount screenName={`${accountType} Account`} from={from} />
      )}
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
