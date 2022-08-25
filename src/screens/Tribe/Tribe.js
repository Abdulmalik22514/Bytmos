import {FlatList, Image, Pressable, Text, TextInput, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import TribeCategories, {CATEGORIES} from '../../components/TribeCategories';
import icons from '../../constants/icons';
import {
  CameraIcon,
  OptionIcon,
  ShareIcon,
  StarIcon,
} from '../../assets/svgs/svg';
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
import {
  COMMENTS_SCREEN,
  TRIBALS_SCREEN,
  TRIBER_PROFILE,
} from '../../constants/screens';
import Comments from '../../components/Comments';

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
        <View>
          <View
            style={{
              marginVertical: SIZES.font10,
            }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={CATEGORIES}
              renderItem={({item}) => {
                return (
                  <TribeCategories
                    title={item.title}
                    icon={item.icon}
                    onPress={() => setActive(item.title)}
                    isActive={item.title === active}
                  />
                );
              }}
            />
          </View>

          <View style={styles.separator} />
          <View>
            <FlatList
              data={[...Array(5)]}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{marginBottom: SIZES.font1 * 11}}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              renderItem={() => {
                return (
                  <View>
                    <View style={styles.userContainer}>
                      <Pressable
                        style={styles.rightSide}
                        onPress={() => navigate(TRIBER_PROFILE)}>
                        <Image
                          source={icons.NewProfileImage}
                          style={styles.profilePic}
                        />
                        <View>
                          <Text style={FONTS.h6}>Sonia Fashion Styles</Text>
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
                      </Pressable>
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
                          onPress={() =>
                            bottomSheetRef?.current?.snapToIndex(1)
                          }>
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

                    <View style={{paddingHorizontal: SIZES.font10}}>
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
                        <Pressable onPress={() => navigate(COMMENTS_SCREEN)}>
                          <Text>120 Comments</Text>
                        </Pressable>
                        <Text>2,300 Likes</Text>
                        <Text>300 Shares</Text>
                      </View>
                    </View>
                    <Text style={styles.commentsHeading}>Comments</Text>

                    <Comments />
                    <View style={styles.postComment}>
                      <View style={styles.commentBox}>
                        <Pressable>
                          <Image
                            source={icons.Sonia}
                            style={styles.commenterPix}
                          />
                        </Pressable>
                        <TextInput
                          placeholder="Add a comment here"
                          style={styles.commentInput}
                          multiline
                        />
                        <CameraIcon />
                      </View>
                      <Pressable>
                        <Text style={styles.postText}>POST</Text>
                      </Pressable>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
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
