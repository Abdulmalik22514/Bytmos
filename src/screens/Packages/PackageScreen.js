import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';

const PackageScreen = () => {
  return (
    <Container>
      <View>
        <Header isNotHome />
        <Text>PackageScreen</Text>
      </View>
    </Container>
  );
};

export default PackageScreen;

const styles = StyleSheet.create({});
