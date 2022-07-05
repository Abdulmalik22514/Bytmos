import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const TabComponent = ({focused, label, icon}) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode={'contain'}
        style={{
          width: SIZES.font1 - 7,
          height: SIZES.font1 - 7,
          tintColor: focused ? COLORS.blue : COLORS.input,
        }}
      />

      <Text
        style={[styles.label, {color: focused ? COLORS.blue : COLORS.input}]}>
        {label}
      </Text>
    </View>
  );
};

export default TabComponent;

const styles = StyleSheet.create({
  label: {
    ...FONTS.body4,
    fontWeight: '500',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
