import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import TribeCategories, {CATEGORIES} from '../../components/TribeCategories';
import icons from '../../constants/icons';
import {OptionIcon, StarIcon} from '../../assets/svgs/svg';
import LikeActions, {ACTIONS} from '../../components/LikeActions';
import Swiper from 'react-native-swiper';
import SwiperContent, {SWIPER_IMAGES} from '../../components/SwiperContent';
import {TribeStyles as styles} from './styles';

const Tribe = () => {
  const [active, setActive] = useState('All');
  const [tribe, setTribe] = useState(false);

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
            <Pressable onPress={() => setTribe(!tribe)}>
              <Text
                style={[
                  styles.tribeButton,
                  {color: tribe ? 'black' : COLORS.blue},
                ]}>
                {tribe ? 'Tribing' : '+Tribe'}
              </Text>
            </Pressable>
            <OptionIcon />
          </View>
        </View>
        <Swiper
          style={styles.wrapper}
          height={SIZES.font1 * 14.7}
          activeDotStyle={styles.dotStyle}
          activeDotColor={COLORS.blue}
          dotStyle={styles.dotStyle}>
          {SWIPER_IMAGES.map((item, index) => {
            return <SwiperContent key={index} item={item} />;
          })}
        </Swiper>

        <View style={{paddingHorizontal: SIZES.font10 - 5}}>
          <View style={styles.iconsContainer}>
            {ACTIONS.map((item, index) => (
              <LikeActions item={item} key={index} />
            ))}
          </View>
          <View style={styles.actionsAmount}>
            <Text style={{color: COLORS.input}}>120 Comments</Text>
            <Text style={{color: COLORS.input}}>2,300 Likes</Text>
            <Text style={{color: COLORS.input}}>300 Shares</Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Tribe;
