import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BellIcon, MenuIcon, SearchIcon} from '../assets/svgs/svg';
import icons from '../constants/icons';
import {SIZES} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';

const Header = ({onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Pressable onPress={onPress}>
          <MenuIcon width={24} height={20} />
        </Pressable>
        <Image
          source={icons.SplashIcon}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.leftView}>
        <Pressable>
          <SearchIcon style={styles.searchIcon} width={20} height={25} />
        </Pressable>
        <Pressable>
          <BellIcon width={24} height={28} />
        </Pressable>
      </View>
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
    marginVertical: SIZES.font10 - 5,
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
});
