import {FlatList, Image, Pressable, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import {DropDown, StarIcon, UpArrow} from '../../assets/svgs/svg';
import TribeButton from '../../components/TribeButton';
import {ProfileStyles as styles} from './styles';

const ServiceItems = [
  {icon: icons.FashionItem1},
  {icon: icons.FashionItem2},
  {icon: icons.FashionItem3},
  {icon: icons.FashionItem4},
  {icon: icons.FashionItem5},
  {icon: icons.FashionItem6},
];

const Profile = () => {
  const [open, setOpen] = useState(false);
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
          <Pressable style={styles.dropDownBox} onPress={() => setOpen(!open)}>
            {open ? <UpArrow /> : <DropDown color={COLORS.blue} />}
          </Pressable>
        </View>
        {open && (
          <View style={styles.dropDownView}>
            <Text style={FONTS.body3}>Suggested for you</Text>
            <FlatList
              data={[...Array(8)]}
              renderItem={() => {
                return (
                  <View style={styles.suggestedItems}>
                    <Image
                      source={icons.Sonia}
                      style={[styles.soniaIamge, {marginRight: null}]}
                    />
                    <Text
                      style={[
                        FONTS.h9,
                        {fontSize: 17, marginBottom: SIZES.font1 * 1.5},
                      ]}>
                      Sonia Fashion Styles
                    </Text>
                    <View style={styles.suggestedRating}>
                      <StarIcon />
                      <Text style={FONTS.body4}>5.0 (630 reviews)</Text>
                    </View>
                    <TribeButton title={'Tribe'} />
                  </View>
                );
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
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
