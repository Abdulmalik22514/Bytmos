import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {useFlusDispatcher} from 'react-flus';
import {LOGOUT} from '../../flus/constants/auth.const';

const Logout = () => {
  const dispatcher = useFlusDispatcher();

  return (
    <View style={styles.container}>
      <Text style={styles.logoutText}>Logout</Text>
      <CustomButton
        title="Logout"
        onPress={() => {
          dispatcher({
            type: LOGOUT,
          });
        }}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.font1,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  logoutText: {
    marginTop: 100,
    marginBottom: 200,
    alignSelf: 'center',
    ...FONTS.h3,
  },
});
