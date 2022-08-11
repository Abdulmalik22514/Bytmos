import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';

const ServiceOrders = () => {
  return (
    <Container>
      <View>
        <Header isNotHome />
        <Text>ServiceOrders</Text>
      </View>
    </Container>
  );
};

export default ServiceOrders;

const styles = StyleSheet.create({});
