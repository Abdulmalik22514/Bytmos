import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feedback from '../screens/Feedback/Feedback';
import Settings from '../screens/Settings/Settings';
import InviteFriends from '../screens/InviteFriends/InviteFriends';
import Help from '../screens/Help/Help';
import CustomDrawer from '../components/CustomDrawer';
import {HomeNavigator} from './HomeNavigator';
import {
  HELP,
  INVITE_FRIENDS,
  LEAVE_FEEDBACK,
  SETTINGS,
} from '../constants/screens';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: '79%',
        },
      }}>
      <Drawer.Screen name="DrawerHome" component={HomeNavigator} />
      <Drawer.Screen name={LEAVE_FEEDBACK} component={Feedback} />
      <Drawer.Screen name={INVITE_FRIENDS} component={InviteFriends} />
      <Drawer.Screen name={SETTINGS} component={Settings} />
      <Drawer.Screen name={HELP} component={Help} />
    </Drawer.Navigator>
  );
}
