import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants/theme';

const Rating = ({label}) => {
  return (
    <View style={{marginBottom: SIZES.font1}}>
      <View style={styles.rankingView} />
      <View
        style={[
          StyleSheet.absoluteFillObject,
          styles.rankingView,
          {backgroundColor: COLORS.blue, width: SIZES.font1 * 3},
        ]}
      />
      <Text>{label}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rankingView: {
    width: '100%',
    height: SIZES.font1 * 1.6,
    backgroundColor: COLORS.rating,
    borderRadius: 10,
    marginBottom: SIZES.font10 - 7,
  },
});
