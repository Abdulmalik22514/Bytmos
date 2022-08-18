import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';

// const REVIEWERS = []

const TribeBottomSheet = React.forwardRef(({}, ref) => {
  const snapPoints = ['1%', '70%'];

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

  const _renderItem = () => {
    return (
      <>
        <View style={styles.reviewerContainer}>
          <View style={styles.rightSide}>
            <Image source={icons.Cynclair} style={styles.profilePic} />
            <Text style={styles.reviewer}>Flora Davis</Text>
          </View>
          <View style={styles.leftSide}>
            <Text style={styles.rating}>5.0</Text>
            <Text style={FONTS.body4}>2 days ago</Text>
          </View>
        </View>
        <Text style={styles.reviewText}>
          These are comments for a post. When a user touches the commet text on
          the Tribe, this is what you get. This is an illustration and a comment
          from Clair Cynclair’s for Sonia’s post.
        </Text>
      </>
    );
  };

  return (
    <BottomSheet
      index={-1}
      ref={ref}
      handleIndicatorStyle={styles.sheetHandleStyle}
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={renderBackdrop}>
      <BottomSheetScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.upperView}>
          <Image source={icons.NewProfileImage} style={styles.profilePic} />
          <View>
            <Text style={FONTS.h6}>Sonia Fashion Styles</Text>
            <Text>Flora’s Styles Ltd</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <Text style={[FONTS.h8, {marginVertical: SIZES.font10}]}>
          674 reviews
        </Text>
        <FlatList
          data={[...Array(8)]}
          renderItem={_renderItem}
          showsVerticalScrollIndicator={false}
        />
      </BottomSheetScrollView>
    </BottomSheet>
  );
});

export default TribeBottomSheet;

const styles = StyleSheet.create({
  sheetHandleStyle: {
    backgroundColor: COLORS.grey,
    width: SIZES.font1 + 5,
    height: SIZES.font10 - 7,
    marginTop: SIZES.font10 - 5,
  },
  contentContainer: {
    paddingHorizontal: SIZES.font8,
  },
  profilePic: {
    width: SIZES.font1 * 2,
    height: SIZES.font1 * 2,
    marginRight: SIZES.font10,
  },
  upperView: {
    flexDirection: 'row',
    marginVertical: SIZES.font10,
  },
  separator: {
    width: '100%',
    borderWidth: 0.8,
    borderColor: COLORS.separator,
  },
  reviewer: {
    ...FONTS.h8,
    color: COLORS.card,
    width: SIZES.font1 * 3,
  },
  rightSide: {
    flexDirection: 'row',
  },
  reviewerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.font10,
  },
  reviewText: {
    ...FONTS.body4,
    marginBottom: SIZES.font3,
  },
  rating: {
    ...FONTS.h8,
    color: COLORS.yellow,
    alignSelf: 'flex-end',
  },
});
