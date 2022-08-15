import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NEWPOST_SCREEN, TRIBE_SCREEN} from '../constants/screens';
import Tribe from '../screens/Tribe/Tribe';
import NewPost from '../screens/NewPost/NewPost';

const Stack = createNativeStackNavigator();

export const TribeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TRIBE_SCREEN} component={Tribe} />
      <Stack.Screen name={NEWPOST_SCREEN} component={NewPost} />
    </Stack.Navigator>
  );
};
