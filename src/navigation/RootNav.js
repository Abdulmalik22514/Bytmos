import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VerifyOtp from '../screens/VerifyOtp/VerifyOtp';
import Login from '../screens/Login/Login';
import Onboarding from '../screens/Onboarding/Onboarding';
import TermsAndPrivacy from '../screens/TermsPrivacy/TermsPrivacy';
import SignUp from '../screens/SignUp/SignUp';
import {useFlusStores} from 'react-flus';
import {
  ACCOUNT_SCREEN,
  ACCOUNT_TYPE,
  BOTTOMTAB_SCREEN,
  LOGIN_SCREEN,
  ONBOARD_SCREEN,
  SIGNUP_SCREEN,
  TERMS_AND_POLICY_SCREEN,
  VERIFY_OTP_SCREEN,
} from '../constants/screens';
import DrawerNav from './DrawerNav';
import AccountScreen from '../screens/Account/AccountScreen';
import AccountType from '../screens/AccountType/AccountType';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const {auth} = useFlusStores();

  // console.log('====================================')
  // console.log(auth?.user)
  // console.log('====================================')

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!auth?.isActive ? (
          <>
            {/* None-Auth protected screens should be stacked here */}

            {/* Only show screen if user has not been onboarded yet */}
            {!auth?.app?.hasOnboarded && (
              <Stack.Screen name={ONBOARD_SCREEN} component={Onboarding} />
            )}

            {/* Only show screen if user has not accepted terms yet */}
            {!auth?.app?.termsAccepted && (
              <Stack.Screen
                name={TERMS_AND_POLICY_SCREEN}
                component={TermsAndPrivacy}
              />
            )}

            <Stack.Screen name={LOGIN_SCREEN} component={Login} />
            <Stack.Screen name={SIGNUP_SCREEN} component={SignUp} />
            <Stack.Screen name={VERIFY_OTP_SCREEN} component={VerifyOtp} />

            <Stack.Screen name={ACCOUNT_SCREEN} component={AccountScreen} />
            <Stack.Screen name={ACCOUNT_TYPE} component={AccountType} />
          </>
        ) : (
          <>
            {/* Auth protected screens should be stacked here  */}
            <Stack.Screen name={BOTTOMTAB_SCREEN} component={DrawerNav} />
            <Stack.Screen name={ACCOUNT_TYPE} component={AccountType} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
