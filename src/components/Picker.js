import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {DropDown} from '../assets/svgs/svg';

const Picker = ({value, onPressItem, data = [], placeHolder}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Text style={FONTS.body2}>{value || placeHolder}</Text>
        <Pressable onPress={() => setOpen(!open)}>
          <DropDown />
        </Pressable>
      </View>
      {open && (
        <View style={styles.dropDown}>
          {data.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => {
                onPressItem(item);
                setOpen(false);
              }}
              style={styles.dropDownItem}>
              <Text style={FONTS.body4}>{item}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </>
  );
};

export default Picker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.font8,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 15,
    marginVertical: SIZES.font8,
  },
  dropDown: {
    backgroundColor: COLORS.white,
    width: '100%',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 1,
    padding: SIZES.font8,
  },
  dropDownItem: {
    paddingVertical: SIZES.font10,
  },
});
