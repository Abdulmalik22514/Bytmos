import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import TabComponent from '../components/TabComponent';
import icons from '../constants/icons';
import {COLORS, SIZES} from '../constants/theme';
import Inbox from '../screens/Inbox/Inbox';
import MyWallet from '../screens/MyWallet/MyWallet';
import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home/Home';
import {TribeNavigator} from './TribeNavigator';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        lazy: false,
        tabBarStyle: {
          height:
            Platform.OS === 'android' ? SIZES.font5 * 2.8 : SIZES.font5 * 4,
          borderTopColor: COLORS.input,
          paddingTop: SIZES.font10,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent label={'Home'} focused={focused} icon={icons.Home} />
          ),
        }}
      />
      <Tab.Screen
        name="Tribe"
        component={TribeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent
              label={'Tribe'}
              focused={focused}
              icon={icons.Tribe}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'Inbox'}
        component={Inbox}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent
              label={'Inbox'}
              focused={focused}
              icon={icons.Message}
            />
          ),
          tabBarBadge: 5,
          tabBarBadgeStyle: {
            backgroundColor: '#C63636',
          },
        }}
      />
      <Tab.Screen
        name={'MyWallet'}
        component={MyWallet}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent
              label={'Wallet'}
              focused={focused}
              icon={icons.Wallet}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent
              label={'Profile'}
              focused={focused}
              icon={icons.Profile}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
