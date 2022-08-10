import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import Icon from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';

const Options = [
  {
    title: 'Take from Camera',
    icon: <Icon name="camera" size={26} />,
    actionType: 'Open Camera',
  },
  {
    title: 'Choose Photo from Gallery',
    icon: <Icon name="image" size={26} />,
    actionType: 'Open Gallery',
  },
];

const ImageBottomSheet = React.forwardRef(
  ({onSelectImage, handleClosePress, type, onCoverPhotoSelect}, ref) => {
    const snapPoints = ['1%', '27%'];

    const handleActionType = actionType => {
      handleClosePress();
      if (actionType === 'Open Camera') {
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          type === 'coverPhoto'
            ? onCoverPhotoSelect?.(image.path)
            : onSelectImage(image.path);
          console.log({image});
        });
      }
      if (actionType === 'Open Gallery') {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          type === 'coverPhoto'
            ? onCoverPhotoSelect?.(image.path)
            : onSelectImage(image.path);
          console.log(image);
        });
      }
    };

    const renderBackdrop = useCallback(
      props => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={0}
          appearsOnIndex={1}
          opacity={0.3}
        />
      ),
      [],
    );

    return (
      <BottomSheet
        ref={ref}
        handleIndicatorStyle={styles.sheetHandleStyle}
        backdropComponent={renderBackdrop}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose>
        <View style={styles.contentContainer}>
          {Options.map((item, index) => (
            <Pressable
              style={styles.sheetButton}
              key={index}
              onPress={() => {
                handleActionType(item.actionType);
              }}>
              {item.icon}
              <Text style={styles.sheetButtonTitle}>{item.title}</Text>
            </Pressable>
          ))}
        </View>
      </BottomSheet>
    );
  },
);

export default ImageBottomSheet;

const styles = StyleSheet.create({
  sheetHandleStyle: {
    backgroundColor: COLORS.grey,
    width: SIZES.font1 * 2.0,
    height: SIZES.font10 - 5,
    marginTop: SIZES.font10 - 8,
    borderRadius: 5,
  },
  sheetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.font4,
    height: SIZES.font1,
  },
  contentContainer: {
    flex: 1,
    padding: SIZES.font1,
  },
  sheetButtonTitle: {
    ...FONTS.body2,
    marginLeft: SIZES.font4,
  },
});
