import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Onboarding from '../screens/Onboarding';
import {StatusBar} from 'react-native';
import {COLORS} from '../constants/theme';
import NotchResponsive from '../components/NotchResponsive';
import TermsAndPrivacy from '../screens/TermsPrivacy';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <StatusBar translucent={false} backgroundColor={COLORS.black} />
      <NotchResponsive />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TermsPrivacy" component={TermsAndPrivacy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
