import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const AcceptanceItems = [
  {
    title: 'I accept the Terms of Service',
  },
  {
    title: 'I content to the Privacy Policy',
  },
];

const Acceptance = ({title, isAccepted, onPress}) => {
  return (
    <Pressable style={styles.acceptanceBox} onPress={onPress}>
      <View style={styles.acceptedView}>
        {isAccepted ? <View style={styles.accepted} /> : null}
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Acceptance;

const styles = StyleSheet.create({
  acceptanceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: SIZES.font6,
    paddingHorizontal: SIZES.font10,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 15,
    height: SIZES.font1 * 1.9,
  },
  accepted: {
    backgroundColor: COLORS.blue,
    width: SIZES.font10,
    height: SIZES.font10,
    borderRadius: 100,
  },
  acceptedView: {
    width: SIZES.font4,
    height: SIZES.font4,
    borderRadius: 100,
    borderColor: COLORS.blue,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.font6,
  },
  title: {
    ...FONTS.body3,
  },
});
