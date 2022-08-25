import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {DropDown} from '../../assets/svgs/svg';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import ImagePicker from 'react-native-image-crop-picker';
import {CATEGORIES} from '../../components/TribeCategories';

const NewPost = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('Add Category');
  return (
    <Container>
      <Header isNotHome screenName="Post" />
      <View>
        <Pressable style={styles.postItemPicker} onPress={() => setOpen(!open)}>
          <Text style={FONTS.body3}>{category}</Text>
          <DropDown />
        </Pressable>
        {open && (
          <View style={styles.categoriesContainer}>
            <FlatList
              data={CATEGORIES}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<View style={{marginBottom: SIZES.font1}} />}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              renderItem={({item}) => {
                return (
                  <Pressable
                    onPress={() => {
                      setCategory(item.title);
                      setOpen(false);
                    }}
                    style={styles.categoriesCard}>
                    <Text style={FONTS.body3}>{item.title}</Text>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
        <View style={styles.separator} />
        <View style={styles.postContent}>
          <Pressable
            onPress={() =>
              ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
                includeBase64: true,
              })
                .then(image => {
                  console.log('received image', image);
                })
                .catch(err => console.warn(err))
            }>
            <Image source={icons.NewProfileImage} style={styles.image} />
          </Pressable>
          <TextInput
            style={styles.serviceDetails}
            placeholder="What's new about your business or industry?"
            placeholderTextColor={COLORS.input}
            multiline={true}
          />
        </View>
        <View style={styles.separator} />
      </View>
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
  itemSeparator: {
    width: '100%',
    borderWidth: 0.6,
    borderColor: COLORS.separator,
  },
  categoriesCard: {
    marginVertical: SIZES.font1,
    paddingLeft: SIZES.font8,
  },
  categoriesContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 0.5,
    backgroundColor: COLORS.white,
  },
});
