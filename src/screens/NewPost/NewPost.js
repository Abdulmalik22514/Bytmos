import {FlatList, Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {DropDown} from '../../assets/svgs/svg';
import {FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import ImagePicker from 'react-native-image-crop-picker';
import {CATEGORIES} from '../../components/TribeCategories';
import {NewPostStyles as styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {SHARE_POST_SCREEN} from '../../constants/screens';

const NewPost = ({onSelectImage}) => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('Add Category');
  const {navigate} = useNavigation();

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
            style={styles.serviceButton}
            onPress={() =>
              ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
                includeBase64: true,
              })
                .then(image => {
                  console.log('received image', image);
                  onSelectImage(
                    navigate(SHARE_POST_SCREEN, {
                      selectedImage: `data:${image.mime};base64,${image.data}`,
                    }),
                  );
                })
                .catch(err => console.warn(err))
            }>
            <Image source={icons.NewProfileImage} style={styles.image} />
            <Text style={styles.serviceDetails}>
              Whats new about your business or industry ?
            </Text>
          </Pressable>
        </View>
        <View style={styles.separator} />
      </View>
    </Container>
  );
};

export default NewPost;
