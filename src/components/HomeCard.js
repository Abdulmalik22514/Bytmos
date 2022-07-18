import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Account,
  AccountIcon,
  Manage,
  ManageIcon,
  Orders,
  OrdersIcon,
  Packages,
  PackagesIcon,
  Services,
  ServicesIcon,
  Works,
  WorksIcon,
} from '../assets/svgs/svg';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';

export const CardItems = [
  {
    icon: <AccountIcon />,
    label: 'Account',

    // onPress: () => navigation.navigate('AccountScreen'),
  },
  {
    icon: <PackagesIcon />,
    label: 'Packages',
    // onPress: () => navigation.navigate('AccountScreen'),
  },
  {
    icon: <ServicesIcon />,
    label: 'My Services',
    // onPress: () => navigation.navigate('AccountScreen'),
  },
  {
    icon: <OrdersIcon />,
    label: 'Service Orders',
    // onPress: () => navigation.navigate('AccountScreen'),
  },
  {
    icon: <ManageIcon />,
    label: 'Manage Orders',
    // onPress: () => navigation.navigate('AccountScreen'),
  },
  {
    icon: <WorksIcon />,
    label: 'My Recent Works',
    screenName: 'RecentWorks',
    // onPress: () => navigation.navigate('AccountScreen'),
  },
];

const HomeCard = ({icon, label, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: '48%',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderRadius: 20,
    padding: SIZES.font8,
    marginBottom: SIZES.font2,
  },
  label: {
    ...FONTS.body2,
    marginLeft: SIZES.font8,
    width: '80%',
    paddingRight: SIZES.font10,
    color: COLORS.card,
  },
});
