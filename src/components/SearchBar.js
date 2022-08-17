import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchIcon} from '../assets/svgs/svg';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <SearchIcon width={20} height={22} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={COLORS.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.grey,
    borderRadius: 20,
    borderWidth: 1,
    padding: SIZES.font10,
    marginVertical: SIZES.font10,
  },
  textInput: {
    paddingHorizontal: SIZES.font10,
    ...FONTS.body3,
  },
});
