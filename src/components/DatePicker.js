import React, {useState} from 'react';
import format from 'date-fns/format';
import {Pressable, StyleSheet, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {DateDropdown} from '../assets/svgs/svg';
import {COLORS, FONTS, SIZES} from '../constants/theme';

export const DatePicker = ({style, onSelectDate, dateValue}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    onSelectDate(date);
    hideDatePicker();
  };

  return (
    <Pressable onPress={showDatePicker} style={[styles.container, style]}>
      <Text style={[FONTS.body2, {color: COLORS.date}]}>
        {dateValue
          ? format(new Date(dateValue), 'MMMM d yyyy')
          : 'Date of Birth'}
      </Text>
      <DateDropdown />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 15,
    marginTop: SIZES.font10,
    justifyContent: 'space-between',
    padding: SIZES.font8,
  },
  isMonth: {
    width: SIZES.font1 * 4.7,
  },
});
