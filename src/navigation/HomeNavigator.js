import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account/AccountScreen';
import PackageScreen from '../screens/Packages/PackageScreen';
import MyServices from '../screens/MyServices/MyServices';
import ServiceOrders from '../screens/ServiceOrders/ServiceOrders';
import ManageOrders from '../screens/ManageOrders/ManageOrders';
import RecentWorks from '../screens/RecentWorks/RecentWorks';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AccountScreen" component={Home} />
      <Stack.Screen name="PackageScreen" component={PackageScreen} />
      <Stack.Screen name="MyServices" component={MyServices} />
      <Stack.Screen name="ServiceOrders" component={ServiceOrders} />
      <Stack.Screen name="ManageOrders" component={ManageOrders} />
      <Stack.Screen name="RecentWorks" component={RecentWorks} />
    </Stack.Navigator>
  );
};
