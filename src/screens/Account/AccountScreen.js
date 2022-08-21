import {StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import BusinessAccount from './BusinessAccount';
import PersonalAccount from './PersonalAccount';
import Container from '../../components/Container';

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
