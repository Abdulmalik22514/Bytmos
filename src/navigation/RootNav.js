import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import NotchResponsive from '../components/NotchResponsive';
import VerifyOtp from '../screens/VerifyOtp/VerifyOtp';
import Login from '../screens/Login/Login';
import Onboarding from '../screens/Onboarding/Onboarding';
import TermsAndPrivacy from '../screens/TermsPrivacy/TermsPrivacy';
import SignUp from '../screens/SignUp/SignUp';
import BottomTabs from './TabNav';
import DrawerNav from './DrawerNav';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <NotchResponsive />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TermsPrivacy" component={TermsAndPrivacy} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
        <Stack.Screen name="BottomTab" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
