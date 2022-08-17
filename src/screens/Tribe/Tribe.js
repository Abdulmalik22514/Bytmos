import {FlatList, Image, Pressable, ScrollView, Text, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import TribeCategories, {CATEGORIES} from '../../components/TribeCategories';
import icons from '../../constants/icons';
import {OptionIcon, ShareIcon, StarIcon} from '../../assets/svgs/svg';
import {
  ACTIONS,
  LikeActions,
  TribeBottomSheet,
  TRIBE_BOTTOMSHEET_ACTIONS,
} from '../../components/LikeActions';
import Swiper from 'react-native-swiper';
import SwiperContent, {SWIPER_IMAGES} from '../../components/SwiperContent';
import {TribeStyles as styles} from './styles';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {TRIBALS_SCREEN} from '../../constants/screens';

const Tribe = () => {
  const [active, setActive] = useState('All');
  const [tribe, setTribe] = useState(false);
  const {navigate} = useNavigation();

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['1%', '32%'], []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        opacity={0.5}
      />
    ),
    [],
  );

  return (
    <>
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
          <FlatList
            data={[...Array(5)]}
            renderItem={() => {
              return (
                <View>
                  <View style={styles.userContainer}>
                    <View style={styles.rightSide}>
                      <Image
                        source={icons.NewProfileImage}
                        style={styles.profilePic}
                      />
                      <View>
                        <Pressable>
                          <Text style={FONTS.h6}>Sonia Fashion Styles</Text>
                        </Pressable>
                        <View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginVertical: SIZES.font10 - 7,
                            }}>
                            <Text style={[FONTS.body3, {marginRight: 7}]}>
                              Rating
                            </Text>
                            <StarIcon />
                            <Text style={[FONTS.body3, {marginLeft: 3}]}>
                              5.0
                            </Text>
                          </View>
                          <Pressable
                            onPress={() =>
                              navigate(TRIBALS_SCREEN, {user: 'Flora Clair'})
                            }>
                            <Text style={styles.tribals}>2,300 Tribals</Text>
                          </Pressable>
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
                      <Pressable
                        onPress={() => bottomSheetRef?.current?.snapToIndex(1)}>
                        <OptionIcon />
                      </Pressable>
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
                    <View style={styles.shareContainer}>
                      <View style={styles.iconsContainer}>
                        {ACTIONS.map((item, index) => (
                          <LikeActions item={item} key={index} />
                        ))}
                      </View>
                      <Pressable>
                        <ShareIcon />
                      </Pressable>
                    </View>

                    <View style={styles.actionsAmount}>
                      <Text style={{color: COLORS.input}}>120 Comments</Text>
                      <Text style={{color: COLORS.input}}>2,300 Likes</Text>
                      <Text style={{color: COLORS.input}}>300 Shares</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </Container>
      <BottomSheet
        enablePanDownToClose
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        index={-1}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.sheetHandleStyle}>
        <View style={{paddingLeft: SIZES.font5, marginTop: SIZES.font10}}>
          {TRIBE_BOTTOMSHEET_ACTIONS.map((item, index) => {
            return (
              <TribeBottomSheet
                key={index}
                icon={item.icon}
                title={item.title}
              />
            );
          })}
        </View>
      </BottomSheet>
    </>
  );
};

export default Tribe;
