import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const CustomInput = props => {
  const {
    field: {name, onBlur, onChange, value},
    // form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  // const hasError = errors[name] && touched[name];

  return (
    <>
      <View style={styles.authForm}>
        <TextInput
          placeholderTextColor={COLORS.grey}
          style={[
            styles.textInput,
            // props.multiline && {height: props.numberOfLines * 40},
            // hasError && styles.errorInput,
          ]}
          value={value}
          onChangeText={text => onChange(name)(text)}
          // onBlur={() => {
          //   setFieldTouched(name);
          //   onBlur(name);
          // }}
          {...inputProps}
        />
      </View>
      {/* {hasError && <Text style={styles.errorText}>{errors[name]}</Text>} */}
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput: {
    ...FONTS.body3,
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: COLORS.input,
    padding: SIZES.font10 * 0.5,
  },
  authForm: {
    width: '95%',
    marginBottom: SIZES.font9,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});
