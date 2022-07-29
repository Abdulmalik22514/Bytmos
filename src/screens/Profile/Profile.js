import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import {DropDown, StarIcon} from '../../assets/svgs/svg';
import TribeButton from '../../components/TribeButton';

const ServiceItems = [
  {icon: icons.FashionItem1},
  {icon: icons.FashionItem2},
  {icon: icons.FashionItem3},
  {icon: icons.FashionItem4},
  {icon: icons.FashionItem5},
  {icon: icons.FashionItem6},
];

const Profile = () => {
  return (
    <Container>
      <Header isNotHome screenName="Sonia Fashion Styles" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <Image source={icons.Sonia} style={styles.soniaIamge} />
          <View>
            <Text style={[FONTS.h6, {fontSize: 22, marginBottom: 4}]}>
              Sonia Fashion Styles
            </Text>
            <Text style={[FONTS.body4, {color: COLORS.input, marginBottom: 4}]}>
              Plot 2, Ikare Road, Lagos
            </Text>
            <Text style={[FONTS.body3, {marginBottom: 4}]}>2,500 Tribals</Text>
            <View style={styles.ratingReview}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: SIZES.font1,
                }}>
                <Text style={[FONTS.body3, {marginRight: 7}]}>Rating</Text>
                <StarIcon />
                <Text style={[FONTS.body3, {marginLeft: 3}]}>5.0 </Text>
              </View>
              <Text style={FONTS.body4}>256 reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.tribingMessenger}>
          <TribeButton isMessage title={'Message'} />
          <TribeButton title={'Tribing'} />
          <Pressable style={styles.dropDownBox}>
            <DropDown color={COLORS.blue} />
          </Pressable>
        </View>
        <View style={styles.itemsContainer}>
          {ServiceItems.map((item, index) => {
            return (
              <Image
                key={index}
                source={item.icon}
                resizeMode="contain"
                style={styles.serviceItems}
              />
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  soniaIamge: {
    width: SIZES.font1 * 2.5,
    height: SIZES.font1 * 2.5,
    marginRight: SIZES.font10,
  },
  profileContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: SIZES.font10,
    marginVertical: SIZES.font8,
  },
  ratingReview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceItems: {
    width: SIZES.font1 + 147,
    height: SIZES.font1 + 130,
  },
  tribingMessenger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font10,
    marginTop: SIZES.font1,
  },
  dropDownBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.font1 * 1.2,
    height: SIZES.font1 * 1.2,
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: 100,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font10,
    marginVertical: SIZES.font10,
  },
});
