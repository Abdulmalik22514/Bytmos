import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import TribeCategories, {CATEGORIES} from '../../components/TribeCategories';
import icons from '../../constants/icons';
import {
  ChatIcon,
  HeartIcon,
  InviteIcon,
  OptionIcon,
  PlusIcon,
  StarIcon,
} from '../../assets/svgs/svg';

const Tribe = () => {
  const [active, setActive] = useState('All');
  return (
    <Container>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginVertical: SIZES.font10,
            paddingHorizontal: SIZES.font10,
          }}>
          {CATEGORIES.map((item, index) => (
            <TribeCategories
              key={index}
              icon={item.icon}
              title={item.title}
              onPress={() => setActive(item.title)}
              isActive={item.title === active}
            />
          ))}
        </ScrollView>
        <View style={styles.separator} />
        <View style={styles.userContainer}>
          <View style={styles.rightSide}>
            <Image source={icons.NewProfileImage} style={styles.profilePic} />
            <View>
              <Text style={FONTS.h6}>Sonia Fashion Styles</Text>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: SIZES.font10 - 7,
                  }}>
                  <Text style={[FONTS.body3, {marginRight: 7}]}>Rating</Text>
                  <StarIcon />
                  <Text style={[FONTS.body3, {marginLeft: 3}]}>5.0 </Text>
                </View>
                <Text style={styles.tribals}>2,300 Tribals</Text>
              </View>
            </View>
          </View>
          <View style={styles.leftSide}>
            <Pressable>
              <Text style={styles.tribeButton}>+Tribe</Text>
            </Pressable>
            <OptionIcon />
          </View>
        </View>
        <ImageBackground
          source={icons.SoniaFashion}
          style={styles.uploads}
          resizeMode="cover">
          <View style={styles.plusContainer}>
            <PlusIcon />
          </View>
        </ImageBackground>
        <View style={{padding: SIZES.font10 - 5}}>
          <View style={styles.content}>
            <Text style={FONTS.body4}>
              Sonia Fashion Styles just launched a new fleet of wedding gowns
              with great styles and ....
              <Text style={{color: COLORS.input}}> See more</Text>
            </Text>
          </View>
          <Text style={[FONTS.body4, {color: COLORS.input}]}>August 30</Text>
          <View style={styles.iconsContainer}>
            <ChatIcon />
            <HeartIcon />
            <InviteIcon />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Tribe;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: COLORS.separator,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.font10,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: SIZES.font1 * 2.5,
    height: SIZES.font1 * 2.5,
    marginRight: SIZES.font10,
  },
  tribals: {
    ...FONTS.body4,
    color: COLORS.input,
  },
  tribeButton: {
    ...FONTS.h10,
    color: COLORS.blue,
    marginRight: SIZES.font10,
  },
  uploads: {
    width: '100%',
    height: SIZES.font1 * 11,
  },
  plusContainer: {
    width: SIZES.font1 * 1.5,
    height: SIZES.font1 * 1.5,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 100,
    marginTop: SIZES.font1 * 9,
    marginRight: SIZES.font8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SIZES.font1 * 3.3,
    marginTop: SIZES.font1,
    marginBottom: SIZES.font10,
  },
});
