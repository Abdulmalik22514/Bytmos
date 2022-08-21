import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import icons from '../constants/icons';
import {SIZES, COLORS, FONTS} from '../constants/theme';

export const TRIBE_FRIENDS = [
  {
    icon: icons.Cynclair,
    tribe_name: 'Clair Cynclair',
    business_name: 'Clair’s Makeup Ltd',
  },
  {
    icon: icons.DrawerPix,
    tribe_name: 'Ted John',
    business_name: 'Ted Winks',
  },
  {
    icon: icons.Cynclair,
    tribe_name: 'John Doe',
    business_name: 'Jonnys’ Ltd',
  },
  {
    icon: icons.Cynclair,
    tribe_name: 'Clair Cynclair',
    business_name: 'Clair’s Makeup Ltd',
  },
  {
    icon: icons.Cynclair,
    tribe_name: 'Clair Cynclair',
    business_name: 'Clair’s Makeup Ltd',
  },
  {
    icon: icons.Cynclair,
    tribe_name: 'Clair Cynclair',
    business_name: 'Clair’s Makeup Ltd',
  },
  {
    icon: icons.DrawerPix,
    tribe_name: 'Ted John',
    business_name: 'Ted Winks',
  },
  {
    icon: icons.Cynclair,
    tribe_name: 'Clair Cynclair',
    business_name: 'Clair’s Makeup Ltd',
  },
];

const TribalsComponent = ({
  icon,
  tribe_name,
  business_name,
  tribing,
  onPress,
}) => {
  const [tribe, setTribe] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image source={icon} style={styles.userImage} />
        <View style={{width: SIZES.font1 * 5}}>
          <Text style={FONTS.h9}>{tribe_name}</Text>
          <Text style={[FONTS.h9, {color: COLORS.input}]}>{business_name}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setTribe(!tribe)}
        style={[styles.tribingButton, tribe && styles.tribing]}>
        <Text style={[styles.tribeText, tribe && styles.tribingText]}>
          {tribe ? 'Tribing' : 'Tribe'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TribalsComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.font5,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  userImage: {
    width: SIZES.font1 * 2,
    height: SIZES.font1 * 2,
    marginRight: SIZES.font10,
  },
  tribingButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.font1 * 3.5,
    height: SIZES.font1 * 1.3,
    borderColor: COLORS.blue,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  tribing: {
    backgroundColor: COLORS.blue,
  },
  tribingText: {
    color: COLORS.white,
  },
  tribeText: {
    ...FONTS.h8,
    color: COLORS.blue,
  },
});
