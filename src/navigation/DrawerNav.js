import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import Feedback from '../screens/Feedback/Feedback';
import Settings from '../screens/Settings/Settings';
import InviteFriends from '../screens/InviteFriends/InviteFriends';
import Help from '../screens/Help/Help';
import Logout from '../screens/Logout/Logout';
import {
  HelpIcon,
  HomeIcon,
  InviteIcon,
  LogoutIcon,
  PencilIcon,
  SettingsIcon,
} from '../assets/svgs/svg';
import CustomDrawer from '../components/CustomDrawer';
import {COLORS, FONTS} from '../constants/theme';
import {HomeNavigator} from './HomeNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      //   initialRouteName={undefined}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          ...FONTS.body3,
          color: COLORS.black,
          marginLeft: -10,
        },
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{
          drawerIcon: () => <HomeIcon />,
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={Feedback}
        options={{
          drawerIcon: () => <PencilIcon />,
          drawerLabel: 'Leave a Feedback',
        }}
      />
      <Drawer.Screen
        name="InviteFriends"
        component={InviteFriends}
        options={{
          drawerIcon: () => <InviteIcon />,
          drawerLabel: 'Invite friends',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: () => <SettingsIcon />,
          drawerLabel: 'Settings',
        }}
      />

      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerIcon: () => <HelpIcon />,
          drawerLabel: 'Help',
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: () => <LogoutIcon />,
          drawerLabel: 'Logout',
        }}
      />
    </Drawer.Navigator>
  );
}
