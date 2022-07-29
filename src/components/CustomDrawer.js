import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {LOGOUT as LOGOUTSCREEN} from '../constants/screens';
import {useFlusDispatcher, useFlusStores} from 'react-flus';
import {LOGOUT} from '../flus/constants/auth.const';
import {DrawerItems} from '../utils/drawerContent';

const CustomDrawer = props => {
  const {navigation} = props;
  const [currentScreen, setCurrentScreen] = useState('DrawerHome');
  const dispatcher = useFlusDispatcher();
  const {auth} = useFlusStores();

  const onPressItem = screenName => {
    if (screenName == LOGOUTSCREEN) {
      Alert.alert('Logout!', 'Are you sure you want to logout?', [
        {text: 'Cancel'},
        {
          text: 'OK',
          onPress: () => {
            dispatcher({
              type: LOGOUT,
            });
          },
        },
      ]);
      return;
    }
    setCurrentScreen(screenName);
    navigation.toggleDrawer();
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Image
            source={{uri: auth?.user?.profile_photo}}
            style={styles.drawerIcon}
            resizeMode="contain"
          />
          <View>
            <Text style={FONTS.h10}>
              {auth?.user?.first_name} {auth?.user?.last_name}
            </Text>
            <Text style={FONTS.body4}>BP ID: {auth?.user?.ref_no}</Text>
          </View>
        </View>
        <View style={styles.separator} />

        <View style={styles.drawerList}>
          {DrawerItems.map((item, index) => {
            return (
              <DrawerItem
                key={index}
                label={({focused}) => (
                  <Text
                    style={[
                      styles.drawerLabel,
                      {color: focused ? 'white' : 'black'},
                    ]}>
                    {item.label}
                  </Text>
                )}
                icon={({focused}) => (
                  <item.icon color={focused ? 'white' : 'black'} />
                )}
                focused={currentScreen === item.screenName}
                activeBackgroundColor={COLORS.blue}
                onPress={() => onPressItem(item.screenName)}
                style={styles.drawerItem}
              />
            );
          })}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SIZES.font7,
    paddingHorizontal: SIZES.font10 - 7,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.font10,
  },
  drawerIcon: {
    width: SIZES.font1 * 2,
    height: SIZES.font1 * 2,
    borderRadius: 100,
    marginRight: SIZES.font10,
  },
  separator: {
    borderWidth: 0.6,
    borderColor: COLORS.line,
    width: '95%',
    alignSelf: 'center',
  },
  drawerList: {
    paddingTop: SIZES.font10,
  },
  drawerItem: {
    height: SIZES.font1 * 1.65,
    justifyContent: 'center',
    borderRadius: 5,
  },
  drawerLabel: {
    ...FONTS.h10,
    marginLeft: -12,
  },
});
