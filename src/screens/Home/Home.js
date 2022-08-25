import {Alert, Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../../constants/theme';
import Header from '../../components/Header';
import HomeCard, {CardItems} from '../../components/HomeCard';
import {
  ACCOUNT_SCREEN,
  ACCOUNT_TYPE,
  MANAGE_ORDERS_SCREEN,
  PACKAGE_SCREEN,
  RECENT_WORKS_SCREEN,
  SERVICE_ORDERS_SCREEN,
  SERVICE_SCREEN,
} from '../../constants/screens';
import Rating from '../../components/Performance';
import {HomeStyles as styles} from './styles';
import {useFlusDispatcher, useFlusStores} from 'react-flus';
import Container from '../../components/Container';
import {useAppApis} from '../../services/api/app/app.index';
import {useMutation} from 'react-query';
import AwaitResponse from './../../components/AwaiteResponse';
import {UPDATE_USER} from '../../flus/constants/auth.const';
import {useNavigation} from '@react-navigation/native';

const Home = ({navigation}) => {
  const {auth} = useFlusStores();
  const navigator = useNavigation();

  const dispatcher = useFlusDispatcher();

  const {CheckUserStatus, initializeApp} = useAppApis();

  /* Initialize app  */
  const fetchAccountApi = useMutation(initializeApp, {
    onSuccess: res => {
      /* first api in init app is the Performance api so grap it */
      const _performance = res[0]?.status ? res[0]?.data : null;
      const _profileData = res[1]?.status ? res[1]?.data : null;

      dispatcher({
        type: UPDATE_USER,
        payload: {data: {..._profileData, performance: {..._performance}}},
      });
    },
  });

  /* This api check if the user has created account or has verified his or her account */
  const checkAccountApi = useMutation(CheckUserStatus, {
    onSuccess: res => {
      if (res?.status) {
        if (!res?.data?.has_created_account) {
          Alert.alert('Account Update Required', 'Please update your account.');
          navigator.navigate(ACCOUNT_TYPE, {flowFrom: 'inapp_process'});
        }

        if (res?.data?.has_created_account && res?.data?.has_verified_account) {
          dispatcher({
            type: UPDATE_USER,
            payload: {data: {account: res?.data}},
          });
        }
      }
    },
  });

  const handleAccountChecking = async () => await checkAccountApi.mutateAsync();
  const handleAccountFetching = async () =>
    await fetchAccountApi.mutateAsync(
      auth?.user?.account?.user_type?.toLowerCase(),
    );

  const handleAction = title => {
    if (title === 'Account') {
      // Here, user needs to navigate to the account type selected during account creation
      if (typeof auth?.user?.account === 'undefined') {
        if (auth?.user?.user_type?.toLowerCase() === 'personal') {
          navigation.navigate(ACCOUNT_SCREEN, {accountType: 'Personal'});
        }

        if (auth?.user?.user_type?.toLowerCase() === 'company') {
          navigation.navigate(ACCOUNT_SCREEN, {accountType: 'Business'});
        }
      } else {
        if (auth?.user?.account?.user_type?.toLowerCase() === 'personal') {
          navigation.navigate(ACCOUNT_SCREEN, {accountType: 'Personal'});
        }

        if (auth?.user?.account?.user_type?.toLowerCase() === 'company') {
          navigation.navigate(ACCOUNT_SCREEN, {accountType: 'Business'});
        }
      }
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
      <AwaitResponse api={handleAccountChecking} silent>
        <AwaitResponse api={handleAccountFetching} silent>
          <Header />
          <ScrollView
            style={{paddingHorizontal: SIZES.font10}}
            showsVerticalScrollIndicator={false}>
            <Image
              source={{uri: auth?.user?.profile_photo}}
              // resizeMode="contain"
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
                    isService={item.label === 'Service Orders'}
                  />
                );
              })}
            </View>

            <View style={{paddingHorizontal: SIZES.font8}}>
              <View style={styles.performanceHeader}>
                <Text style={FONTS.h10}>Performance</Text>
                <View style={styles.serviceOrders}>
                  <Text style={styles.serviceAmount}>3</Text>
                </View>
              </View>

              <Rating label="Client Ranking" />
              <Rating label="Service Points" />
              <Rating label="Tribality" />
              <Rating label="Tribal Presence" />
            </View>
          </ScrollView>
        </AwaitResponse>
      </AwaitResponse>
    </Container>
  );
};

export default Home;
