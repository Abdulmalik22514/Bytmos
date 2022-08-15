import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';

const MyServices = () => {
  return (
    <Container>
      <View>
        <Header isNotHome />
        <Text>MyServices</Text>
      </View>
    </Container>
  );
};

export default MyServices;

const styles = StyleSheet.create({});
