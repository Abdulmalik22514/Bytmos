import React from 'react';
import {
  HelpIcon,
  HomeIcon,
  InviteIcon,
  LogoutIcon,
  PencilIcon,
  SettingsIcon,
} from '../assets/svgs/svg';
import {
  HELP,
  INVITE_FRIENDS,
  LEAVE_FEEDBACK,
  SETTINGS,
  LOGOUT as LOGOUTSCREEN,
} from '../constants/screens';

export const DrawerItems = [
  {
    label: 'Home',
    icon: () => <HomeIcon />,
    screenName: 'DrawerHome',
  },
  {
    label: 'Leave a Feedback',
    icon: () => <PencilIcon />,
    screenName: LEAVE_FEEDBACK,
  },
  {
    label: 'Invite friends',
    icon: () => <InviteIcon />,
    screenName: INVITE_FRIENDS,
  },
  {
    label: 'Settings',
    icon: () => <SettingsIcon />,
    screenName: SETTINGS,
  },
  {
    label: 'Help',
    icon: () => <HelpIcon />,
    screenName: HELP,
  },
  {
    label: 'Logout',
    icon: () => <LogoutIcon />,
    screenName: LOGOUTSCREEN,
  },
];
