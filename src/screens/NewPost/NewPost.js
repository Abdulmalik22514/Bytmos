import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {DropDown} from '../../assets/svgs/svg';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';

const NewPost = () => {
  return (
    <Container>
      <Header isNotHome screenName="Post" />
      <ScrollView>
        <Pressable style={styles.postItemPicker}>
          <Text style={FONTS.body3}>Add Category</Text>
          <DropDown />
        </Pressable>
        <View style={styles.separator} />
        <View style={styles.postContent}>
          <Pressable>
            <Image source={icons.NewServiceImage} style={styles.image} />
          </Pressable>
          <TextInput
            style={styles.serviceDetails}
            placeholder="What's new about your business or industry?"
            placeholderTextColor={COLORS.input}
            multiline={true}
          />
        </View>
        <View style={styles.separator} />
      </ScrollView>
    </Container>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  postItemPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.font1 * 1.2,
    paddingHorizontal: SIZES.font6,
  },
  separator: {
    width: '100%',
    borderWidth: 0.6,
    borderColor: COLORS.separator,
  },
  image: {
    width: SIZES.font1 * 2,
    height: SIZES.font1 * 2,
    marginRight: SIZES.font10,
  },
  postContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.font1,
    paddingHorizontal: SIZES.font6,
  },
  serviceDetails: {
    ...FONTS.body4,
    color: COLORS.input,
    width: '75%',
  },
});
