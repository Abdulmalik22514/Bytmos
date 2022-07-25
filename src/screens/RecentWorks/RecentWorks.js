import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

const RecentWorks = () => {
  const {goBack} = useNavigation();
  return (
    <View>
      <Header isNotHome />
      <Text onPress={goBack}>RecentWorks</Text>
    </View>
  );
};

export default RecentWorks;

const styles = StyleSheet.create({});
