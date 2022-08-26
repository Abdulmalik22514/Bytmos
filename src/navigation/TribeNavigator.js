import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  COMMENTS_SCREEN,
  NEWPOST_SCREEN,
  SHARE_POST_SCREEN,
  TRIBALS_SCREEN,
  TRIBER_PROFILE,
  TRIBE_SCREEN,
} from '../constants/screens';
import Tribe from '../screens/Tribe/Tribe';
import NewPost from '../screens/NewPost/NewPost';
import Tribals from '../screens/Tribals/Tribals';
import TriberProfile from '../screens/TriberProfile/TriberProfile';
import CommentScreen from '../screens/Comments/CommentScreen';
import SharePost from '../screens/SharePost/SharePost';

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
      <Stack.Screen name={COMMENTS_SCREEN} component={CommentScreen} />
      <Stack.Screen name={SHARE_POST_SCREEN} component={SharePost} />
    </Stack.Navigator>
  );
};
