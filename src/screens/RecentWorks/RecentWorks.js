import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Container from '../../components/Container';

const RecentWorks = () => {
  const {goBack} = useNavigation();
  return (
    <Container>
      <View>
        <Header isNotHome />
        <Text onPress={goBack}>RecentWorks</Text>
      </View>
    </Container>
  );
};

export default RecentWorks;

const styles = StyleSheet.create({});
