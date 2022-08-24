import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackIcon, BellIcon, MenuIcon, SearchIcon} from '../assets/svgs/svg';
import icons from '../constants/icons';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const Header = ({style, isNotHome, screenName, isAccount}) => {
  const {goBack, dispatch} = useNavigation();

  return (
    <View>
      <View style={[styles.container, isAccount && styles.isAccount, style]}>
        <View style={styles.leftView}>
          {isNotHome ? (
            <>
              <Pressable onPress={() => goBack()}>
                <BackIcon width={24} height={20} />
              </Pressable>
              <Text style={styles.screenName}>{screenName}</Text>
            </>
          ) : (
            <>
              <Pressable onPress={() => dispatch(DrawerActions.toggleDrawer())}>
                <MenuIcon width={24} height={20} />
              </Pressable>
              <Image
                source={icons.SplashIcon}
                resizeMode="contain"
                style={styles.image}
              />
            </>
          )}
        </View>
        <View style={styles.leftView}>
          {isNotHome ? (
            <View />
          ) : (
            <>
              <Pressable>
                <SearchIcon style={styles.searchIcon} width={20} height={25} />
              </Pressable>
              <Pressable>
                <BellIcon width={24} height={28} />
              </Pressable>
            </>
          )}
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font10,
    marginBottom: SIZES.font10,
  },
  image: {
    width: SIZES.font1 * 6.5,
    height: SIZES.font1 * 1.5,
    marginLeft: SIZES.font10 - 5,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: SIZES.font9,
  },
  screenName: {
    ...FONTS.h10,
    marginLeft: SIZES.font9,
  },
  separator: {
    width: '100%',
    borderWidth: 0.6,
    borderColor: COLORS.separator,
  },
  isAccount: {
    paddingHorizontal: null,
  },
});
