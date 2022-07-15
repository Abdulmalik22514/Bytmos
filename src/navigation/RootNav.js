import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from "react-native";
import NotchResponsive from "../components/NotchResponsive";
import VerifyOtp from "../screens/VerifyOtp/VerifyOtp";
import Login from "../screens/Login/Login";
import Onboarding from "../screens/Onboarding/Onboarding";
import TermsAndPrivacy from "../screens/TermsPrivacy/TermsPrivacy";
import SignUp from "../screens/SignUp/SignUp";
import BottomTabs from "./TabNav";
import {useFlusStores} from "react-flus";
import {
  LOGIN_SCREEN,
  ONBOARD_SCREEN,
  SIGNUP_SCREEN,
  TERMS_AND_POLICY_SCREEN,
  VERIFY_OTP_SCREEN,
} from "../constants/screens";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const {auth} = useFlusStores();

  // console.log(auth)
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <NotchResponsive />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
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
          </>
        ) : (
          <>
            {/* Auth protected screens should be stacked here  */}
            <Stack.Screen name={VERIFY_OTP_SCREEN} component={BottomTabs} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
