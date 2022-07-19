import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = () => {
  const {goBack} = useNavigation();
  return (
    <View>
      <Text onPress={() => goBack()}>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
