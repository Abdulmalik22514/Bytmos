import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BusinessAccount from './BusinessAccount';
import PersonalAccount from './PersonalAccount';

const AccountScreen = ({route}) => {
  const {accountType} = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <KeyboardAwareScrollView>
        {accountType === 'Business' ? (
          <BusinessAccount screenName={`${accountType} Account`} />
        ) : (
          <PersonalAccount screenName={`${accountType} Account`} />
        )}
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.font8,
  },
});
