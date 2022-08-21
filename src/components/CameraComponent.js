import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {CameraIcon} from '../assets/svgs/svg';
import {COLORS, SIZES} from '../constants/theme';
import ImageLoad from 'react-native-image-placeholder';
import icons from '../constants/icons';

const CameraComponent = ({
  coverPhotoValue,
  profilePhotoValue,
  setCoverPhoto,
  setProfilePhoto,
}) => {
  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground style={styles.imgBackground} source={coverPhotoValue}>
        <Pressable style={styles.cameraBox} onPress={setCoverPhoto}>
          <View style={{alignItems: 'flex-end'}}>
            <CameraIcon />
          </View>
        </Pressable>
      </ImageBackground>
      <View style={styles.profilepicContainer}>
        <ImageLoad
          source={profilePhotoValue}
          style={styles.profilepic}
          placeholderSource={icons.EmptyImage}
          placeholderStyle={styles.profilepic}
          borderRadius={(SIZES.font1 * 4.5) / 2}
        />

        <Pressable style={styles.cameraIndex} onPress={setProfilePhoto}>
          <CameraIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default CameraComponent;

const styles = StyleSheet.create({
  cameraIndex: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  profilepic: {
    width: SIZES.font1 * 4.5,
    height: SIZES.font1 * 4.5,
    alignSelf: 'center',
    borderRadius: (SIZES.font1 * 4.5) / 2,
  },
  profilepicContainer: {
    width: SIZES.font1 * 4.5,
    height: SIZES.font1 * 4.5,
    borderRadius: (SIZES.font1 * 4.5) / 2,
    position: 'absolute',
    bottom: -(SIZES.font1 * 4.5) / 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer: {
    backgroundColor: COLORS.pictureBackground,
    width: '100%',
    height: SIZES.font1 * 5.0,
    marginTop: SIZES.font5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: SIZES.font1 * 3.2,
  },
  imgBackground: {
    overflow: 'hidden',
    height: '100%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  cameraBox: {
    padding: SIZES.font10 - 2,
  },
});
