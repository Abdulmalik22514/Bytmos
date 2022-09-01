import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PackageScreen from '../screens/Packages/PackageScreen';
import MyServices from '../screens/MyServices/MyServices';
import ServiceOrders from '../screens/ServiceOrders/ServiceOrders';
import ManageOrders from '../screens/ManageOrders/ManageOrders';
import RecentWorks from '../screens/RecentWorks/RecentWorks';
import {
  ACCOUNT_SCREEN,
  HOME_SCREEN,
  MANAGE_ORDERS_SCREEN,
  PACKAGE_SCREEN,
  RECENT_WORKS_SCREEN,
  SERVICE_ORDERS_SCREEN,
  SERVICE_SCREEN,
  COMMENTS_SCREEN,
  NEWPOST_SCREEN,
  SHARE_POST_SCREEN,
  TRIBALS_SCREEN,
  TRIBER_PROFILE,
  LIKES_SCREEN,
  POSTCOMMENT_SCREEN,
  SEND_SCREEN,
} from '../constants/screens';
import AccountScreen from '../screens/Account/AccountScreen';
import BottomTabs from './TabNav';
import NewPost from '../screens/NewPost/NewPost';
import Tribals from '../screens/Tribals/Tribals';
import TriberProfile from '../screens/TriberProfile/TriberProfile';
import CommentScreen from '../screens/Comments/CommentScreen';
import SharePost from '../screens/SharePost/SharePost';
import Likes from '../screens/Likes/Likes';
import PostComment from '../screens/PostComment/PostComment';
import Send from '../screens/Send/Send';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HOME_SCREEN} component={BottomTabs} />
      <Stack.Screen name={ACCOUNT_SCREEN} component={AccountScreen} />
      <Stack.Screen name={PACKAGE_SCREEN} component={PackageScreen} />
      <Stack.Screen name={SERVICE_SCREEN} component={MyServices} />
      <Stack.Screen name={SERVICE_ORDERS_SCREEN} component={ServiceOrders} />
      <Stack.Screen name={MANAGE_ORDERS_SCREEN} component={ManageOrders} />
      <Stack.Screen name={RECENT_WORKS_SCREEN} component={RecentWorks} />
      <Stack.Screen name={NEWPOST_SCREEN} component={NewPost} />
      <Stack.Screen name={TRIBALS_SCREEN} component={Tribals} />
      <Stack.Screen name={TRIBER_PROFILE} component={TriberProfile} />
      <Stack.Screen name={COMMENTS_SCREEN} component={CommentScreen} />
      <Stack.Screen name={SHARE_POST_SCREEN} component={SharePost} />
      <Stack.Screen name={LIKES_SCREEN} component={Likes} />
      <Stack.Screen name={POSTCOMMENT_SCREEN} component={PostComment} />
      <Stack.Screen name={SEND_SCREEN} component={Send} />
    </Stack.Navigator>
  );
};
