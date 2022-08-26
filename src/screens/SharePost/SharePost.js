import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {CancelIcon, StarIcon} from '../../assets/svgs/svg';
import icons from '../../constants/icons';
import {useNavigation} from '@react-navigation/native';
import {SharePostStyles as styles} from './styles';

const SharePost = ({route}) => {
  const {selectedImage} = route.params;
  const [tribe, setTribe] = useState(false);
  const {navigate, goBack} = useNavigation();
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Pressable onPress={() => goBack()}>
            <CancelIcon />
          </Pressable>
          <Text style={styles.screenName}>Share Post</Text>
        </View>
        <Pressable>
          <Text style={styles.postText}>POST</Text>
        </Pressable>
      </View>
      <View style={styles.itemSeparator} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.postContent}>
          <Image source={icons.NewProfileImage} style={styles.image} />
          <TextInput
            style={styles.serviceDetails}
            placeholder="Write your thoughts on this"
            placeholderTextColor={COLORS.black}
            multiline={true}
          />
        </View>
        <View style={styles.postContainer}>
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
                    <Text style={[FONTS.body3, {marginRight: 7}]}>Rating</Text>
                    <StarIcon />
                    <Text style={[FONTS.body3, {marginLeft: 3}]}>5.0</Text>
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
            </View>
          </View>
          <Image
            source={{uri: selectedImage}}
            style={styles.selectedImage}
            resizeMode="cover"
          />
          <View style={{paddingHorizontal: SIZES.font10}}>
            <Text style={FONTS.body4}>
              Hi, this is flora’s foods. Let us have your orders {'\n'}
              <Text style={{textAlign: 'right', color: COLORS.input}}>
                See more
              </Text>
            </Text>
            <Text style={styles.tribals}>August 30</Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default SharePost;
