import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';

const BottomSheet1 = ({
  onChangeSheet1,
  value,
  error,
  onSubmitSheet1,
  isLoading,
  disabled,
}) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.forgotText}>Forgot password</Text>
      <Text style={FONTS.body4}>
        To reset your password enter your registered email below, we will send
        you a 4 digits code to your email for verification.
      </Text>
      <View style={{marginVertical: SIZES.font1}}>
        <InputBox
          name="partner_email"
          label="Registered Email"
          keyboardType="email-address"
          value={value}
          onChangeText={onChangeSheet1}
          error={error}
        />
      </View>
      <CustomButton
        title="Send"
        style={{marginTop: SIZES.font10}}
        onPress={onSubmitSheet1}
        isLoading={isLoading}
        disabled={disabled}
      />
    </View>
  );
};

export default BottomSheet1;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: SIZES.font1,
    backgroundColor: COLORS.background,
  },
  forgotText: {
    ...FONTS.h5,
    fontSize: 22,
    marginBottom: SIZES.font5,
  },
});
