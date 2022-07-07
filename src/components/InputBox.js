import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import Ionicon from 'react-native-vector-icons/Ionicons';

const InputBox = ({label, style, rest, isPassword}) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {isPassword ? (
        <View style={styles.inputBox}>
          <TextInput
            style={[styles.input, isPassword && styles.passwordInput, style]}
            secureTextEntry={showPassword && isPassword}
            {...rest}
          />
          <Ionicon
            name={showPassword ? 'eye-off' : 'eye'}
            size={25}
            onPress={() => setShowPassword(!showPassword)}
            color={COLORS.input}
          />
        </View>
      ) : (
        <TextInput style={[styles.input, style]} {...rest} />
      )}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingRight: SIZES.font10,
    height: SIZES.font1 * 1.7,
    ...FONTS.body3,
  },
  passwordInput: {
    width: '90%',
  },
  label: {
    marginVertical: SIZES.font8,
    ...FONTS.body3,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.font10,
    borderRadius: 10,
    width: '100%',
  },
  container: {
    marginBottom: SIZES.font1,
    width: '100%',
  },
});
