import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AccountIcon,
  ManageIcon,
  OrdersIcon,
  PackagesIcon,
  ServicesIcon,
  WorksIcon,
} from '../assets/svgs/svg';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {
  ACCOUNT_SCREEN,
  MANAGE_ORDERS_SCREEN,
  PACKAGE_SCREEN,
  RECENT_WORKS_SCREEN,
  SERVICE_ORDERS_SCREEN,
  SERVICE_SCREEN,
} from '../constants/screens';

export const CardItems = [
  {
    icon: <AccountIcon />,
    label: 'Account',
    screenName: ACCOUNT_SCREEN,
  },
  {
    icon: <PackagesIcon />,
    label: 'Packages',
    screenName: PACKAGE_SCREEN,
  },
  {
    icon: <ServicesIcon />,
    label: 'My Services',
    screenName: SERVICE_SCREEN,
  },
  {
    icon: <OrdersIcon />,
    label: 'Service Orders',
    screenName: SERVICE_ORDERS_SCREEN,
  },
  {
    icon: <ManageIcon />,
    label: 'Manage Orders',
    screenName: MANAGE_ORDERS_SCREEN,
  },
  {
    icon: <WorksIcon />,
    label: 'My Recent Works',
    screenName: RECENT_WORKS_SCREEN,
  },
];

const HomeCard = ({icon, label, onPress, isService}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon}
      <Text style={styles.label}>{label}</Text>
      <View>
        {isService ? (
          <View style={styles.serviceOrders}>
            <Text style={styles.serviceAmount}>3</Text>
          </View>
        ) : null}
      </View>
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
      height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
    borderRadius: 20,
    padding: SIZES.font10,
    marginBottom: SIZES.font4,
  },
  label: {
    ...FONTS.body3,
    marginLeft: SIZES.font10,
    width: '60%',
    color: COLORS.card,
  },
  serviceOrders: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.font2,
    height: SIZES.font2,
    borderRadius: SIZES.font2 / 2,
    backgroundColor: COLORS.blue,
    marginLeft: -10,
  },
  serviceAmount: {
    ...FONTS.h10,
    color: COLORS.white,
  },
});
