import {FlatList, Image, Pressable, ScrollView, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import {DropDown, StarIcon, UpArrow} from '../../assets/svgs/svg';
import TribeButton from '../../components/TribeButton';
import {TribeProfileStyles as styles} from './styles';
import Modal from 'react-native-modal';
import CustomButton from '../../components/CustomButton';
import TribeBottomSheet from '../../components/TribeBottomSheet';

const ServiceItems = [
  {icon: icons.FashionItem1},
  {icon: icons.FashionItem2},
  {icon: icons.FashionItem3},
  {icon: icons.FashionItem4},
  {icon: icons.FashionItem5},
  {icon: icons.FashionItem6},
];

const TriberProfile = () => {
  const [open, setOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const bottomSheetRef = useRef(null);

  const _renderComponent = () => {
    return (
      <View style={styles.suggestedItems}>
        <Image
          source={icons.Sonia}
          style={[styles.soniaIamge, {marginRight: null}]}
        />
        <Text
          style={[FONTS.h9, {fontSize: 17, marginBottom: SIZES.font1 * 1.5}]}>
          Sonia Fashion Styles
        </Text>
        <View style={styles.suggestedRating}>
          <StarIcon />
          <Text style={FONTS.body4}>5.0 (630 reviews)</Text>
        </View>
        <TribeButton title={'Tribe'} />
      </View>
    );
  };

  return (
    <>
      <Container>
        <Header isNotHome screenName="Sonia Fashion Styles" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileContainer}>
            <Image source={icons.Sonia} style={styles.soniaIamge} />
            <View>
              <Text style={[FONTS.h6, {fontSize: 22, marginBottom: 4}]}>
                Sonia Fashion Styles
              </Text>
              <Text
                style={[FONTS.body4, {color: COLORS.input, marginBottom: 4}]}>
                Plot 2, Ikare Road, Lagos
              </Text>
              <Text style={[FONTS.body3, {marginBottom: 4}]}>
                2,500 Tribals
              </Text>
              <View style={styles.rating}>
                <Text style={[FONTS.body3, {marginRight: 7}]}>Rating</Text>
                <StarIcon />
                <Text style={[FONTS.body3, {marginLeft: 3}]}>5.0 </Text>
              </View>
              <View style={styles.ratingReview}>
                <Pressable
                  onPress={() => bottomSheetRef?.current?.snapToIndex(1)}>
                  <Text style={FONTS.h10}>34 reviews</Text>
                </Pressable>
                <Pressable>
                  <Text style={[FONTS.h10, {color: COLORS.blue}]}>
                    256 Tribals
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.tribingMessenger}>
            <TribeButton
              isMessage
              title={'Message'}
              onPress={() => setModalVisible(true)}
            />
            <TribeButton title={'Tribing'} />
            <Pressable
              style={styles.dropDownBox}
              onPress={() => setOpen(!open)}>
              {open ? <UpArrow /> : <DropDown color={COLORS.blue} />}
            </Pressable>
          </View>
          {open && (
            <View style={styles.dropDownView}>
              <Text style={FONTS.body3}>Suggested for you</Text>
              <FlatList
                data={[...Array(8)]}
                renderItem={_renderComponent}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}
          <View style={styles.itemsContainer}>
            {ServiceItems.map((item, index) => {
              return (
                <Pressable key={index}>
                  <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={styles.serviceItems}
                  />
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </Container>
      <TribeBottomSheet ref={bottomSheetRef} />
      <Modal isVisible={isModalVisible} style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalMessage}>
            Messages can be sent only when your Tribe request has been sent.
          </Text>
          <CustomButton
            title="Got it"
            onPress={() => setModalVisible(false)}
            style={styles.modalButton}
          />
        </View>
      </Modal>
    </>
  );
};

export default TriberProfile;
