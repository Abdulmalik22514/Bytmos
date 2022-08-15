import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';

const ManageOrders = () => {
  return (
    <Container>
      <View>
        <Header isNotHome />
        <Text>ManageOrders</Text>
      </View>
    </Container>
  );
};

export default ManageOrders;

const styles = StyleSheet.create({});
