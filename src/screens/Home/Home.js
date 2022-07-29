import {Image, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FONTS, SIZES} from '../../constants/theme';
import Header from '../../components/Header';
import HomeCard, {CardItems} from '../../components/HomeCard';
import Modal from 'react-native-modal';
import CustomButton from '../../components/CustomButton';
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
  const [isModalVisible, setModalVisible] = useState(false);

  const {auth} = useFlusStores();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAction = title => {
    if (title === 'Account') {
      return toggleModal();
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
      <Modal
        onBackdropPress={toggleModal}
        isVisible={isModalVisible}
        backdropOpacity={0.7}>
        <View>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Create a</Text>
            <CustomButton
              title="Personal Account"
              style={styles.modalButton}
              onPress={() => {
                toggleModal();
                //to delay navigation after modal is closed
                setTimeout(
                  () =>
                    navigation.navigate(ACCOUNT_SCREEN, {
                      accountType: 'Personal',
                    }),
                  150,
                );
              }}
            />
            <Text style={{...FONTS.body4, fontSize: 22}}>OR</Text>
            <CustomButton
              title="Business Account"
              style={styles.modalButton}
              onPress={() => {
                toggleModal();
                //to delay navigation after modal is closed
                setTimeout(
                  () =>
                    navigation.navigate(ACCOUNT_SCREEN, {
                      accountType: 'Business',
                    }),
                  150,
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default Home;
