import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import NotchResponsive from './NotchResponsive';

const Container = ({children, style}) => {
  const {container} = useStyles();

  return (
    <View style={[container, {...style}]}>
      <NotchResponsive />

      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />

      {children}
    </View>
  );
};

export default Container;

const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //   paddingHorizontal: SIZES.width * 0.025,
      backgroundColor: COLORS.white,
    },
  });
  return styles;
};
