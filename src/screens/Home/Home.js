import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../../constants/theme';
import Header from '../../components/Header';
import HomeCard, {CardItems} from '../../components/HomeCard';
import {
  ACCOUNT_SCREEN,
  MANAGE_ORDERS_SCREEN,
  PACKAGE_SCREEN,
  RECENT_WORKS_SCREEN,
  SERVICE_ORDERS_SCREEN,
  SERVICE_SCREEN,
} from '../../constants/screens';
import Rating from '../../components/Performance';
import {HomeStyles as styles} from './styles';
import {useFlusStores} from 'react-flus';
import Container from '../../components/Container';

const Home = ({navigation}) => {
  const {auth} = useFlusStores();

  const handleAction = title => {
    if (title === 'Account') {
      // Here, user needs to navigate to the account type selected during account creation
      return navigation.navigate(ACCOUNT_SCREEN, {accountType: 'Personal'});
    }
    if (title === 'Packages') {
      return navigation.navigate(PACKAGE_SCREEN);
    }
    if (title === 'My Services') {
      return navigation.navigate(SERVICE_SCREEN);
    }
    if (title === 'Service Orders') {
      return navigation.navigate(SERVICE_ORDERS_SCREEN);
    }
    if (title === 'Manage Orders') {
      return navigation.navigate(MANAGE_ORDERS_SCREEN);
    }
    if (title === 'My Recent Works') {
      return navigation.navigate(RECENT_WORKS_SCREEN);
    }
  };

  return (
    <Container style={styles.container}>
      <Header onPress={() => navigation.toggleDrawer()} />
      <ScrollView
        style={{paddingHorizontal: SIZES.font10}}
        showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: auth?.user?.profile_photo}}
          resizeMode="contain"
          style={styles.profilepic}
        />
        <Text style={styles.accountName}>
          {auth?.user?.first_name} {auth?.user?.last_name}
        </Text>

        <View style={styles.itemContainer}>
          {CardItems.map((item, index) => {
            return (
              <HomeCard
                key={index}
                icon={item.icon}
                label={item.label}
                onPress={() => handleAction(item.label)}
              />
            );
          })}
        </View>

        <View style={{paddingHorizontal: SIZES.font8}}>
          <Text style={{...FONTS.h10, marginBottom: SIZES.font1}}>
            Performance
          </Text>
          <Rating label="Client Ranking" />
          <Rating label="Service Points" />
          <Rating label="Tribality" />
          <Rating label="Tribal Presence" />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;
