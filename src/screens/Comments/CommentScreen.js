import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Comments from '../../components/Comments';
import { CameraIcon } from '../../assets/svgs/svg';
import icons from '../../constants/icons';

const CommentScreen = () => {
  return (
    <>
      <Container>
        <Header isNotHome screenName="Comments" />
        <View style={{ flex: 1 }}>
          <FlatList
            data={[...Array(2).keys()]}
            renderItem={() => <Comments />}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.postComment}>
            <View style={styles.commentBox}>
              <Image source={icons.Sonia} style={styles.commenterPix} />
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
      </Container>
    </>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  postComment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.font5,
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
});
