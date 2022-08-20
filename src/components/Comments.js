import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import icons from '../constants/icons';
import {HeartIcon} from '../assets/svgs/svg';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const Comments = () => {
  return (
    <View style={{paddingHorizontal: SIZES.font10}}>
      <View style={styles.container}>
        <Image source={icons.Cynclair} style={styles.commenter} />
        <View style={{width: '80%'}}>
          <Text style={FONTS.h10}>Clair Cynclair</Text>
          <Text style={styles.comments}>
            These are comments for a post. When a user touches the commet text
            on the Tribe, this is what you get. This is an illustration and a
            comment from Clair Cynclair’s for Sonia’s post.
          </Text>
          <View style={styles.replyComment}>
            <Text style={[FONTS.body4, {color: COLORS.input}]}>13 hrs</Text>
            <Pressable>
              <Text style={FONTS.body4}>Reply</Text>
            </Pressable>
            <View style={styles.likeContainer}>
              <HeartIcon />
              <Text style={styles.likeAmount}>1 Like</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: SIZES.font10,
    paddingRight: SIZES.font10,
  },
  commenter: {
    width: SIZES.font1 * 2,
    height: SIZES.font1 * 2,
    marginRight: SIZES.font10,
  },
  replyComment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: SIZES.font10,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  comments: {
    ...FONTS.body4,
    marginVertical: SIZES.font10,
  },
  likeAmount: {
    ...FONTS.body4,
    marginLeft: SIZES.font10 - 5,
  },
  postComment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.font1,
    marginBottom: SIZES.font10,
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
});
