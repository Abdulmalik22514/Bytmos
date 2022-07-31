import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ACCOUNT_SCREEN} from '../../constants/screens';

const AccountType = () => {
  const {navigate} = useNavigation();
  return (
    <Container style={styles.container}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Create a</Text>
        <CustomButton
          title="Personal Account"
          style={styles.modalButton}
          onPress={() => navigate(ACCOUNT_SCREEN, {accountType: 'Personal'})}
        />
        <Text style={{...FONTS.body4, fontSize: 22}}>OR</Text>
        <CustomButton
          title="Business Account"
          style={styles.modalButton}
          onPress={() => navigate(ACCOUNT_SCREEN, {accountType: 'Business'})}
        />
      </View>
    </Container>
  );
};

export default AccountType;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.font1 * 4,
    paddingHorizontal: SIZES.font1,
    borderRadius: 20,
    alignItems: 'center',
  },
  modalButton: {
    marginVertical: SIZES.font1,
    width: '80%',
    borderRadius: 22,
  },
  modalText: {
    ...FONTS.body4,
    fontSize: 25,
    marginVertical: SIZES.font5,
  },
  //   container: {
  //     flex: 1,

  //   }
});
