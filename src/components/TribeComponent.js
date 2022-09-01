import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import icons from '../constants/icons';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import {
  COMMENTS_SCREEN,
  LIKES_SCREEN,
  POSTCOMMENT_SCREEN,
  SEND_SCREEN,
  TRIBALS_SCREEN,
  TRIBER_PROFILE,
} from '../constants/screens';
import SwiperContent, { SWIPER_IMAGES } from './SwiperContent';
import Swiper from 'react-native-swiper';
import {
  CameraIcon,
  OptionIcon,
  ShareIcon,
  StarIcon,
} from '../assets/svgs/svg';
import { ACTIONS, COMMENTS_ACTIONS, LikeActions } from './LikeActions';
import Comments from './Comments';

const TribeComponent = ({ onPressBottomSheet, isComment, style }) => {
  const { navigate } = useNavigation();
  const [tribe, setTribe] = useState(false);

  const getIconAction = icon => {
    if (icon === 'Chat') {
      return navigate(POSTCOMMENT_SCREEN);
    }
    if (icon === 'Heart') {
      return null;
    }
    if (icon === 'Send') {
      return navigate(SEND_SCREEN, { user: 'Flora Clair' });
    }
  };

  return (
    <View style={style}>
      <View style={styles.userContainer}>
        <Pressable
          style={styles.rightSide}
          onPress={() => navigate(TRIBER_PROFILE)}>
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
                <Text style={[FONTS.body3, { marginRight: 7 }]}>Rating</Text>
                <StarIcon />
                <Text style={[FONTS.body3, { marginLeft: 3 }]}>5.0</Text>
              </View>
              <Pressable>
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
                { color: tribe ? 'black' : COLORS.blue },
              ]}>
              {tribe ? 'Tribing' : '+Tribe'}
            </Text>
          </Pressable>
          <Pressable onPress={onPressBottomSheet}>
            <OptionIcon />
          </Pressable>
        </View>
      </View>
      {isComment ? (
        <SwiperContent isComment item={icons.SoniaFashion} />
      ) : (
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
      )}

      <View
        style={[
          isComment && { marginTop: SIZES.font1 },
          { paddingHorizontal: SIZES.font10 },
        ]}>
        <View style={styles.shareContainer}>
          <View
            style={[
              styles.iconsContainer,
              isComment && { width: SIZES.font1 * 2.2 },
            ]}>
            {isComment
              ? COMMENTS_ACTIONS.map((item, index) => (
                  <LikeActions
                    item={item.icon}
                    onPressItem={() => getIconAction(item.label)}
                    key={index}
                  />
                ))
              : ACTIONS.map((item, index) => (
                  <LikeActions
                    item={item.icon}
                    onPressItem={() => getIconAction(item.label)}
                    key={index}
                  />
                ))}
          </View>
          <Pressable>{isComment ? null : <ShareIcon />}</Pressable>
        </View>

        <View style={styles.actionsAmount}>
          <Pressable onPress={() => navigate(COMMENTS_SCREEN)}>
            <Text>120 Comments</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              navigate(LIKES_SCREEN, {
                user: 'Flora Clair',
              })
            }>
            <Text>2,300 Likes</Text>
          </Pressable>
          <Text>300 Shares</Text>
        </View>
      </View>
      <Text style={styles.commentsHeading}>Comments</Text>

      <Comments />
      <View style={styles.postComment}>
        <View style={styles.commentBox}>
          <Pressable>
            <Image source={icons.Sonia} style={styles.commenterPix} />
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
};

export default TribeComponent;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.font10,
  },
  rightSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '22%',
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
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SIZES.font1 * 3.3,
  },
  actionsAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SIZES.font1 * 9,
    marginTop: SIZES.font10,
    marginBottom: SIZES.font5,
  },
  dotStyle: {
    width: SIZES.font10 - 2,
    height: SIZES.font10 - 2,
    borderRadius: (SIZES.font10 - 2) / 2,
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: SIZES.font10,
  },
  postComment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.font1,
    marginBottom: SIZES.font10,
    paddingHorizontal: SIZES.font10,
  },
  commentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.grey,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: SIZES.font10 - 5,
    paddingVertical: SIZES.font10 - 7,
    width: '85%',
  },
  commenterPix: {
    width: SIZES.font1 * 1.5,
    height: SIZES.font1 * 1.5,
    marginRight: SIZES.font10,
  },
  postText: {
    ...FONTS.h10,
    color: COLORS.blue,
  },
  commentInput: {
    ...FONTS.body4,
    width: '65%',
    paddingHorizontal: SIZES.font10 - 5,
  },
  commentsHeading: {
    ...FONTS.body4,
    color: COLORS.input,
    paddingHorizontal: SIZES.font10,
  },
});
