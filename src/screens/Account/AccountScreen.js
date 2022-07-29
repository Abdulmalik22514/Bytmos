import {View, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import BusinessAccount from './BusinessAccount';
import PersonalAccount from './PersonalAccount';
import Container from '../../components/Container';

const AccountScreen = ({route}) => {
  const {accountType} = route.params;
  return (
    <Container style={styles.container}>
      {accountType === 'Business' ? (
        <BusinessAccount screenName={`${accountType} Account`} />
      ) : (
        <PersonalAccount screenName={`${accountType} Account`} />
      )}
    </Container>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
