import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NEWPOST_SCREEN,
  TRIBALS_SCREEN,
  TRIBER_PROFILE,
  TRIBE_SCREEN,
} from '../constants/screens';
import Tribe from '../screens/Tribe/Tribe';
import NewPost from '../screens/NewPost/NewPost';
import Tribals from '../screens/Tribals/Tribals';
import TriberProfile from '../screens/TriberProfile/TriberProfile';

const Stack = createNativeStackNavigator();

export const TribeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TRIBE_SCREEN} component={Tribe} />
      <Stack.Screen name={NEWPOST_SCREEN} component={NewPost} />
      <Stack.Screen name={TRIBALS_SCREEN} component={Tribals} />
      <Stack.Screen name={TRIBER_PROFILE} component={TriberProfile} />
    </Stack.Navigator>
  );
};
