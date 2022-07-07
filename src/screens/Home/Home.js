import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, SIZES} from '../../constants/theme';
import Header from '../../components/Header';
import icons from '../../constants/icons';

const Home = () => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View>
        <Header />
        <View style={styles.separator} />
        <Image
          source={icons.ProfilePix}
          resizeMode="contain"
          style={styles.profilepic}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  separator: {
    width: '100%',
    borderWidth: 0.6,
    borderColor: COLORS.separator,
  },
  profilepic: {
    width: SIZES.font1 * 5,
    height: SIZES.font1 * 5,
    alignSelf: 'center',
  },
});
