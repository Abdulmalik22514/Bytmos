import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import Header from '../../components/Header';
import icons from '../../constants/icons';
import HomeCard, {CardItems} from '../../components/HomeCard';
import {
  AccountIcon,
  ManageIcon,
  OrdersIcon,
  PackagesIcon,
  ServicesIcon,
  WorksIcon,
} from '../../assets/svgs/svg';

// const CardItems = [
//   {
//     icon: <AccountIcon />,
//     label: 'Account',
//     onPress: () => navigation.navigate('AccountScreen'),
//   },
//   {
//     icon: <PackagesIcon />,
//     label: 'Packages',
//     onPress: () => navigation.navigate('AccountScreen'),
//   },
//   {
//     icon: <ServicesIcon />,
//     label: 'My Services',
//     onPress: () => navigation.navigate('AccountScreen'),
//   },
//   {
//     icon: <OrdersIcon />,
//     label: 'Service Orders',
//     onPress: () => navigation.navigate('AccountScreen'),
//   },
//   {
//     icon: <ManageIcon />,
//     label: 'Manage Orders',
//     onPress: () => navigation.navigate('AccountScreen'),
//   },
//   {
//     icon: <WorksIcon />,
//     label: 'My Recent Works',
//     onPress: () => navigation.navigate('AccountScreen'),
//   },
// ];

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
            return <HomeCard key={index} icon={item.icon} label={item.label} />;
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
