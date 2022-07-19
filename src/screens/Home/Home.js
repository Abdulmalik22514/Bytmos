import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import Header from '../../components/Header';
import icons from '../../constants/icons';
import HomeCard, {CardItems} from '../../components/HomeCard';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Header onPress={() => navigation.openDrawer()} />
        <View style={styles.separator} />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={icons.ProfilePix}
          resizeMode="contain"
          style={styles.profilepic}
        />
        <Text style={styles.accountName}>Flora’s Fashion Styles Ltd</Text>
        <View style={styles.itemContainer}>
          {CardItems.map((item, index) => {
            return (
              <HomeCard
                key={index}
                icon={item.icon}
                label={item.label}
                onPress={() => navigation.navigate(item.screenName || '')}
              />
            );
          })}
        </View>
      </KeyboardAwareScrollView>
    </View>
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
    width: SIZES.font1 * 4.5,
    height: SIZES.font1 * 4.5,
    alignSelf: 'center',
    marginVertical: SIZES.font10,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font10,
    marginTop: SIZES.font1 * 2,
  },
  accountName: {
    ...FONTS.h6,
    alignSelf: 'center',
  },
});
