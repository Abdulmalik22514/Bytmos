import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{paddingHorizontal: SIZES.font10}}>
          <View style={styles.drawerHeader}>
            <Image
              source={icons.DrawerPix}
              style={styles.drawerIcon}
              resizeMode="contain"
            />
            <View>
              <Text style={{...FONTS.h10}}>John Doe</Text>
              <Text style={{...FONTS.body4}}>BP ID: FAFDSG35SF</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>

        <View style={styles.drawerList}>
          <DrawerItemList {...props} />
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
    width: '100%',
    borderWidth: 0.6,
    borderColor: COLORS.line,
  },
  drawerList: {
    flex: 1,
    paddingTop: SIZES.font3,
  },
});
